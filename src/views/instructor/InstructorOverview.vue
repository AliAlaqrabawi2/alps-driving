<template>
    <div>
      <div>
        <h3 class="font-semibold title-creating"> Instructor Overview</h3>
  
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
          <a-input disabled
              v-model="instructor.firstName"
              @blur="
            () => {
              $refs.firstName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="middleName" label="Middle Name" prop="middleName">
          <a-input disabled
              v-model="instructor.middleName"
              @blur="
            () => {
              $refs.firstName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="lastName" label="Last name" prop="lastName">
          <a-input disabled
              v-model="instructor.lastName"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="email" label="Email" prop="email">
          <a-input disabled
              v-model="instructor.email"
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
              v-model="instructor.phoneNumber"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-item label="Gender">
          <a-select disabled
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
        <a-form-model-item ref="drivingLicencesNo" label="Driving Licence Number"  >
          <a-input disabled
                   placeholder="driving Licence Number"
                   v-model="instructor.drivingLicencesNo"
                   @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>

        <a-form-model-item ref="address" label="Address / Street name"  >
          <a-input disabled
              placeholder="Address / Street name"
              v-model="instructor.address"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="county" label="County"  >
          <a-input disabled
                   placeholder="Street Name"
                   v-model="instructor.county"
                   @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="city" label="City"  >
          <a-input disabled
              placeholder="City"
              v-model="instructor.city"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="postCode" label="postCode"  >
          <a-input disabled
                   placeholder="Post Code"
                   v-model="instructor.postCode"
                   @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="locationBased" label="Location Based"  >
          <a-input disabled
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
          <a-input disabled
                   placeholder="Areas Covered"
                   v-model="instructor.areasCovered"
                   @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>



        <a-form-model-item ref="dateOfBirth" label="Date Of Birth"  >
          <a-input disabled=""
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
          <a-input disabled
              placeholder="ADI Number"
              v-model="instructor.ADINo"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="ADILicencesStartingDate" label="ADI Licence Start Date"  >
          <a-input disabled
              placeholder="ADI Licence Starting Date"
              v-model="instructor.ADILicencesStartingDate"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="ADILicencesExpiryDate" label="ADI Licence Expiry Date"  >
          <a-input disabled
              placeholder="ADI Licence Expiry Date"
              v-model="instructor.ADILicencesExpiryDate"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>

        <a-form-model-item ref="contractStartDate" label="Contract Start Date"  >
          <a-input disabled
              placeholder="Contract Start Date"
              v-model="instructor.contractStartDate"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="contractExpiryDate" label="Contract Expiry Date"  >
          <a-input disabled
              placeholder="Contract Expiry Date"
              v-model="instructor.contractExpiryDate"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="trainerLicencesStartingDate" label="Trainer Licence Start Date"  >
          <a-input disabled
              placeholder="Trainer Licence Starting Date"
              v-model="instructor.trainerLicencesStartingDate"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="trainerLicenceExpiryDate" label="Trainer Licence Expiry Date"  >
          <a-input disabled
              placeholder="Trainer Licence Expiry Date"
              v-model="instructor.trainerLicenceExpiryDate"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="trainerExperience" label="Trainer Experience "  >
          <a-input disabled
              placeholder="Trainer Experience"
              v-model="instructor.trainerExperience"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="trainerPassRate" label="Trainer Pass Rate "  >
          <a-input disabled
              placeholder="Trainer Pass Rate"
              v-model="instructor.trainerPassRate"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="complaints" label="Complaints "  >
          <a-textarea rows="4" disabled
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
          <a-textarea disabled rows="5"
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
          <a-input disabled
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
          <a-input disabled
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
          <a-input disabled
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
          <a-input disabled
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
          <a-input disabled
              placeholder="Part 3 Pass date"
              v-model="instructor.p3PassDate"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="p2TrainingHours" label="Part 2 Training Hours  "  >
          <a-input disabled
              placeholder="Part 2 Training Hours"
              v-model="instructor.p2TrainingHours"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="p3TrainingHours" label="Part 3 Training Hours  "  >
          <a-input disabled
              placeholder="Part 3 Training Hours"
              v-model="instructor.p3TrainingHours"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="standardCheckTrainingHours" label="Standard Check Training Hours"  >
          <a-textarea disabled 
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
        <a-form-model-item ref="standardCheckPassDate" label="Standard Check Pass Date"  >
          <a-input disabled
              placeholder="Standard Check Pass Date"
              v-model="instructor.standardCheckPassDate"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="extraQualification" label="Extra Qualification"  >
          <a-textarea disabled row="5"
              placeholder="Extra Qualification"
              v-model="instructor.extraQualification"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="languageSpoken" label="Languages spoken"  >
          <a-input disabled
              placeholder="Languages spoken"
              v-model="instructor.languageSpoken"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="jobHours" label="Job Hours"  >
          <a-input disabled
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
          <a-input disabled
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
          <a-input disabled
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
          <a-textarea disabled rows='5'
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
          <a-textarea rows="3" disabled
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
          <a-input disabled
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
          <a-input disabled
              placeholder="End Payment Date"
              v-model="instructor.endPaymentDate"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="privateNotes" label="Private Notes"  >
          <a-textarea
disabled               rows="5"
              placeholder="Private Notes"
              v-model="instructor.privateNotes"
              @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="hearAboutUs" label="Where did you hear about us ?"  >
          <a-input disabled
              placeholder="Where did you hear about Alps driving school ?"
              v-model="instructor.hearAboutUs"
              @blur="
            () => {
              $refs.hearAboutUs.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="pointsOnLicence" label="Any points on licence?"  >
          <a-input disabled
              placeholder="Any points on licence?"
              v-model="instructor.pointsOnLicence"
              @blur="
            () => {
              $refs.pointsOnLicence.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
        <a-form-model-item ref="heldUkLicence" label="How long  held the UK licence?"  >
          <a-input disabled
              placeholder="How long  held the UK licence?"
              v-model="instructor.heldUkLicence"
              @blur="
            () => {
              $refs.heldUkLicence.onFieldBlur();
            }
          "
          />
        </a-form-model-item>
      
        <div  class="gallary" >
        <div  style="padding:20px 0" v-if="instructor.PDIimage"> 
          <div class="title">
            <h6>PDI Image</h6>
            <p> {{instructor.PDIimage.length>0 ? "":"no image to show"}}</p>
            
          </div>
          <gallery route="overview"  method="deleteInstructorImage" v-for="urlImg in instructor.PDIimage" :key="urlImg" :urlImg="urlImg" ></gallery>
  
        </div>
       
       </div>
  
  
  
        <a-divider >
          <a-button @click="goBack()"  type="default" html-type="button" >
            Back
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
  