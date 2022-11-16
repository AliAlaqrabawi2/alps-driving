<template>
    <div>
      <div>
        <div class="header-title ">
    <h3 class="font-semibold title-creating"> Employee Overview</h3>
  
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
            <a-input disabled
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
            <a-input disabled
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
            <a-input disabled
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
            <a-input disabled
                placeholder="Email"
  
                v-model="employee.email"
                @blur="
            () => {
              $refs.email.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
  
          <a-form-model-item ref="telephone" label="Telephone Number " prop="telephone"  >
            <a-input disabled
                placeholder="Telephone Number "
                v-model="employee.telephone"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="address" label="Address /street name"  prop="address" >
            <a-input disabled
                placeholder="Address /street name"
                v-model="employee.address"
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
                v-model="employee.county"
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
                v-model="employee.city"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="postCode" label="Post code" prop="postCode" >
            <a-input disabled
                     placeholder="Post Code"
                     v-model="employee.postCode"
                     @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
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


          <a-form-model-item ref="nationalInsuranceNo" label="National Insurance "  >
            <a-input disabled
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
            <a-input disabled
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
            <a-input disabled
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
            <a-input disabled
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
            <a-input disabled
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
            <a-input disabled
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
            <a-input disabled
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
            <a-input disabled
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
            <a-input disabled
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
            <a-input disabled
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
            <a-input disabled
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
            <a-input disabled
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
            <a-input disabled
                placeholder="Contract Expire Date"
                v-model="employee.contractExpireDate"
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
                v-model="employee.loans"
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
                v-model="employee.extraQualification"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="languageSpooking" label="Languages spoken"  >
            <a-input disabled
                placeholder="Languages spoken"
                v-model="employee.languageSpoken"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="Complaints" label="Complaintsc"  >
            <a-textarea rows="4" disabled
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
            <a-input disabled
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
            <a-input disabled
                placeholder="end Payment Date"
                v-model="employee.endPaymentDate"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
          <a-form-model-item ref="jobHours" label="job Hours"  >
            <a-input disabled
                placeholder="Job Hours"
                v-model="employee.jobHours"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
            
          </a-form-model-item>
          <a-form-model-item ref="privateNotes" label="Private Notes"  >
            <a-textarea disabled
                rows="5" cols="50"
                placeholder="Input you notes..."
                v-model="employee.privateNotes"
                @blur="
            () => {
              $refs.lastName.onFieldBlur();
            }
          "
            />
          </a-form-model-item>
       
  
          <div  class="gallary" >
        <div  style="padding:20px 0" v-if="employee.contractCopyImg"> 
          <div class="title">
            <h6>Contract Copy Image</h6>
            <p> {{employee.contractCopyImg.length>0 ? "":"no image to show"}}</p>
            
          </div>
          <gallery method="deleteEmployeeImage"  v-for="urlImg in employee.contractCopyImg" :key="urlImg[250]" :urlImg="urlImg" ></gallery>
  
        </div>
        <hr/>
        <div  style="padding:20px 0" v-if="employee.curriculumValueImg"> 
          <div class="title">
            <h6 >curriculum Value Image</h6>
            <p> {{employee.curriculumValueImg.length>0 ? "":"No image to show"}}</p>
  
          </div>
          <gallery method="deleteEmployeeImage" route="overview" v-for="urlImg in employee.curriculumValueImg" :key="urlImg[250]" :urlImg="urlImg"></gallery>
  
  
  
        </div>
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
        fileList: [],
        fileListClone:[],
        curriculumList:[],
        curriculumListClone:[],
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
            { required: false, message: 'Please input middle name', trigger: 'blur' },
          ],
          postCode: [
            { required: true, message: 'Please input postCode', trigger: 'blur' },
          ],
          telephone: [
            { required: true, message: 'Please input telephone number ', trigger: 'blur' },
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
      handleRemoveCirculum(file) {
        const index = this.fileList.indexOf(file);
        const newFileList = this.curriculumList.slice();
        newFileList.splice(index, 1);
        this.curriculumList = newFileList;
      },
      beforeUpload(file) {
        
        this.fileList = [...this.fileList,file]; 
        return false;
      },
      beforeUploadCirculum(file) {
        this.curriculumList = [...this.curriculumList,file]; 
        return false;
      },
      
     async onSubmit(e) {
        e.preventDefault();
            this.loading=true;
        if (this.fileList.length>0){
          await  uploadToStorage("employee/contract" , this.fileList[0]).then(url=>{
              this.employee.contractCopyImg.push(url);
        
       })
        }
        if (this.curriculumList.length>0){
         await uploadToStorage("employee/curriculum" , this.curriculumList[0]).then(url=>{      
            this.employee.curriculumValueImg.push(url);
        
       })
        }     
     
       
        
       await this.updateEmployee(); 
      
  
  
      },
  
   
     async updateEmployee(){
        this.employee.id = this.$route.params.id;
            await this.$store.dispatch("updateEmployee",this.employee);
            const error = this.$store.getters.getError;
            if (!error) {
              Swal.fire(
                  'successfully updated!',
                  'You updated  an employee',
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