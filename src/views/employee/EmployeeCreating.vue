<template>
  <div>
    <div>
      <h3 class="font-semibold title-creating">Create New Employee</h3>

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
      <a-form-item label="Sir Name" >
        <a-input
            v-decorator="['sirName', { rules: [{ required: true, message: 'Please input your sir name!' }] }]"
        />
      </a-form-item>
      <a-form-item label="Email" >

        <a-input
            type="email"
            v-decorator="['email', { rules: [{ type:'email' , required: true, message: 'This is not valid email!' }] }]"
        />
      </a-form-item>


      <a-form-item label="Phone Number" >
        <a-input
            v-decorator="['phoneNumber', { rules: [{ required: true, message:'Please input your phone number' }] }]"
        />
      </a-form-item>
      <a-form-item label="Gender">
        <a-select
            v-decorator="[
          'gender',
          { rules: [{ required: true, message: 'Please select gender!' }] },
        ]"

        >
          <a-select-option value=false>
            Male
          </a-select-option>
          <a-select-option value=true>
            Female
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="address" >
        <a-input
            placeholder='optional'
            v-decorator="['address', { rules: [{ required: false}] }]"
        />
      </a-form-item>
      <a-form-item label="country" >
        <a-input
            placeholder='optional'
            v-decorator="['country', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Street Name" >
        <a-input
            placeholder='optional'
            v-decorator="['streetName', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Post code" >
        <a-input
            placeholder='Post code'
            v-decorator="['Postcode', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="driving Licences No" >
        <a-input
            placeholder='driving LicencesNo'
            v-decorator="['drivingLicencesNo', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="city" >
        <a-input
            placeholder='city'
            v-decorator="['city', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Location Based" >
        <a-input
            placeholder='location Based'
            v-decorator="['locationBased', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Areas Covered" >
        <a-input
            placeholder='areas Covered'
            v-decorator="['areasCovered', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Trainer Experience" >
        <a-input
            placeholder='trainer Experience'
            v-decorator="['trainerExperience', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="trainer PassRate" >
        <a-input
            placeholder='trainer PassRate'
            v-decorator="['trainerPassRate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Private Notice" >
        <a-input
            placeholder='private Notice'
            v-decorator="['privateNotice', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Points On License" >
        <a-input
            placeholder='points On License'
            v-decorator="['pointsOnLicense', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Contract Start Date" >
        <a-input
            placeholder='contract Start Date'
            v-decorator="['contractStartDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label=" Training Hours" >
        <a-input
            placeholder='standard Check Training Hours'
            v-decorator="['standardCheckTrainingHours', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Check Passed Date" >
        <a-input
            placeholder='standard Check Passed Date'
            v-decorator="['standardCheckPassedDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Dbs Check Date" >
        <a-input
            placeholder='dbsCheckDate'
            v-decorator="['dbsCheckDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Extra Qualification" >
        <a-input
            placeholder='extraQualification'
            v-decorator="['extraQualification', { rules: [{ required: false }] }]"
        />
      </a-form-item>

      <a-form-item label="Language Spooking" >
        <a-input
            placeholder='language Spooking'
            v-decorator="['languageSpooking', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Gaps In" >
        <a-input
            placeholder='gaps In Between Lessons'
            v-decorator="['gapsInBetweenLessons', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="date Of Birth" >
        <a-input
            placeholder='date Of Birth'
            v-decorator="['dateOfBirth', { rules: [{ required: false }] }]"
        />
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
      this.$router.push("employee-listing")
    } ,
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async(err, values) => {
        if (!err) {
          await this.$store.dispatch("createNewEmployee", values);
          const error = this.$store.getters.getError;
          console.log(error);
          if (!error) {
            Swal.fire(
                'successfully created!',
                'You create  a new Employee',
                'success'
            ).then(()=>{
              this.$router.push("employee-listing");
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