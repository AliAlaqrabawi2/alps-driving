<template>
  <div>
    <div class="header-title ">
      <h3 class="font-semibold title-creating"> Admin Overview</h3>
      <img :src="admin.imgUrl" v-if="admin.imgUrl"  class="profile-img"/>

    </div>

    <a-form-model
        ref="ruleForm"
        :model="admin"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        @submit="onSubmit"
        class="ant-form ant-form-vertical"
    >
      <a-form-model-item ref="firstName" label="First name" prop="firstName">
        <a-input disabled
            v-model="admin.firstName"
            @blur="
          () => {
            $refs.firstName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="lastName" label="Last name" prop="lastName">
        <a-input disabled
            v-model="admin.lastName"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>

      <a-form-model-item ref="email" label="Email" prop="email">
        <a-input disabled 
            v-model="admin.email"
            @blur="
          () => {
            $refs.email.onFieldBlur();
          }
        "
        />
      </a-form-model-item>

      <a-form-model-item ref="phoneNumber" label="Telephone Number "  >
        <a-input disabled
            placeholder="Telephone Number "
            v-model="admin.phoneNumber"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>

      <a-form-item label="Position">
        <a-select disabled
            v-model="position"
            placeholder="Select a position"

        >
          <a-select-option value=false>
            Admin
          </a-select-option>
          <a-select-option value=true>
            SuperVisor
          </a-select-option>
        </a-select>
      </a-form-item>

     

      <a-divider >
        <a-button @click="goBack()"  type="default" html-type="button" >
          Back
        </a-button>

      </a-divider>
    </a-form-model>



  </div>
</template>
<script>
import {uploadToStorage} from "../../firebase/methods/sotrage"

export default {
  data() {
    return {
      labelCol: { span: 14},
      wrapperCol: { span: 14 },
      admin: {},
      position:null,
      loading:false,
      fileList: [],
      rules: {
        firstName: [
          { required: true, message: 'Please input first name', trigger: 'blur' },
        ],
        lastName: [
          { required: true, message: 'Please input last name', trigger: 'blur' },
        ],

        email: [
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ],

      },
    };
  },
  methods: {
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    beforeUpload(file) {
      this.fileList = [ file];
      return false;
    },


    onSubmit(e) {
      e.preventDefault();
      this.loading=true;
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {

          const { fileList } = this;
          const file = fileList[0]
          this.uploading = true;

          if (fileList.length>0){
            uploadToStorage("admin" , file).then(url=>{
              this.admin.imgUrl = url;
              this.editAdmin();

            })
          }
          else {
            this.editAdmin();

          }
        }
      })

    },

    async editAdmin(){
      this.admin.id = this.$route.params.id;
      if (this.position==="false" ||this.position==="true"){
        this.admin.isSupervisor =this.position;
      }
      await this.$store.dispatch("updateAdmin",this.admin);

      const error = this.$store.getters.getError;
      if (!error) {
        Swal.fire(
            'successfully Updated!',
            'You update  an Admin',
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

    } ,
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    goBack(){
      this.$router.push({name:"admin-listing"})
    } ,
  },
  async created() {
    await this.$store.dispatch("getUniqueAdmin" ,this.$route.params.id) ;
    this.admin = this.$store.getters.getAdmin;
    this.position = this.admin.isSupervisor ? "SuperVisor":"Admin"
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