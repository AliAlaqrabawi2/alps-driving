<template>
  <div>
    <div>
      <h3 class="font-semibold title-creating">Create New Enquirie</h3>

    </div>
    <a-form

        class="header-solid  form"
        :form="form" :label-col="{ span:3 }" :wrapper-col="{ span: 10 }" @submit="handleSubmit">
      <a-form-item label="First Name" >
        <a-input
            placeholder="First Name"
            v-decorator="['firstName', { rules: [{ required: true, message: 'Please input your first name!' }] }]"
        />
      </a-form-item>
      <a-form-item label="Middle Name" >
        <a-input
            placeholder="Middle Name"
            v-decorator="['middleName', { rules: [{ required: true, message: 'Please input your middle name!' }] }]"
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

      <a-form-item label="Telephone" >
        <a-input
            placeholder='Telephone'
            v-decorator="['phoneNumber', { rules: [{ required: true, message:'Please input Telephone' }] }]"
        />
      </a-form-item>
      <a-form-item label="Job Role" >
        <a-input
            placeholder='Job Role'
            v-decorator="['jobRole', { rules: [{ required: true, message:'Please input job role' }] }]"
        />
      </a-form-item>

      <a-form-item label="Rank">
        <a-select
            v-decorator="[
          'rank',
          { rules: [{ required: true, message: 'Please select Rank!' }] },
        ]"
            placeholder="Select Rank"

        >
          <a-select-option value='Instructor Enquiries'>
            Instructor Enquiries
          </a-select-option>
          <a-select-option value='Employee Enquiries'>
            Employee Enquiries
          </a-select-option>
          <a-select-option value='Trainer Enquiries'>
            Trainer Enquiries
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
      this.$router.push("enquiries-listing")
    } ,
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async(err, values) => {
        if (!err) {
          await this.$store.dispatch("createNewEnquirie", values);
          const error = this.$store.getters.getError;
          console.log(error);
          if (!error) {
            Swal.fire(
                'successfully created!',
                'You create  a new Enquirie',
                'success'
            ).then(()=>{
              this.$router.push("enquiries-listing");
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