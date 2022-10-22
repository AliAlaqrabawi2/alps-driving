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
      <a-form-model-item ref="phoneNumber" label="Telephone"  >
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
      <a-form-model-item ref="address" label="Address"  >
        <a-input
            placeholder="Address"
            v-model="instructor.address"
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
      <a-form-model-item ref="streetName" label="Street Name"  >
        <a-input
            placeholder="Street Name"
            v-model="instructor.streetName"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="county" label="County"  >
        <a-input
            placeholder="Street Name"
            v-model="instructor.county"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="drivingLicencesNo" label="Driving Licences"  >
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
      <a-form-model-item ref="ADILicencesStartingDate" label="ADI Licences Start..."  >
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
      <a-form-model-item ref="ADILicencesExpiryDate" label="ADI Licences Expiry..."  >
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
      <a-form-model-item ref="contractStartDate" label="Contract Start..."  >
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
      <a-form-model-item ref="contractExpireDate" label="Contract Expire..."  >
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
      <a-form-model-item ref="traineeLicencesStartingDate" label="Trainee Licences Start ..."  >
        <a-input
            placeholder="Trainee Licences Starting Date"
            v-model="instructor.traineeLicencesStartingDate"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="traineeLicencesExpireDate" label="Trainee Licences Expire ..."  >
        <a-input
            placeholder="Trainee Licences Expire Date"
            v-model="instructor.traineeLicencesExpireDate"
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
        <a-input
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
        <a-input
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
      <a-form-model-item ref="standardCheckTrainingHours" label="Standard Check Train ..."  >
        <a-input
            placeholder="Standard Check Training Hours"
            v-model="instructor.standardCheckTrainingHours"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="standardCheckPassedDate" label="Standard Check pass ..."  >
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
        <a-input
            placeholder="Extra Qualification"
            v-model="instructor.extraQualification"
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
            v-model="instructor.languageSpooking"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="jobTime" label="Job Time"  >
        <a-input
            placeholder="Full Time Or Part Time"
            v-model="instructor.jobTime"
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
        <a-input
            placeholder="Car Wrapping"
            v-model="instructor.carWrapping"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="Loan's" label="Loan's"  >
        <a-input
            placeholder="Loan's"
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
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="pointsOnLicense" label="Any points on ...?"  >
        <a-input
            placeholder="Any points on license?"
            v-model="instructor.pointsOnLicense"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="heldUkLicense" label="How long you ..."  >
        <a-input
            placeholder="How long you held the uk license?"
            v-model="instructor.heldUkLicense"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <div  class="gallary" >
      <div  style="padding:20px 0" v-if="instructor.PDIimage"> 
        <div class="title">
          <h6>PGI Image</h6>
          <p> {{instructor.PDIimage.length>0 ? "":"no image to show"}}</p>
          
        </div>
        <gallery  v-for="urlImg in instructor.PDIimage" :key="urlImg" :urlImg="urlImg" ></gallery>

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
      instructor: {},
      rules: {
        firstName: [
          { required: true, message: 'Please input first name', trigger: 'blur' },
        ],
        middleName: [
          { required: true, message: 'Please input middle name', trigger: 'blur' },
        ],
        lastName: [
          { required: true, message: 'Please input last name', trigger: 'blur' },
        ],
        phoneNumber: [
          { required: true, message: 'Please input telephone', trigger: 'blur' },
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
          this.instructor.id = this.$route.params.id;

          await this.$store.dispatch("updateInstructor",this.instructor);
        } else {
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
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
