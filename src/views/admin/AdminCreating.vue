<template>
  <div>
    <div>
      <h3 class="font-semibold title-creating">Create New Admin</h3>

    </div>
    <a-form layout="vertical"

        class="header-solid  form"
        :form="form" :label-col="{ span:14 }" :wrapper-col="{ span: 14 }" @submit="handleSubmit">
      <a-form-item label="First Name" >
        <a-input
            placeholder="First Name"
            v-decorator="['firstName', { rules: [{ required: true, message: 'Please input your first name!' }] }]"
        />
      </a-form-item>
      <a-form-item label="Last Name" >
        <a-input
            placeholder="Last Name"
            v-decorator="['lastName', { rules: [{ required: true, message: 'Please input your last name!' }] }]"
        />
      </a-form-item>
      <a-form-item label="Email" >

        <a-input
            type="email"
            placeholder="Email"
            v-decorator="['email', { rules: [{type:'email' ,required: true , message: 'This is not valid email' }] }]"
        />
      </a-form-item>
      <a-form-item label="Password" >
        <a-input
            placeholder="Password"
            type="password"
            v-decorator="['pass', { rules: [{ required: true, message: 'Please input your password!' }] }]"
        />
      </a-form-item>

      <a-form-item label="Telephone" >
        <a-input
            placeholder='Telephone'
            v-decorator="['phoneNumber', { rules: [{ required: true, message:'Please input Telephone' }] }]"
        />
      </a-form-item>

      <a-form-item label="permission">
        <a-select
            v-decorator="[
          'isSupervisor',
          { rules: [{ required: true, message: 'Please select Permission!' }] },
        ]"
            placeholder="Select a option and change input text above"

        >
          <a-select-option value=false>
            Admin
          </a-select-option>
          <a-select-option value=true>
            SuperVisor
          </a-select-option>
        </a-select>
      </a-form-item>
      
      <a-upload :file-list="fileList" :remove="handleRemove" :multiple="false" :before-upload="beforeUpload" >
      <a-button> <a-icon type="upload" /> Select File </a-button>
    </a-upload>
   
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
import Swal from "sweetalert2";
<script>
import Swal from "sweetalert2";

import {uploadToStorage} from "../../firebase/methods/sotrage"

export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }), 
      fileList: [],
      loading:false,
    };
  },
  methods: {
    goBack(){
      this.$router.push("admin-listing")
    } ,
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    beforeUpload(file) {
      this.fileList = [file];
      return false;
    },
   

    handleSubmit(e) {
      e.preventDefault();
     

      this.form.validateFields(async(err, values) => {
        if (!err) {
          this.loading=true;
          const { fileList } = this;
      const file = fileList[0]
      this.uploading = true;
    
      if (fileList.length>0){
        uploadToStorage("admin" , file).then(url=>{
          values.imgUrl = url;
          this.createAdmin(values);
      
     })
      }
      else {
        this.createAdmin(values);
      }
        }

      });
    },

   async createAdmin(values){
     await this.$store.dispatch("createNewAdmin", values  );
          const error = this.$store.getters.getError;
          if (!error) {
            Swal.fire(
                'successfully created!',
                'You create  a new Admin',
                'success'
            ).then(()=>{
              this.loading=false;
              this.$router.push("admin-listing");
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