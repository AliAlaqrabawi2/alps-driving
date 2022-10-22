<template>
  <div>
    <div>
      <div class="header-title ">
  <h3 class="font-semibold title-creating">Edit Employee</h3>

</div>
      <a-form-model
          ref="ruleForm"
          :model="employee"
          :rules="rules"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
          @submit="onSubmit"
          class="ant-form ant-form-vertical"
      >
        <a-form-model-item ref="firstName" label="First name" prop="firstName">
          <a-input
              placeholder="First Name"
              v-model="employee.firstName"
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

              v-model="employee.middleName"
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

              v-model="employee.lastName"
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

              v-model="employee.email"
              @blur="
          () => {
            $refs.email.onFieldBlur();
          }
        "
          />
        </a-form-model-item>

        <a-form-model-item ref="telephone" label="Telephone" prop="telephone"  >
          <a-input
              placeholder="Telephone"
              v-model="employee.telephone"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="address" label="Address"  prop="address" >
          <a-input
              placeholder="Address"
              v-model="employee.address"
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
              v-model="employee.county"
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
              v-model="employee.city"
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
              v-model="employee.streetName"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="postCode" label="Post code" prop="postCode" >
          <a-input
              placeholder="Post Code"
              v-model="employee.postCode"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="nationalInsuranceNo" label="National Insurance "  >
          <a-input
              placeholder="National Insurance No"
              v-model="employee.nationalInsuranceNo"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="previousExperience" label="Previous Experience"  >
          <a-input
              placeholder="Previous Experience"
              v-model="employee.previousExperience"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>

        </a-form-model-item>
        <a-form-model-item ref="locationBased" label="Location Based"  >
          <a-input
              placeholder="Locaiton Based"
              v-model="employee.locationBased"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="areas" label="Areas "  >
          <a-input
              placeholder="Areas"
              v-model="employee.areas"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="jobRole" label="Job Role"  >
          <a-input
              placeholder="Job Role"
              v-model="employee.previousExperience"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="holidayEntitlement" label="Holiday Entitlement"  >
          <a-input
              placeholder="Holiday Entitlement"
              v-model="employee.holidayEntitlement"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="breakEntitlement" label="Break Entitlement"  >
          <a-input
              placeholder="break Entitlement"
              v-model="employee.breakEntitlement"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="sickDays" label="Sick Days"  >
          <a-input
              placeholder="Sick Days"
              v-model="employee.sickDays"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="coverDays" label="Cover Days"  >
          <a-input
              placeholder="Cover Days"
              v-model="employee.coverDays"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="shiftRota" label="Shift Rota"  >
          <a-input
              placeholder="Shift Rota"
              v-model="employee.shiftRota"
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
              v-model="employee.referrals"
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
              v-model="employee.contractStartDate"
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
              v-model="employee.contractExpireDate"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="loan's" label="Loans"  >
          <a-input
              placeholder="Loan's"
              v-model="employee.loans"
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
              placeholder="Language Spooking"
              v-model="employee.languageSpoken"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="Complaints" label="Complaintsc"  >
          <a-input
              placeholder="Complaints"
              v-model="employee.complaints"
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
              v-model="employee.startPaymentDate"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="endPaymentDate" label="End Payment Date"  >
          <a-input
              placeholder="end Payment Date"
              v-model="employee.endPaymentDate"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="jobTime" label="Job Time"  >
          <a-input
              placeholder="Full time Or Part time "
              v-model="employee.jobTime"
              @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
          />
        </a-form-model-item>
        <a-form-model-item ref="privateNotice" label="Private Notice"  >
          <a-textarea
              rows="5" cols="50"
              placeholder="Input you notice..."
              v-model="employee.privateNotice"
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
          <a-button :loading="loading"  type="primary" html-type="submit" style="margin-left:15px">
            {{ loading ? 'Loading' : 'Submit' }}
          </a-button>

        </a-divider>
      </a-form-model>
      
     <div v-if="employee.contractCopyImg" class="gallary">
      <div  style="padding:20px 0"> 
        <div class="title">
          <h6>Contract Copy Image</h6>
        </div>
        <gallery v-for="urlImg in employee.contractCopyImg" :key="urlImg" :urlImg="urlImg"></gallery>

      </div>
      <hr/>
      <div  style="padding:20px 0"> 
        <div class="title">
          <h6>curriculum Value Image</h6>
        </div>
        <gallery v-for="urlImg in employee.contractCopyImg" :key="urlImg" :urlImg="urlImg"></gallery>

      </div>
     </div>

    </div>

  </div>
</template>
<script>
import gallery from "../../components/gallary.vue"
export default {
  components:{
    gallery
  } ,
  data() {
    return {
      loading:false,
      labelCol: { span: 14},
      wrapperCol: { span: 14 },
      employee: {},
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
          { required: true, message: 'Please input postCode', trigger: 'blur' },
        ],
        telephone: [
          { required: true, message: 'Please input telephone', trigger: 'blur' },
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