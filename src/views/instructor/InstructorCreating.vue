<template>
  <div>
    <div>
      <h3 class="font-semibold title-creating">Create New Instructor</h3>

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
            v-decorator="['middleName', { rules: [{ required: false, message: 'Please input your last name!' }] }]"
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
            v-decorator="['phoneNumber', { rules: [{ required: true, message:'Please input telephone number!' }] }]"
        />
      </a-form-item>

      <a-form-item label="Gender">
        <a-select
            placeholder="Gender"
            type="Gender"
            v-decorator="[
          'gender',
          { rules: [{ required: true, message: 'Please select gender!' }] },
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

      <a-form-item label="Driving Licence Number" >
        <a-input
            placeholder='Driving Licence Number'
            v-decorator="['drivingLicencesNo', { rules: [{ required: false }] }]"
        />
      </a-form-item>

      <a-form-item label="Address / Street name" >
        <a-input
            placeholder='Address / Street name'
            v-decorator="['address', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="County" >
        <a-input
            placeholder='County'
            v-decorator="['county', { rules: [{ required: false }] }]"
        />
      </a-form-item>

      <a-form-item label="City" >
        <a-input
            placeholder='City'
            v-decorator="['city', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Post Code" >
        <a-input
            placeholder='Post Code'
            v-decorator="['postCode', { rules: [{ required: true, message:'Please input post code' }] }]"
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



      <a-form-item label="date Of Birth" >
        <a-input
            placeholder='Date Of Birth'
            v-decorator="['dateOfBirth', { rules: [{ required: false }] }]"
        />
      </a-form-item>

      <a-form-item label="ADI Number" >
        <a-input
            placeholder='ADI Number'
            v-decorator="['ADINo', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="ADI Licence Starting Date" >
        <a-input
            placeholder='ADI Licence Starting Date'
            v-decorator="['ADILicencesStartingDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="ADI Licence Expiry Date" >
        <a-input
            placeholder='ADI Licence Expiry Date'
            v-decorator="['ADILicencesExpiryDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>


      <a-form-item label="Contract Start Date" >
        <a-input
            placeholder='Contract Start Date'
            v-decorator="['contractStartDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Contract Expiry Date" >
        <a-input
            placeholder='Contract Expiry Date'
            v-decorator="['contractExpiryDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Trainer Licence Starting Date" >
        <a-input
            placeholder='Trainer Licence Starting Date'
            v-decorator="['trainerLicencesStartingDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Trainer Licence  Expiry Date" >
        <a-input
            placeholder='Trainer Licence Expiry Date'
            v-decorator="['trainerLicenceExpiryDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Trainer Experience" >
        <a-input
            placeholder='Trainer Experience'
            v-decorator="['trainerExperience', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Trainer Pass Rate" >
        <a-input
            placeholder='Trainer pass Rate'
            v-decorator="['trainerPassRate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Complaints" >
        <a-textarea rows="4"
            placeholder='Complaints'
            v-decorator="['complaints', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Probation Period" >
        <a-textarea rows="5"
            placeholder='Probation Period'
            v-decorator="['probationPeriod', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Referrals" >
        <a-input
            placeholder='Referrals'
            v-decorator="['referrals', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="DBS Check Date" >
        <a-input
            placeholder='DBS CheckD ate'
            v-decorator="['DBSCheckDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Part1 Pass Date" >
        <a-input
            placeholder='Part 1 Pass date'
            v-decorator="['p1PassDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Part2 Pass Date" >
        <a-textarea
        rows="5"
            placeholder='Part 2 Pass date'
            v-decorator="['p2PassDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Part3 Pass Date" >
        <a-textarea
        rows="5"
            placeholder='Part 3 Pass date'
            v-decorator="['p3PassDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Part2 Training Hours" >
        <a-textarea 
        rows="5"
            placeholder='Part2 Training Hours'
            v-decorator="['p2TrainingHours', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Part3 Training Hours" >
        <a-textarea 
        rows="5"
            placeholder='Part3 Training Hours'
            v-decorator="['p3TrainingHours', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Standard Check Training Hours " >
        <a-textarea row="5"
            placeholder='Standard Check Training Hours'
            v-decorator="['standardCheckTrainingHours', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Standard Check Pass Date" >
        <a-input
            placeholder='Standard Check Pass Date'
            v-decorator="['standardCheckPassDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Extra Qualification" >
        <a-textarea 
        rows="5"
            placeholder='Extra Qualification'
            v-decorator="['extraQualification', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Languages spoken" >
        <a-input
            placeholder='Languages spoken'
            v-decorator="['languageSpoken', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Job Hours" >
        <a-input
            placeholder='Job Hours'
            v-decorator="['jobHours', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Gaps In Between " >
        <a-input
            placeholder='Gaps Between Lessons'
            v-decorator="['gapsInBetweenLessons', { rules: [{ required: false }] }]"
        />
      </a-form-item>

      <a-form-item label="Dual Controls " >
        <a-input
            placeholder='Dual Controls'
            v-decorator="['dualControls', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Car Wrapping" >
        <a-textarea rows="5"
            placeholder='Car Wrapping'
            v-decorator="['carWrapping', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Loans" >
        <a-textarea rows="3"
            placeholder="Loans"
            v-decorator="['loans', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Start Payment Date" >
        <a-input
            placeholder='Start Payment Date'
            v-decorator="['startPaymentDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="End Payment Date" >
        <a-input
            placeholder='End Payment Date'
            v-decorator="['endPaymentDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Private Notes" >
        <a-textarea
            rows="5"
            placeholder='Private Notes'
            v-decorator="['privateNotes', { rules: [{ required: false }] }]"
        />
      </a-form-item>

      <a-form-item label="Where did you hear about us ?" >
        <a-input
            placeholder='Where did you hear about us ?'
            v-decorator="['hearAboutUs', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Any points on licence?" >
        <a-input
            placeholder='Any points on licence?'
            v-decorator="['pointsOnLicence', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="How long  held the UK licence?" >
        <a-input
            placeholder='How long  held the UK licence?'
            v-decorator="['heldUkLicence', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-upload style="padding-top:10px" :file-list="fileList" :remove="handleRemove" :multiple="false" :before-upload="beforeUpload" >
      <a-button> <a-icon type="upload" />Upload  PDI  </a-button>
    </a-upload>

      <a-divider >
        <a-button @click="goBack()"  type="default" html-type="button" >
          Discard
        </a-button>
        <a-button :loading="loading" type="primary" html-type="submit" style="margin-left:15px">
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
      fileList: [],
      fileListClone:[],
      loading:false,
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    goBack(){
      this.$router.push("instructor-listing")
    } ,
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList,file]; 
      console.log(this.fileList)
      return false;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async(err, values) => {
        if (!err) {
          this.loading=true;
    
      if (this.fileList.length>0){
        await  uploadToStorage("instructor" , this.fileList[0]).then(url=>{
      values.PDIimage=url;

      
     })
      }
    
     
     await this.createInstructor(values); 
    
    }

      });
    },


    async createInstructor(values){
     await this.$store.dispatch('createNewInstructor' ,values  );
          const error = this.$store.getters.getError;
          if (!error) {
            Swal.fire(
                'successfully created!',
                'You create  a new Instructor',
                'success'
            ).then(()=>{
              this.loading=false;
              this.$router.push("instructor-listing");
            })
          }
          else {
            this.loading=false;
            this.fileList=[];
          
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