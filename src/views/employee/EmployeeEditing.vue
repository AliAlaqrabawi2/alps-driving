<template>
  <div>
    <div>
      <div>
        <h3 class="font-semibold title-creating">Edit Employee</h3>

      </div>
      <a-form-model
          ref="ruleForm"
          :model="employee"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          @submit="onSubmit"
      >
        <a-form-model-item ref="firstName" label="First name" prop="firstName">
          <a-input
              v-model="employee.firstName"
              @blur="
          () => {
            $refs.firstName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="lastName" label="Last name" prop="lastName">
          <a-input
              v-model="employee.lastName"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="sirName" label="sir Name" prop="sirName">
          <a-input
              v-model="employee.sirName"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>

        <a-form-model-item ref="email" label="Email" prop="email">
          <a-input
              v-model="employee.email"
              @blur="
          () => {
            $refs.email.onFieldBlur();
          }
        "
          />
        </a-form-model-item>

        <a-form-model-item ref="phoneNumber" label="Phone Number"  >
          <a-input
              placeholder="Optional"
              v-model="employee.phoneNumber"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="address" label="address"  >
          <a-input
              placeholder="Optional"
              v-model="employee.address"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="country" label="country"  >
          <a-input
              placeholder="Optional"
              v-model="employee.country"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="city" label="city"  >
          <a-input
              placeholder="Optional"
              v-model="employee.city"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="streetName" label="street Name"  >
          <a-input
              placeholder="Optional"
              v-model="employee.streetName"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="Postcode" label="Post code"  >
          <a-input
              placeholder="Optional"
              v-model="employee.Postcode"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="drivingLicencesNo" label="driving Licences No"  >
          <a-input
              placeholder="Optional"
              v-model="employee.drivingLicencesNo"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="locationBased" label="location Based"  >
          <a-input
              placeholder="Optional"
              v-model="employee.locationBased"
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
              v-model="employee.areasCovered"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="trainerExperience" label="trainer Experience"  >
          <a-input
              placeholder="Optional"
              v-model="employee.trainerExperience"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="trainerPassRate" label="trainer PassRate"  >
          <a-input
              placeholder="Optional"
              v-model="employee.trainerPassRate"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="privateNotice" label="private Notice"  >
          <a-input
              placeholder="Optional"
              v-model="employee.privateNotice"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="pointsOnLicense" label="points On License"  >
          <a-input
              placeholder="Optional"
              v-model="employee.pointsOnLicense"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="contractStartDate" label="contract Start Date"  >
          <a-input
              placeholder="Optional"
              v-model="employee.contractStartDate"
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
              v-model="employee.standardCheckTrainingHours"
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
              v-model="employee.standardCheckPassedDate"
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
              v-model="employee.dbsCheckDate"
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
              v-model="employee.extraQualification"
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
              v-model="employee.languageSpooking"
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
              v-model="employee.gapsInBetweenLessons"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="dateOfBirth" label="date Of Birth"  >
          <a-input
              placeholder="Optional"
              v-model="employee.dateOfBirth"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>




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
      employee: {},
      rules: {
        firstName: [
          { required: true, message: 'Please input first name', trigger: 'blur' },
        ],
        lastName: [
          { required: true, message: 'Please input last name', trigger: 'blur' },
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
          this.employee.id = this.$route.params.id;
          await this.$store.dispatch("updateEmployee",this.employee);
        } else {
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    goBack(){
      this.$router.push({name:"employee-listing"})
    } ,
  },
  async created() {
    await this.$store.dispatch("getUniqueEmployee" ,this.$route.params.id) ;
    this.employee = this.$store.getters.getEmployee;
  },



};
</script>
