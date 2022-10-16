<template>
  <div>
    <div>
      <h3 class="font-semibold title-creating">Edit Enquirie</h3>

    </div>
    <a-form-model
        ref="ruleForm"
        :model="enquirie"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        @submit="onSubmit"
    >
      <a-form-model-item ref="firstName" label="First name" prop="firstName">
        <a-input
            placeholder="First Name"
            v-model="enquirie.firstName"
            @blur="
          () => {
            $refs.firstName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>
      <a-form-model-item ref="middleName" label="Middle name" prop="middleName">
        <a-input
            placeholder="Middle Name"

            v-model="enquirie.middleName"
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
            v-model="enquirie.lastName"
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
            v-model="enquirie.email"
            @blur="
          () => {
            $refs.email.onFieldBlur();
          }
        "
        />
      </a-form-model-item>

      <a-form-model-item ref="phoneNumber" label="Telephone" prop="telephone"  >
        <a-input
            placeholder="Telephone"
            v-model="enquirie.phoneNumber"
            @blur="
          () => {
            $refs.lastName.onFieldBlur();
          }
        "
        />
      </a-form-model-item>

      <a-form-item label="Rank" prop="rank">
        <a-select
            v-model="enquirie.rank"
            placeholder="Select Rank"

        >
          <a-select-option value='Instructor Enquiries'>
            Instructor Enquiries
          </a-select-option>
          <a-select-option value='Employee Enquiries'>
            Employee Enquiries
          </a-select-option>
          <a-select-option value='Trainer Enquiries'>
            Trainer Enquiries
          </a-select-option>
        </a-select>
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
      enquirie: {},
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
        telephone: [
          { required: true, message: 'Please input telephone', trigger: 'blur' },
        ],
        rank: [
          { required: true, message: 'Please select rank', trigger: 'blur' },
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
          this.enquirie.id = this.$route.params.id;
          await this.$store.dispatch("updateEnquirie",this.enquirie);
        } else {
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    goBack(){
      this.$router.push({name:"enquirie-listing"})
    } ,
  },
  async created() {
    await this.$store.dispatch("getUniqueEnquirie" ,this.$route.params.id) ;
    this.enquirie = this.$store.getters.getEnquirie;
  },



};
</script>
