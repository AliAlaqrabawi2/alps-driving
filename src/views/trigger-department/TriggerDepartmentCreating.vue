<template>
  <div>
    <div>
      <h3 class="font-semibold title-creating">Create New training Department</h3>

    </div>
    <a-form layout="vertical"

        class="header-solid  form"
        :form="form" :label-col="{ span:14 }" :wrapper-col="{ span: 14 }" @submit="handleSubmit">
      <a-form-item label="Title" >
        <a-input
            placeholder="Title"
            v-decorator="['title', { rules: [{ required: true, message: 'Please input Title!' }] }]"
        />
      </a-form-item>
      <a-form-item label="Description" >
        <a-textarea rows="5"
            placeholder="Description"
            v-decorator="['description', { rules: [{ required: true, message: 'Please write a description!' }] }]"
        />
      </a-form-item>
    
      <a-divider >
        <a-button @click="goBack()"  type="default" html-type="button" >
          Discard
        </a-button>
        <a-button  :loading="loading" type="primary" html-type="submit" style="margin-left:15px">
          {{ loading ? 'Loading' : 'Submit' }}
        </a-button>

      </a-divider>
    </a-form>
  </div>
</template>
<script>
import Swal from "sweetalert2";

import {uploadToStorage} from "../../firebase/methods/sotrage"

export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }), 
      loading:false,
    };
  },
  methods: {
    goBack(){
      this.$router.push("training-department-listing")
    } ,
 

    handleSubmit(e) {
      e.preventDefault();
     

      this.form.validateFields(async(err, values) => {
        if (!err) {
          this.loading=true;
          await this.$store.dispatch("createNewDepartment", values  );
          const error = this.$store.getters.getError;
          if (!error) {
            Swal.fire(
                'successfully created!',
                'You create  a new Department',
                'success'
            ).then(()=>{
              this.loading=false;
              this.$router.push("training-department-listing");
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

      });
    },

  

  },
};
</script>

<style scoped>
.form{
  box-shadow: 0 20px 27px rgb(0 0 0 / 5%);  border-radius: 4px;
  background-color: #fff;
  padding: 10px;
}


</style>