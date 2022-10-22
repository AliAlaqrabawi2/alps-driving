<template>
  <div>
    <div>
      <div>
        <h3 class="font-semibold title-creating">Edit Trainee</h3>

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
          <a-input
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
          <a-input
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
          <a-input
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
          <a-input
              placeholder="Email"
              v-model="trainee.email"
              @blur="
          () => {
            $refs.email.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="address" label="Address" prop="address" >
          <a-input
              placeholder="Address"
              v-model="trainee.address"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="postCode" label="Post code" prop="postCode"  >
          <a-input
              placeholder="Post Code"
              v-model="trainee.postCode"
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
              v-model="trainee.dateOfBirth"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>




        <a-form-model-item ref="phoneNumber" label="Telephone"  >
          <a-input
              placeholder="Telephone"
              v-model="trainee.phoneNumber"
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
              v-model="trainee.county"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-item label="Gender">
          <a-select
              v-model="trainee.gender"
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

        <a-form-model-item ref="streetName" label="Street Name"  >
          <a-input
              placeholder="Street Name"
              v-model="trainee.streetName"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>

        <a-form-model-item ref="drivingLicencesNo" label="Driving Licences No"  >
          <a-input
              placeholder="Driving Licences Number"
              v-model="trainee.drivingLicencesNo"
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
              v-model="trainee.city"
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
              v-model="trainee.locationBased"
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
              v-model="trainee.areasCovered"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="trainerExperience" label="Trainer Experience"  >
          <a-input
              placeholder="Trainer Experience"
              v-model="trainee.trainerExperience"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="trainerPassRate" label="Trainer PassRate"  >
          <a-input
              placeholder="Trainer PassRate"
              v-model="trainee.trainerPassRate"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>

        <a-form-model-item ref="pointsOnLicense" label="Any Points On ..."  >
          <a-input
              placeholder="Any Points on License?"
              v-model="trainee.pointsOnLicense"
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
              v-model="trainee.contractStartDate"
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
              v-model="trainee.contractExpireDate"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="complaints" label="Complaints"  >
          <a-input
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
          <a-input
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
          <a-input
              placeholder="Referrals"
              v-model="trainee.referrals"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
          <a-form-model-item ref="ADILicensesStartingDate" label="ADI Licenses ... "  >
            <a-input
                placeholder="ADI Licenses Starting Date"
                v-model="trainee.ADILicensesStartingDate"
                @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
            />
        </a-form-model-item>
        <a-form-model-item ref="ADINO" label="ADI No "  >
          <a-input
              placeholder="ADI Number"
              v-model="trainee.ADINO"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
          <a-form-model-item ref="orbitPassedDate" label="Orbit Passed ..."  >
            <a-input
                placeholder="Orbit Passed Date"
                v-model="trainee.orbitPassedDate"
                @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
            />
          </a-form-model-item>
          <a-form-model-item ref="orbitTrainingHours" label="Orbit Training ... "  >
            <a-input
                placeholder="Orbit Training Hours"
                v-model="trainee.orbitTrainingHours"
                @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
            />
          </a-form-model-item>
          <a-form-model-item ref="orbitLicensesStartingDate" label="Orbit Licenses .... "  >
            <a-input
                placeholder="Orbit Licenses Starting Date "
                v-model="trainee.orbitLicensesStartingDate"
                @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
            />
          </a-form-model-item>
          <a-form-model-item ref="orbitLicensesExpireDate" label="Orbit Licenses ..."  >
            <a-input
                placeholder="Orbit Licenses Expire Date "
                v-model="trainee.orbitLicensesExpireDate"
                @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
            />
          </a-form-model-item>
          <a-form-model-item ref="jobTime" label="Job Time"  >
            <a-input
                placeholder="Full time Or Part Time"
                v-model="trainee.jobTime"
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
                v-model="trainee.dualControls"
                @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
            />
          </a-form-model-item>
          <a-form-model-item ref="carWrapping" label="Car Wrapping"  >
            <a-input
                placeholder="Car Wrapping"
                v-model="trainee.carWrapping"
                @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
            />
          </a-form-model-item>
          <a-form-model-item ref="loans" label="Loan's"  >
            <a-input
                placeholder="Loan's"
                v-model="trainee.loans"
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
                v-model="trainee.startPaymentDate"
                @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
            />
          </a-form-model-item>
        <a-form-model-item ref="endPaymentDate" label="End Payment Date"  >
          <a-input
              placeholder="End PaymentDate"
              v-model="trainee.endPaymentDate"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="standardCheckTrainingHours" label="Standard Check Train ..."  >
          <a-input
              placeholder="Standard Check Training Hours"
              v-model="trainee.standardCheckTrainingHours"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="standardCheckPassedDate" label="Standard Check Pass ..."  >
          <a-input
              placeholder="Standard Check Passed Date"
              v-model="trainee.standardCheckPassedDate"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="dbsCheckDate" label="DBS Check Date"  >
          <a-input
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
          <a-input
              placeholder="Extra Qualification"
              v-model="trainee.extraQualification"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="languageSpooking" label="Language Spooking"  >
          <a-input
              placeholder="Language Spooking"
              v-model="trainee.languageSpooking"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="gapsInBetweenLessons" label="Gaps In"  >
          <a-input
              placeholder="Gaps In Between Lessons"
              v-model="trainee.gapsInBetweenLessons"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>


        <a-form-item label="Private Notice" >
          <a-textarea
              v-model="trainee.privateNotice"
              rows="5" cols="50"
              placeholder='Private Notice'
              v-decorator="['privateNotice', { rules: [{ required: false }] }]"
          />
        </a-form-item>
        <a-form-item label="App Progress" >
          <a-textarea
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
        <gallery  v-for="urlImg in trainee.ADIimage" :key="urlImg" :urlImg="urlImg" ></gallery>

      </div>
      <hr/>
    
     </div>



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
      labelCol: { span: 14},
      wrapperCol: { span: 14 },
      trainee: {},
      permission:null,
      rules: {
        firstName: [
          { required: true, message: 'Please input first name', trigger: 'blur' },
        ],
        lastName: [
          { required: true, message: 'Please input last name', trigger: 'blur' },
        ],
        middleName: [
          { required: true, message: 'Please input middle name', trigger: 'blur' },
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
    onSubmit(e) {
      e.preventDefault();
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          this.trainee.id = this.$route.params.id;
          await this.$store.dispatch("updateTrainee",this.trainee);
        } else {
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
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
