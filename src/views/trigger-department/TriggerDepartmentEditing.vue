<template>
<div>
<div class="header-title ">
  <h3 class="font-semibold title-creating">Edit Training Department</h3>

</div>
   
   <a-form-model
       ref="ruleForm"
       :model="department"
       :rules="rules"
       :label-col="labelCol"
       :wrapper-col="wrapperCol"
       @submit="onSubmit"
       class="ant-form ant-form-vertical"
   >
     <a-form-model-item ref="title" label="title" prop="title">
       <a-input
           v-model="department.title"
           @blur="
          () => {
            $refs.title.onFieldBlur();
          }
        "
       />
       </a-form-model-item>
   
       <a-form-model-item ref="description" label="Description" prop="description">
       <a-textarea rows="6"
           v-model="department.description"
           @blur="
          () => {
            $refs.description.onFieldBlur();
          }
        "
       />
       </a-form-model-item>
   
   

   
     <a-divider >
       <a-button @click="goBack()"  type="default" html-type="button" >
         Discard
       </a-button>
       <a-button :loading="loading"  type="primary" html-type="submit" style="margin-left:15px">
        {{ loading ? 'Loading' : 'Submit' }}
       </a-button>

     </a-divider>
   </a-form-model>



</div>
</template>
<script>
  import Swal from "sweetalert2";
export default {

  data() {
    return {
      labelCol: { span: 14},
      wrapperCol: { span: 14 },
      department: {},
      loading:false,
      rules: {
        title: [
          { required: true, message: 'Please input title!', trigger: 'blur' },
        ],
        description: [
          { required: true, message: 'Please write description!', trigger: 'blur' },
        ],

     

      },
    };
  },
  methods: {
   


    onSubmit(e) {
      e.preventDefault();
      this.loading=true;
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          this.department.id = this.$route.params.id;
          
      await this.$store.dispatch("updateDepartment",this.department); 

const error = this.$store.getters.getError;
if (!error) {
Swal.fire(
    'successfully Updated!',
    'You update  an department',
    'success'
).then(()=>{
  this.loading=false;
  this.$router.push({name:"training-department-listing"});
})
}
else {
this.loading=false;

Swal.fire(
    'SomeThing Wrong',
    error,
    'error'
)

}
        }
        })

    },

  

    goBack(){
      this.$router.push({name:"training-department-listing"})
    } ,
  },
 async created() {
      await this.$store.dispatch("getUniqueDepartment" ,this.$route.params.id) ;
      this.department = this.$store.getters.getDepartment;
  },



};
</script>


<style >
.upload{
  margin-left:70px;
}
.header-title{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom:20px;
}
.header-title img {
  border:2px solid #ccc;
  width:70px;
  height: 70px;
  border-radius: 50%;
  margin-left:10px;
  object-fit: cover;
}
</style>