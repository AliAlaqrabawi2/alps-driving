<template>
  <div>
    <div>
      <h3 class="font-semibold title-creating">Create New Admin</h3>

    </div>
    <a-form

        class="header-solid  form"
        :form="form" :label-col="{ span:3 }" :wrapper-col="{ span: 10 }" @submit="handleSubmit">
      <a-form-item label="First Name" >
        <a-input
            v-decorator="['firstName', { rules: [{ required: true, message: 'Please input your first name!' }] }]"
        />
      </a-form-item>
      <a-form-item label="Last Name" >
        <a-input
            v-decorator="['lastName', { rules: [{ required: true, message: 'Please input your last name!' }] }]"
        />
      </a-form-item>
      <a-form-item label="Email" >

        <a-input
            type="email"
            v-decorator="['email', { rules: [{type:'email' ,required: true , message: 'This is not valid email' }] }]"
        />
      </a-form-item>
      <a-form-item label="Password" >
        <a-input
            type="password"
            v-decorator="['pass', { rules: [{ required: true, message: 'Please input your password!' }] }]"
        />
      </a-form-item>

      <a-form-item label="Phone Number" >
        <a-input
            placeholder='optional'
            v-decorator="['phoneNumber', { rules: [{ required: false, }] }]"
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
      <a-divider >
        <a-button @click="goBack()"  type="default" html-type="button" >
          Discard
        </a-button>
        <a-button  type="primary" html-type="submit" style="margin-left:15px">
          Submit
        </a-button>

      </a-divider>
    </a-form>
  </div>
</template>
import Swal from "sweetalert2";
<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    goBack(){
      this.$router.push("admin-listing")
    } ,
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async(err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
         await this.$store.dispatch("createNewAdmin", values);
          const error = this.$store.getters.getError;
          console.log(error);
          if (!error) {
            Swal.fire(
                'successfully created!',
                'You create  a new Admin',
                'success'
            ).then(()=>{
              this.$router.push("admin-listing");
            })
          }
          else {
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