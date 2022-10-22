<template>
  <div>
    <div>
      <h3 class="font-semibold title-creating">Create New Employee</h3>

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
            v-decorator="['middleName', { rules: [{ required: true, message: 'Please input your middle name!' }] }]"
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
            placeholder="john@example.com"

            type="email"
            v-decorator="['email', { rules: [{ type:'email' , required: true, message: 'This is not valid email!' }] }]"
        />
      </a-form-item>


      <a-form-item label="Telephone" >
        <a-input
            placeholder="Telephone"
            v-decorator="['telephone', { rules: [{ required: true, message:'Please input your phone number' }] }]"
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
          <a-select-option value=false>
            Male
          </a-select-option>
          <a-select-option value=true>
            Female
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="Address" >
        <a-input
            placeholder='Address'
            v-decorator="['address', { rules: [{ required: true , message:'Please input Address'}] }]"
        />
      </a-form-item>
      <a-form-item label="Post code" >
        <a-input
            placeholder='Post code'
            v-decorator="['postCode', { rules: [{ required: true , message:'Please input Post code'}] }]"
        />
      </a-form-item>
      <a-form-item label="Date Of Birth" >
        <a-input
            placeholder='Date Of Birth'
            v-decorator="['dateOfBirth', { rules: [{ required: false }] }]"
        />
      </a-form-item>

      <a-form-item label="County" >
        <a-input
            placeholder='County'
            v-decorator="['county', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Street Name" >
        <a-input
            placeholder='Street Name'
            v-decorator="['streetName', { rules: [{ required: false }] }]"
        />
      </a-form-item>

      <a-form-item label="City" >
        <a-input
            placeholder='City'
            v-decorator="['city', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Location Based" >
        <a-input
            placeholder='Location Based'
            v-decorator="['locationBased', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Areas " >
        <a-input
            placeholder='Areas '
            v-decorator="['areas', { rules: [{ required: false }] }]"
        />
      </a-form-item>

      <a-form-item label="National Insurance " >
        <a-input
            placeholder='national Insurance Number'
            v-decorator="['nationalInsuranceNo', { rules: [{ required: false }] }]"
        />
      </a-form-item>
        <a-form-item label="Previous Experience " >
          <a-input
              placeholder='Previous Experience'
              v-decorator="['previousExperience', { rules: [{ required: false }] }]"
          />
        </a-form-item>
          <a-form-item label="Job Role " >
            <a-input
                placeholder='Job Role'
                v-decorator="['jobRole', { rules: [{ required: false }] }]"
            />
          </a-form-item>

      <a-form-item label="holiday Entitlement" >
        <a-input
            placeholder='holiday Entitlement'
            v-decorator="['holidayEntitlement', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="break Entitlement" >
        <a-input
            placeholder='break Entitlement'
            v-decorator="['breakEntitlement', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Sick Days" >
        <a-input
            placeholder='Sick Days'
            v-decorator="['sickDays', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Cover Days" >
        <a-input
            placeholder='Cover Days'
            v-decorator="['coverDays', { rules: [{ required: false }] }]"
        />
      </a-form-item>

      <a-form-item label="Shift Rota" >
        <a-input
            placeholder='Shift Rota'
            v-decorator="['shiftRota', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Referrals" >
        <a-input
            placeholder='Referrals'
            v-decorator="['referrals', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Curriculum Vitae" >
        <a-input
            placeholder='Curriculum Vitae'
            v-decorator="['curriculumVitae', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Extra Qualification" >
        <a-input
            placeholder='Extra Qualification'
            v-decorator="['extraQualification', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Language Spoken" >
        <a-input
            placeholder='Language Spoken'
            v-decorator="['languageSpoken', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Complaints" >
        <a-input
            placeholder='Complaints'
            v-decorator="['complaints', { rules: [{ required: false }] }]"
        />
      </a-form-item>


      <a-form-item label="Probation Period" >
        <a-input
            placeholder='Probation Period'
            v-decorator="['probationPeriod', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Contract Start Date" >
        <a-input
            placeholder='Contract Start Date'
            v-decorator="['contractStartDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Contract Expire Date" >
        <a-input
            placeholder='Contract Expire Date'
            v-decorator="['contractExpireDate', { rules: [{ required: false }] }]"
        />
      </a-form-item>
     <div style="padding:15px 0">
      <a-upload  :file-list="fileList" :remove="handleRemove" :multiple="true" :before-upload="beforeUpload" >
      <a-button> <a-icon type="upload" />Upload Contract copy </a-button>
    </a-upload>
     </div>
      <a-form-item label="Loan's" >
        <a-input
            placeholder="Loans"
            v-decorator="['oans', { rules: [{ required: false }] }]"
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
      <a-form-item label="Job Time" >
        <a-input
            placeholder='Job Time'
            v-decorator="['jobTime', { rules: [{ required: false }] }]"
        />
      </a-form-item>
      <a-form-item label="Private Notice" >
        <a-textarea
            rows="5" cols="50"
            placeholder='private Notice'
            v-decorator="['privateNotice', { rules: [{ required: false }] }]"
        />
      </a-form-item>
     
    <a-upload style="padding-top:10px" :circulum-list="curriculumList" :remove="handleRemoveCirculum" :multiple="true" :before-upload="beforeUploadCirculum" >
      <a-button> <a-icon type="upload" />Upload curriculum Value  </a-button>
    </a-upload>
   


      <a-divider >
        <a-button @click="goBack()"  type="default" html-type="button" >
          Discard
        </a-button>
        <a-button :loading="loading" type="primary" html-type="submit" style="margin-left:15px">
          {{ loading ? 'Loading' : 'Submit' }}it
        </a-button>

      </a-divider>
    </a-form>
  </div>
</template>
<script>
import Swal from "sweetalert2";
import {uploadMultiToStorage} from "../../firebase/methods/sotrage"

export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }),
      fileList: [],
      curriculumList:[],
      loading:false,    };
  },
  methods: {
    goBack(){
      this.$router.push("employee-listing")
    } ,
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    handleRemoveCirculum(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.curriculumList.slice();
      newFileList.splice(index, 1);
      this.curriculumList = newFileList;
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList,file]; 
      console.log(this.fileList)
      return false;
    },
   
    beforeUploadCirculum(file) {
      this.curriculumList = [...this.curriculumList,file]; 
      console.log(this.curriculumList);
      return false;
    },

    handleSubmit(e) {
      e.preventDefault();
     

      this.form.validateFields(async(err, values) => {
        if (!err) {
          this.loading=true;
      this.uploading = true;
    
      if (this.fileList.length>0){
        await  uploadMultiToStorage("employee" , this.fileList).then(urls=>{
          values.contractCopyImg = urls;
      
     })
      }
      if (this.curriculumList.length>0){
       await uploadMultiToStorage("employee" , this.curriculumList).then(urls=>{
          values.curriculumValueImg = urls;
      
     })
      } 
     
     await this.createEmployee(values); 
    
    }


      });
    },

    async createEmployee(values){
     await this.$store.dispatch('createNewEmployee' ,values  );
          const error = this.$store.getters.getError;
          if (!error) {
            Swal.fire(
                'successfully created!',
                'You create  a new Employee',
                'success'
            ).then(()=>{
              this.loading=false;
              this.$router.push("employee-listing");
            })
          }
          else {
            this.loading=false;
          
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