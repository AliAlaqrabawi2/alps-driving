<template>
<div>
   <div>
     <h3 class="font-semibold title-creating">Edit Admin</h3>

   </div>
   <a-form-model
       ref="ruleForm"
       :model="admin"
       :rules="rules"
       :label-col="labelCol"
       :wrapper-col="wrapperCol"
       @submit="onSubmit"
   >
     <a-form-model-item ref="firstName" label="First name" prop="firstName">
       <a-input
           v-model="admin.firstName"
           @blur="
          () => {
            $refs.firstName.onFieldBlur();
          }
        "
       />
     </a-form-model-item>
     <a-form-model-item ref="lastName" label="Last name" prop="lastName">
       <a-input
           v-model="admin.lastName"
           @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
       />
     </a-form-model-item>

     <a-form-model-item ref="email" label="Email" prop="email">
       <a-input
           v-model="admin.email"
           @blur="
          () => {
            $refs.email.onFieldBlur();
          }
        "
       />
     </a-form-model-item>

     <a-form-model-item ref="phoneNumber" label="Telephone"  >
       <a-input
           placeholder="Phone Number"
           v-model="admin.phoneNumber"
           @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
       />
     </a-form-model-item>

     <a-form-item label="permission">
       <a-select
           v-model="permission"
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

     <a-divider >
       <a-button @click="goBack()"  type="default" html-type="button" >
         Discard
       </a-button>
       <a-button  type="primary" html-type="submit" style="margin-left:15px">
         Submit
       </a-button>

     </a-divider>
   </a-form-model>
 </div>



</div>
</template>
<script>
export default {
  data() {
    return {
      labelCol: { span: 3},
      wrapperCol: { span: 10 },
      admin: {},
      permission:null,
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
    onSubmit(e) {
      e.preventDefault();
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          this.admin.id = this.$route.params.id;
            if (this.permission==="false" ||this.permission==="true"){
              this.admin.isSupervisor =this.permission;
            }
          await this.$store.dispatch("updateAdmin",this.admin);
        } else {
          return false;
        }
      });
    },
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
      this.permission = this.admin.isSupervisor ? "SuperVisor":"Admin"
  },



};
</script>
