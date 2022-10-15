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
      >
        <a-form-model-item ref="firstName" label="First name" prop="firstName">
          <a-input
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
              v-model="trainee.email"
              @blur="
          () => {
            $refs.email.onFieldBlur();
          }
        "
          />
        </a-form-model-item>

        <a-form-model-item ref="phoneNumber" label="Telephone"  >
          <a-input
              placeholder="Optional"
              v-model="trainee.phoneNumber"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
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
        <a-form-model-item ref="county" label="County"  >
          <a-input
              placeholder="Optional"
              v-model="trainee.county"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="city" label="City"  >
          <a-input
              placeholder="Optional"
              v-model="trainee.city"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="streetName" label="Street Name"  >
          <a-input
              placeholder="Optional"
              v-model="trainee.streetName"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="Postcode" label="Post code" prop="postCode"  >
          <a-input
              placeholder="Post Code"
              v-model="trainee.Postcode"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="drivingLicencesNo" label="Driving Licences No"  >
          <a-input
              placeholder="Optional"
              v-model="trainee.drivingLicencesNo"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="locationBased" label="Location Based"  >
          <a-input
              placeholder="Optional"
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
              placeholder="Optional"
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
              placeholder="Optional"
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
              placeholder="Optional"
              v-model="trainee.trainerPassRate"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>

        <a-form-model-item ref="pointsOnLicense" label="Points On License"  >
          <a-input
              placeholder="Optional"
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
              placeholder="Optional"
              v-model="trainee.contractStartDate"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="standardCheckTrainingHours" label="Training Hours"  >
          <a-input
              placeholder="Optional"
              v-model="trainee.standardCheckTrainingHours"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="standardCheckPassedDate" label="Check Passed Date"  >
          <a-input
              placeholder="Optional"
              v-model="trainee.standardCheckPassedDate"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="dbsCheckDate" label="Dbs Check Date"  >
          <a-input
              placeholder="Optional"
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
              placeholder="Optional"
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
              placeholder="Optional"
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
              placeholder="Optional"
              v-model="trainee.gapsInBetweenLessons"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="dateOfBirth" label="Date Of Birth"  >
          <a-input
              placeholder="Optional"
              v-model="trainee.dateOfBirth"
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
      labelCol: { span: 3},
      wrapperCol: { span: 10 },
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
