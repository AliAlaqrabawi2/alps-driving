<template>
    <div>
      <div>
        <div>
          <h3 class="font-semibold title-creating">Trainer Overview</h3>
  
        </div>
        <a-form-model
            ref="ruleForm"
            :model="trainee"
            :rules="rules"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            @submit="onSubmit"
            class="ant-form ant-form-vertical"
        >
          <a-form-model-item ref="firstName" label="First name" prop="firstName">
            <a-input disabled
                placeholder="First Name"
                v-model="trainee.firstName"
                @blur="
            () => {
              $refs.firstName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="middleName" label="Middle Name" prop="middleName">
            <a-input disabled
                placeholder="Middle Name"
                v-model="trainee.middleName"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="lastName" label="Last name" prop="lastName">
            <a-input disabled
                placeholder="Last Name"
                v-model="trainee.lastName"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="email" label="Email" prop="email">
            <a-input disabled
                placeholder="Email"
                v-model="trainee.email"
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
                     v-model="trainee.phoneNumber"
                     @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>




          <a-form-model-item ref="address" label="Address / Street name" prop="address" >
            <a-input disabled
                placeholder="Address / Street name"
                v-model="trainee.address"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="county" label="County"  >
            <a-input disabled
                     placeholder="County"
                     v-model="trainee.county"
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
                     v-model="trainee.city"
                     @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="postCode" label="Post code" prop="postCode"  >
            <a-input disabled
                     placeholder="Post Code"
                     v-model="trainee.postCode"
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
                     v-model="trainee.locationBased"
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
                     v-model="trainee.areasCovered"
                     @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="drivingLicencesNo" label="Driving Licence Number"  >
            <a-input disabled
                     placeholder="Driving Licence Number"
                     v-model="trainee.drivingLicencesNo"
                     @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="ADILicenceStartingDate" label="ADI Licence Starting Date "  >
            <a-input disabled
                     placeholder="ADI Licence Starting Date"
                     v-model="trainee.ADILicenceStartingDate"
                     @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>


          <a-form-model-item ref="dateOfBirth" label="Date Of Birth"  >
            <a-input disabled
                placeholder="Date Of Birth"
                v-model="trainee.dateOfBirth"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
  
  

          <a-form-item label="Gender">
            <a-select disabled
                v-model="trainee.gender"
                placeholder="Gender"
                type="Gender"
                v-decorator="[
            'gender',
            { rules: [{ required: true, message: 'Please select gender!' }] },
          ]"
  
            >

              <a-select-option :value="0">
                Male
              </a-select-option>
              <a-select-option :value="1">
                Female
              </a-select-option>
              <a-select-option :value="2">
                Unknown
              </a-select-option>
            </a-select>
          </a-form-item>

          <a-form-model-item ref="trainerExperience" label="Trainer Experience"  >
            <a-input disabled
                placeholder="Trainer Experience"
                v-model="trainee.trainerExperience"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="trainerPassRate" label="Trainer Pass Rate"  >
            <a-input disabled
                placeholder="Trainer Pass Rate"
                v-model="trainee.trainerPassRate"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
  
          <a-form-model-item ref="pointsOnLicence" label="Any Points On licence?"  >
            <a-input disabled
                placeholder="Any Points on licence?"
                v-model="trainee.pointsOnLicence"
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
                v-model="trainee.contractStartDate"
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
                v-model="trainee.contractExpiryDate"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="complaints" label="Complaints"  >
            <a-textarea rows="4" disabled
                placeholder="Complaints"
                v-model="trainee.complaints"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="probation Period" label="Probation Period"  >
            <a-textarea disabled rows="5"
                placeholder="Probation Period"
                v-model="trainee.probationPeriod"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="referrals" label="Referrals"  >
            <a-input disabled
                placeholder="Referrals"
                v-model="trainee.referrals"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>

          <a-form-model-item ref="ADINO" label="ADI No "  >
            <a-input disabled
                placeholder="ADI Number"
                v-model="trainee.ADINO"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
            <a-form-model-item ref="orditPassDate" label="Ordit Pass Date"  >
              <a-input disabled
                  placeholder="Ordit Pass Date"
                  v-model="trainee.orditPassDate"
                  @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
              />
            </a-form-model-item>
            <a-form-model-item ref="orditTrainingHours" label="Ordit Training Hours "  >
              <a-input disabled
                  placeholder="Ordit Training Hours"
                  v-model="trainee.orditTrainingHours"
                  @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
              />
            </a-form-model-item>
            <a-form-model-item ref="orditLicenceStartingDate" label="Ordit Licence Starting Date "  >
              <a-input disabled
                  placeholder="Ordit Licence Starting Date "
                  v-model="trainee.orditLicenceStartingDate"
                  @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
              />
            </a-form-model-item>
            <a-form-model-item ref="orditLicenceExpiryDate" label="Ordit Licence Expiry Date"  >
              <a-input disabled
                  placeholder="Ordit Licence Expiry Date "
                  v-model="trainee.orditLicenceExpiryDate"
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
                  v-model="trainee.jobHours"
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
                  v-model="trainee.dualControls"
                  @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
              />
            </a-form-model-item>
            <a-form-model-item ref="carWrapping" label="Car Wrapping"  >
              <a-textarea disabled rows="5"
                  placeholder="Car Wrapping"
                  v-model="trainee.carWrapping"
                  @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
              />
            </a-form-model-item>
            <a-form-model-item ref="loans" label="Loans"  >
              <a-textarea rows="3" disabled
                  placeholder="Loans"
                  v-model="trainee.loans"
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
                  v-model="trainee.startPaymentDate"
                  @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
              />
            </a-form-model-item>
          <a-form-model-item ref="endPaymentDate" label="End Payment Date"  >
            <a-input disabled
                placeholder="End PaymentDate"
                v-model="trainee.endPaymentDate"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="standardCheckTrainingHours" label="Standard Check Train Training Hours"  >
            <a-textarea disabled 
            rows="5"
                placeholder="Standard Check Training Hours"
                v-model="trainee.standardCheckTrainingHours"
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
                v-model="trainee.standardCheckPassDate"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="dbsCheckDate" label="DBS Check Date"  >
            <a-input disabled
                placeholder="dBS Check Date"
                v-model="trainee.dbsCheckDate"
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
                v-model="trainee.extraQualification"
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
                v-model="trainee.languageSpoken"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="gapsInBetweenLessons" label="Gaps In"  >
            <a-input disabled
                placeholder="Gaps In Between Lessons"
                v-model="trainee.gapsInBetweenLessons"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
  
  
          <a-form-item label="Private Notes" >
            <a-textarea disabled
                v-model="trainee.privateNotes"
                rows="5" cols="50"
                placeholder='Private Notes'
                v-decorator="['privateNotes', { rules: [{ required: false }] }]"
            />
          </a-form-item>
          <a-form-item label="App Progress" >
            <a-textarea disabled
                v-model="trainee.appProgress"
                rows="7" cols="50"
                placeholder='App Progress '
                v-decorator="['appProgress', { rules: [{ required: false }] }]"
            />
          </a-form-item>
        
          <div  class="gallary" >
        <div  style="padding:20px 0" v-if="trainee.ADIimage"> 
          <div class="title">
            <h6>ADI Image</h6>
            <p> {{trainee.ADIimage.length>0 ? "":"no image to show"}}</p>
            
          </div>
          <gallery route="overview"  method="deleteTraineeImage" v-for="urlImg in trainee.ADIimage" :key="urlImg" :urlImg="urlImg" ></gallery>
  
        </div>
        <hr/>
      
       </div>
      
  
  
  
          <a-divider >
            <a-button @click="goBack()"  type="default" html-type="button" >
              Back
            </a-button>
           
  
          </a-divider>
        </a-form-model>
      </div>
  
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
        trainee: {},
        fileList: [],
        fileListClone:[],
        loading:false,
        rules: {
          firstName: [
            { required: true, message: 'Please input first name', trigger: 'blur' },
          ],
          lastName: [
            { required: true, message: 'Please input last name', trigger: 'blur' },
          ],
          middleName: [
            { required: false, message: 'Please input middle name', trigger: 'blur' },
          ],
          postCode: [
            { required: true, message: 'Please input post Code', trigger: 'blur' },
          ],
          address: [
            { required: true, message: 'Please input address', trigger: 'blur' },
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
          await  uploadToStorage("trainee" , this.fileList[0]).then(url=>{
              this.trainee.ADIimage.push(url);
        
       })
        }
       await this.updateTrainee(); 
      
  
  
      },
  
  
      async updateTrainee(){
        this.trainee.id = this.$route.params.id;
            await this.$store.dispatch("updateTrainee",this.trainee);
            const error = this.$store.getters.getError;
            if (!error) {
              Swal.fire(
                  'successfully updated!',
                  'You updated  a Trainee',
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
        this.$router.push({name:"trainee-listing"})
      } ,
    },
    async created() {
      await this.$store.dispatch("getUniqueTrainee" ,this.$route.params.id) ;
      this.trainee = this.$store.getters.getTrainee;
    },
  
  
  
  };
  </script>
  
  
  
  <style scoped>
  .header-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom:20px;
  }
  .header-title img {
    border:1px solid #ccc;
    border-radius: 10px;
    width:100%;
    max-width: 400px;
    object-fit: cover;
    max-height: 200px;
    height: 100%;
  }
  .gallary{
    display: flex;
    flex-direction: column;
  }
  </style>