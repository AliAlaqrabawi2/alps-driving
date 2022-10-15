<template>
  <div>
    <div>
      <h3 class="font-semibold title-creating">Create New Trainee</h3>

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
      <a-form-item label="Date Of Birth" >
        <a-input
            placeholder='Date Of Birth'
            v-decorator="['dateOfBirth', { rules: [{ required: false }] }]"
        />
      </a-form-item>

      <a-form-item label="Email" >

        <a-input
            placeholder="Email"
            type="email"
            v-decorator="['email', { rules: [{type:'email' ,  required: true, message: 'This is not valid email!' }] }]"
        />
      </a-form-item>


      <a-form-item label="Telephone" >
        <a-input
            placeholder="Phone Number"
            v-decorator="['phoneNumber', { rules: [{ required: true, message:'Please input your phone number' }] }]"
        />
      </a-form-item>
      <a-form-item label="Gender">
        <a-select
            placeholder="Gender"
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

      <a-form-item label="Address" >
        <a-input
            placeholder='Address'
            v-decorator="['address', { rules: [{ required: true ,message:'please input address'}] }]"
        />
      </a-form-item>
      <a-form-item label="County" >
        <a-input
            placeholder='Optional'
            v-decorator="['county', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Street Name" >
        <a-input
            placeholder='Optional'
            v-decorator="['streetName', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Post code" >
        <a-input
            placeholder='Post code'
            v-decorator="['Postcode', { rules: [{ required: true,message:'Please input post code' }] }]"
        />
      </a-form-item>
      <a-form-item label="Driving Licences No" >
        <a-input
            placeholder='driving Licences No'
            v-decorator="['drivingLicencesNo', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="City" >
        <a-input
            placeholder='City'
            v-decorator="['city', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Location Based" >
        <a-input
            placeholder='Location Based'
            v-decorator="['locationBased', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Areas Covered" >
        <a-input
            placeholder='Areas Covered'
            v-decorator="['areasCovered', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Trainer Experience" >
        <a-input
            placeholder='Trainer Experience'
            v-decorator="['trainerExperience', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Trainer PassRate" >
        <a-input
            placeholder='Trainer PassRate'
            v-decorator="['trainerPassRate', { rules: [{ required: false }] }]"
        />
      </a-form-item>


      <a-form-item label="Points On License" >
        <a-input
            placeholder='Points On License'
            v-decorator="['pointsOnLicense', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Contract Start Date" >
        <a-input
            placeholder='Contract Start Date'
            v-decorator="['contractStartDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label=" Training Hours" >
        <a-input
            placeholder='Standard Check Training Hours'
            v-decorator="['standardCheckTrainingHours', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Check Passed Date" >
        <a-input
            placeholder='Standard Check Passed Date'
            v-decorator="['standardCheckPassedDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Dbs Check Date" >
        <a-input
            placeholder='Dbs Check Date'
            v-decorator="['dbsCheckDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Extra Qualification" >
        <a-input
            placeholder='ExtraQualification'
            v-decorator="['extraQualification', { rules: [{ required: false }] }]"
        />
      </a-form-item>

      <a-form-item label="Language Spooking" >
        <a-input
            placeholder='Language Spooking'
            v-decorator="['languageSpooking', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Gaps In" >
        <a-input
            placeholder='Gaps In Between Lessons'
            v-decorator="['gapsInBetweenLessons', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Private Notice" >
        <a-textarea
            rows="5" cols="50"
            placeholder='Private Notice'
            v-decorator="['privateNotice', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="App Progress" >
        <a-textarea
            rows="7" cols="50"
            placeholder='App Progress '
            v-decorator="['appProgress', { rules: [{ required: false }] }]"
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
      this.$router.push("trainee-listing")
    } ,
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async(err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
         await this.$store.dispatch("createNewTrainee", values);
          const error = this.$store.getters.getError;
          console.log(error);
          if (!error) {
            Swal.fire(
                'successfully created!',
                'You create  a new Trainee',
                'success'
            ).then(()=>{
              this.$router.push("trainee-listing");
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