<template>
  <div>
    <div>
      <h3 class="font-semibold title-creating">Edit Instructor</h3>

    </div>
    <a-form-model
        ref="ruleForm"
        :model="instructor"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        @submit="onSubmit"
        class="ant-form ant-form-vertical"
    >
      <a-form-model-item ref="firstName" label="First name" prop="firstName">
        <a-input
            v-model="instructor.firstName"
            @blur="
          () => {
            $refs.firstName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="middleName" label="Middle Name" prop="middleName">
        <a-input
            v-model="instructor.middleName"
            @blur="
          () => {
            $refs.firstName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="lastName" label="Last name" prop="lastName">
        <a-input
            v-model="instructor.lastName"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="email" label="Email" prop="email">
        <a-input
            v-model="instructor.email"
            @blur="
          () => {
            $refs.email.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="phoneNumber" label="Telephone Number "  >
        <a-input
            placeholder="Phone Number"
            v-model="instructor.phoneNumber"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-item label="Gender">
        <a-select
            v-model="instructor.gender"
            placeholder="Gender"
            type="Gender"
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
      <a-form-model-item ref="drivingLicencesNo" label="Driving Licences Number"  >
        <a-input
            placeholder="driving Licences Number"
            v-model="instructor.drivingLicencesNo"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="address" label="Address /street name"  >
        <a-input
            placeholder="Address /street name"
            v-model="instructor.address"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="county" label="County"  >
        <a-input
            placeholder="County"
            v-model="instructor.county"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="city" label="City"  >
        <a-input
            placeholder="City"
            v-model="instructor.city"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
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

      <a-form-model-item ref="postCode" label="Post Code"  >
        <a-input
            placeholder="Post Code"
            v-model="instructor.postCode"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>

      <a-form-model-item ref="dateOfBirth" label="Date Of Birth"  >
        <a-input
            placeholder="Date Of Birth"
            v-model="instructor.dateOfBirth"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>


      <a-form-model-item ref="ADINO" label="ADI Number"  >
        <a-input
            placeholder="ADI Number"
            v-model="instructor.ADINo"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="ADILicencesStartingDate" label="ADI Licences Starting Date"  >
        <a-input
            placeholder="ADI Licences Starting Date"
            v-model="instructor.ADILicencesStartingDate"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="ADILicencesExpiryDate" label="ADI Licences Expiry Date"  >
        <a-input
            placeholder="ADI Licences Expiry Date"
            v-model="instructor.ADILicencesExpiryDate"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="locationBased" label="Location Based"  >
        <a-input
            placeholder="Location Based"
            v-model="instructor.locationBased"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="areasCovered" label="Areas Covered"  >
        <a-input
            placeholder="Areas Covered"
            v-model="instructor.areasCovered"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="contractStartDate" label="Contract Start Date"  >
        <a-input
            placeholder="Contract Start Date"
            v-model="instructor.contractStartDate"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="contractExpireDate" label="Contract Expire Date"  >
        <a-input
            placeholder="Contract Expire Date"
            v-model="instructor.contractExpireDate"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="trainerLicencesStartingDate" label="Trainer Licences Starting Date"  >
        <a-input
            placeholder="Trainer Licences Starting Date"
            v-model="instructor.trainerLicencesStartingDate"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="trainerLicencesExpireDate" label="Trainer Licences Expire Date"  >
        <a-input
            placeholder="Trainer Licences Expire Date"
            v-model="instructor.trainerLicencesExpireDate"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="trainerExperience" label="Trainer Experience "  >
        <a-input
            placeholder="Trainer Experience"
            v-model="instructor.trainerExperience"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="trainerPassRate" label="Trainer PassRate "  >
        <a-input
            placeholder="Trainer PassRate"
            v-model="instructor.trainerPassRate"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="complaints" label="Complaints "  >
        <a-textarea rows="4"
            placeholder="Complaints"
            v-model="instructor.complaints"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="probationPeriod" label="Probation Period "  >
        <a-textarea rows="5"
            placeholder="Probation Period"
            v-model="instructor.probationPeriod"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="referrals" label="Referrals "  >
        <a-input
            placeholder="Referrals"
            v-model="instructor.referrals"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="DBSCheckDate" label="DBS Check Date "  >
        <a-input
            placeholder="Referrals"
            v-model="instructor.DBSCheckDate"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="p1PassDate" label="Part 1 Pass date  "  >
        <a-input
            placeholder="Part 1 Pass date"
            v-model="instructor.p1PassDate"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="p2PassDate" label="Part 2 Pass date  "  >
        <a-input
            placeholder="Part 2 Pass date"
            v-model="instructor.p2PassDate"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="p3PassDate" label="Part 3 Pass date  "  >
        <a-input
            placeholder="Part 3 Pass date"
            v-model="instructor.p3PassDate"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="p2TrainingHours" label="Part 2 Training Hourst  "  >
        <a-input
            placeholder="Part 2 Pass date"
            v-model="instructor.p2TrainingHours"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="p3TrainingHours" label="Part 3 Training Hourst  "  >
        <a-input
            placeholder="Part 3 Pass date"
            v-model="instructor.p3TrainingHours"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="standardCheckTrainingHours" label="Standard Check Training Hours"  >
        <a-textarea 
        rows="5"
            placeholder="Standard Check Training Hours"
            v-model="instructor.standardCheckTrainingHours"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="standardCheckPassedDate" label="Standard Check pass Date"  >
        <a-input
            placeholder="Standard Check Passed Date"
            v-model="instructor.standardCheckPassedDate"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="extraQualification" label="Extra Qualification"  >
        <a-textarea row="5"
            placeholder="Extra Qualification"
            v-model="instructor.extraQualification"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="languageSpooking" label="Languages spoken"  >
        <a-input
            placeholder="Languages spoken"
            v-model="instructor.languageSpooking"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="jobHours" label="Job Hours"  >
        <a-input
            placeholder="Job Hours"
            v-model="instructor.jobHours"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="gapsInBetweenLessons" label="Gaps In Between"  >
        <a-input
            placeholder="Gaps In Between Lessons"
            v-model="instructor.gapsInBetweenLessons"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="dualControls" label="Dual Controls"  >
        <a-input
            placeholder="Dual Controls"
            v-model="instructor.dualControls"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="carWrapping" label="Car Wrapping"  >
        <a-textarea rows='5'
            placeholder="Car Wrapping"
            v-model="instructor.carWrapping"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="Loans" label="Loans"  >
        <a-textarea rows="3"
            placeholder="Loans"
            v-model="instructor.loans"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="startPaymentDate" label="Start Payment Date"  >
        <a-input
            placeholder="Start Payment Date"
            v-model="instructor.startPaymentDate"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="End Payment Date" label="End Payment Date"  >
        <a-input
            placeholder="End Payment Date"
            v-model="instructor.endPaymentDate"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="privateNotice" label="Private Notice"  >
        <a-textarea
            rows="5"
            placeholder="Private Notice"
            v-model="instructor.privateNotice"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="hearAboutUs" label="hear About Us"  >
        <a-input
            placeholder="How did you hear about Alps driving school ?"
            v-model="instructor.hearAboutUs"
            @blur="
          () => {
            $refs.hearAboutUs.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="pointsOnLicense" label="Any points on license?"  >
        <a-input
            placeholder="Any points on license?"
            v-model="instructor.pointsOnLicense"
            @blur="
          () => {
            $refs.pointsOnLicense.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="heldUkLicense" label="How long you held the uk license?"  >
        <a-input
            placeholder="How long you held the uk license?"
            v-model="instructor.heldUkLicense"
            @blur="
          () => {
            $refs.heldUkLicense.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-upload style="padding-top:10px" :file-list="fileList" :remove="handleRemove" :multiple="false" :before-upload="beforeUpload" >
      <a-button> <a-icon type="upload" />Upload PDI image  </a-button>
    </a-upload>
      <div  class="gallary" >
      <div  style="padding:20px 0" v-if="instructor.PDIimage"> 
        <div class="title">
          <h6>PDI Image</h6>
          <p> {{instructor.PDIimage.length>0 ? "":"no image to show"}}</p>
          
        </div>
        <gallery  method="deleteInstructorImage" v-for="urlImg in instructor.PDIimage" :key="urlImg" :urlImg="urlImg" ></gallery>

      </div>
     
     </div>



      <a-divider >
        <a-button @click="goBack()"  type="default" html-type="button" >
          Discard
        </a-button>
        <a-button :loading="loading"  type="primary" html-type="submit" style="margin-left:15px">
            {{ loading ? 'Loading' : 'Submit' }}
          </a-button>

      </a-divider>
    </a-form-model>

  </div>
</template>
<script>
import gallery from "../../components/gallary.vue"
import Swal from "sweetalert2";
import {uploadToStorage} from "../../firebase/methods/sotrage"

export default {
  components:{
    gallery
  } ,
  data() {
    return {
      labelCol: { span: 14},
      wrapperCol: { span: 14 },
      fileList: [],
      fileListClone:[],
      instructor: {},
      loading:false,
      rules: {
        firstName: [
          { required: true, message: 'Please input first name', trigger: 'blur' },
        ],
        middleName: [
          { required: false, message: 'Please input middle name', trigger: 'blur' },
        ],
        lastName: [
          { required: true, message: 'Please input last name', trigger: 'blur' },
        ],
        phoneNumber: [
          { required: true, message: 'Please input telephone number', trigger: 'blur' },
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
      
      this.fileList = [...this.fileList,file]; 
      return false;
    },
    async onSubmit(e) {
      e.preventDefault();
          this.loading=true;
      if (this.fileList.length>0){
        await  uploadToStorage("instructor" , this.fileList[0]).then(url=>{
            this.instructor.PDIimage.push(url);
      
     })
      }
     await this.updateInstructor(); 
    


    },

    async updateInstructor(){
      this.instructor.id = this.$route.params.id;
          await this.$store.dispatch("updateInstructor",this.instructor);
          const error = this.$store.getters.getError;
          if (!error) {
            Swal.fire(
                'successfully updated!',
                'You updated  an instructor',
                'success'
            ).then(()=>{
              this.loading=false;
              window.location.reload();
              
              
            })
          }
          else {
            this.loading=false;
            this.fileList=[];
            this.curriculumList=[];
          
            Swal.fire(
                'SomeThing Wrong',
                error,
                'error'
            )

          }

    },

   
    goBack(){
      this.$router.push({name:"instructor-listing"})
    } ,
  },
  async created() {
    await this.$store.dispatch("getUniqueInstructor" ,this.$route.params.id) ;
    this.instructor = this.$store.getters.getInstructor;
  },



};
</script>
