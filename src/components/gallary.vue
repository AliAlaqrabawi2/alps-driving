<template>
    <div  class="container">
        <div class="gallery">
  <a target="_blank" :href="urlImg" class="img-container" >
    <img :src="urlImg" width="600" height="400">
  </a>
  <a-button @click="deleteImage" class="btn" type="danger" danger>delete Image</a-button>

  
</div>


    </div>
</template>

<script>
import Swal from "sweetalert2";
import {DeleteImgFromStorage} from "../firebase/methods/sotrage"

export default {
    props:['method','urlImg'] , 
    methods:{
        deleteImage(){
         
            Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        buttons: 'Yes, delete it!'
      }).then(async(result) => {
        if (result.isConfirmed) {
          const payload = {
            id:this.$route.params.id,
            urlImage:this.urlImg
          }
         
       await  this.$store.dispatch(this.method,payload);
        await DeleteImgFromStorage(this.urlImg)
          const error = this.$store.getters.getError;
          if (!error) {
        
            Swal.fire(
                'Deleted!',
                'Image has been deleted.',
                'success'
            )
          }

          else {
            Swal.fire(
                'SomeThing Wrong',
                 error,
                'error'
            )          }
        }
      })

        }
    }
            
}
</script>




<style>
div.gallery {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
  border-radius: 5px;
  position: relative;
}



div.gallery img {
  width: 100%;
  min-height: 50px;
  max-height: 100px;
  border-bottom: 1px solid #eee;
}


div.desc {
  padding: 15px;
  text-align: center;
}
.container {
    position:relative
}
.btn{
    margin:10px auto ;
    transform: translateX(30%);

}

</style>