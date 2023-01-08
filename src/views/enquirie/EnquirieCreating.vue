<template>
  <div>
    <div>
      <h3 class="font-semibold title-creating">Create New Enquiries </h3>

    </div>
    <a-form

        class="header-solid  form  ant-form ant-form-vertical"
        :form="form" :label-col="{ span:14 }" :wrapper-col="{ span: 14 }" @submit="handleSubmit">
      <a-form-item label="First Name" >
        <a-input
            placeholder="First Name"
            v-decorator="['firstName', { rules: [{ required: true, message: 'Please input your first name!' }] }]"
        />
      </a-form-item>
      <a-form-item label="Middle Name" >
        <a-input
            placeholder="Middle Name"
            v-decorator="['middleName', { rules: [{ required: false, message: 'Please input your middle name!' }] }]"
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

      <a-form-item label="Telephone Number " >
        <a-input
            placeholder='Telephone Number '
            v-decorator="['phoneNumber', { rules: [{ required: true, message:'Please input Telephone Number! ' }] }]"
        />
      </a-form-item>
      <a-form-item label="Area Located " >
        <a-input
            placeholder='Area Located '
            v-decorator="['areaLocated', { rules: [{ required: false }] }]"
        />
      </a-form-item>

      <a-form-item label="Stage">
        <a-select
            v-decorator="[
          'stage',
          { rules: [{ required: true, message: 'Please select stage!' }] },
        ]"
            placeholder="Select stage"

        >
          <a-select-option value='Part one'>
            Part one
          </a-select-option>
          <a-select-option value='Part two'>
            Part two
          </a-select-option>
          <a-select-option value='Contract signed'>
            Contract signed
          </a-select-option>
          <a-select-option value='Contract sent'>
            Contract sent
          </a-select-option>
          <a-select-option value='No longer interested'>
            No longer interested
          </a-select-option>
          <a-select-option value='Left message'>
            Left message
          </a-select-option>
          <a-select-option value='Emailed'>
            Emailed
          </a-select-option>
          <a-select-option value='Not eligible'>
            Not eligible
          </a-select-option>
          <a-select-option value='Awaiting DBS Check'>
            Awaiting DBS Check
          </a-select-option>
          <a-select-option value='Awaiting details for Contract'>
            Awaiting details for Contract
          </a-select-option>
          <a-select-option value='New Enquiry'>
            New Enquiry
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="Job Role">
        <a-select
            v-decorator="[
          'jobRole',
          { rules: [{ required: true, message: 'Please select job role!' }] },
        ]"
            placeholder="Select Job Role"

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
      <a-form-item label="Gender">
        <a-select
            placeholder="Gender"
            type="Gender"
            v-decorator="[
          'gender',
          { rules: [{ required: false }] },
        ]"

        >
          <a-select-option value="0">
            Male
          </a-select-option>
          <a-select-option value="1">
            Female
          </a-select-option>
          <a-select-option value="2">
            UnKnown
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Held a Full UK Licence for more than 3 Years?">
        <a-switch v-model:checked="heldFullUk"  />
      </a-form-item>
      <a-form-item label="21 years old or over?">
        <a-switch v-model:checked="overOld" />
      </a-form-item>
      <a-form-item label="Has Less Than 6 Points On Licence">
        <a-switch v-model:checked="lessThanPointLicence" />
      </a-form-item>

      <a-form-item label="Private Notes" >
        <a-textarea
            rows="5"
            placeholder='Private Notes'
            v-decorator="['privateNotes', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-divider >
        <a-button @click="goBack()"  type="default" html-type="button" >
          Discard
        </a-button>
        <a-button :loading="loading"  type="primary" html-type="submit" style="margin-left:15px">
          {{ loading ? 'Loading' : 'Submit' }}
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
      loading:false,
      form: this.$form.createForm(this, { name: 'coordinated' }),
      heldFullUk:false,
      overOld:false,
      lessThanPointLicence:false,
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
          values.lessThanPointLicence=this.lessThanPointLicence;
          values.isOverOld = this.overOld;
          values.heldFullUk = this.heldFullUk
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