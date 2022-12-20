<template>

  <a-card>
    <template #title>

      <div class="header" style="display: flex;justify-content: space-between;align-items: center">
        <h4 class="font-semibold title-creating">Enquiries Table</h4>
        <input v-model="searchInput" @keyup="searchEnquiries(searchInput)" type="text" placeholder="Search on Enquirie" class="search-input" />
        
        <a-button type="link" ghost>
          <router-link to="/enquiries-creating">
            Add New Enquires
          </router-link>
        </a-button>
      </div>
    </template>
    <h3 class="font-regular" v-if="loading">Loading...</h3>

    <a-table :columns="tableHeader" :data-source="tableData" :pagination="false" >


      <template slot="action" slot-scope="_id">
        <div class="table-avatar-info" style="cursor: pointer"  @click="getRefs">
          <router-link  :to="`/enquiries-overview/${_id}`" >
            <a-avatar shape="square" src="images/profilepic.png" />

          </router-link>
        </div>

      </template>
      <template slot="firstName" slot-scope="firstName">
        <div class="table-avatar-info">
          <div class="avatar-info">
            <h6>{{ firstName}}</h6>

          </div>
        </div>
      </template>
      <template slot="lastName" slot-scope="lastName">
        <div class="author-info">
          <h6 class="m-0">{{ lastName }}</h6>
        </div>
      </template>


      <template slot="phoneNumber" slot-scope="phoneNumber">
        <div class="author-info">
          <h6 class="m-0">{{ phoneNumber }}</h6>
        </div>
      </template>
      <template slot="jobRole" slot-scope="jobRole">
        <a-tag v-if="jobRole==='Instructor Enquiries'"
            class="tag-status bg-success text-white"
        >
          {{jobRole}}
        </a-tag>
        <a-tag v-else-if="jobRole==='Employee Enquiries'"
               class="tag-status bg-warning"
        >
          {{jobRole}}
        </a-tag>
        <a-tag v-else
               class="tag-status bg-secondary text-white"
        >
          {{jobRole}}
        </a-tag>

      </template>
      <template slot="stage" slot-scope="stage">
        <div class="author-info">
          <h6 class="m-0">{{stage }}</h6>
        </div>
      </template>

      <template slot="action" slot-scope="_id">
        <router-link :to="`enquiries-editing/${_id}`" tag="span">
          <a-icon type="edit" theme="outlined" style="margin-right:10px; font-size:18px ;cursor:pointer;" />
        </router-link>
        <a-icon type="delete"  @click="deleteEnquirie(_id)" theme="outlined" style="font-size:18px ;cursor:pointer;" />

      </template>



    </a-table>

  </a-card>
</template>
<script>

const tableHeader = [

  {
    title: "",
    dataIndex: "imgUrl",
    scopedSlots: { customRender: "imgUrl" },
  },
  {
    title: "FIRSTNAME",
    dataIndex: "firstName",
    scopedSlots: { customRender: "firstName" },
  },
  {
    title: "LASTNAME",
    dataIndex: "lastName",
    scopedSlots: { customRender: "lastName" },
  },
  {
    title: "PHONENUMBER",
    dataIndex: "phoneNumber",
    scopedSlots: { customRender: "phoneNumber" },
  },
  {
    title: "JOBROLE",
    dataIndex: "jobRole",
    scopedSlots: { customRender: "jobRole" },
  },
  {
    title: "STAGE",
    dataIndex: "stage",
    scopedSlots: { customRender: "stage" },
  },
  {
    title: "ACTION",
    dataIndex: "_id",
    scopedSlots: { customRender: "action" },
  },
];
import Swal from "sweetalert2";
export default {
  data() {
    return {
      tableData:[],tableHeader ,
      loading:false,
      searchInput:''
    };

  },

  async created() {
    this.loading=true;
    await this.$store.dispatch("getAllEnquirie");
    this.tableData =this.$store.getters.getEnquiries
    this.loading=false;

  }  ,
  methods:{
    go(id){
      console.log(id);
    } ,
    getRefs(){
      console.log(this.$refs.overViewBtn);
      this.$refs.overViewBtn.click();
    } ,
    searchEnquiries( input) {
      const cloneList = this.$store.getters.getEnquiries
      if (input === "") {
        return (this.tableData = cloneList);
      }
      this.tableData= this.tableData.filter((enquirie) => {
        return enquirie.firstName.toLowerCase().includes(input.toLowerCase())
      });
    },
    deleteEnquirie (id){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        buttons: 'Yes, delete it!'
      }).then(async(result) => {
        if (result.isConfirmed) {
          console.log("run");
          await  this.$store.dispatch("deleteEnquirie",id);
          const error = this.$store.getters.getError;
          if (!error) {
            await this.$store.dispatch("getAllEnquirie");
            Swal.fire(
                'Deleted!',
                'Enquirie has been deleted.',
                'success'
            )
          }

          else {
            Swal.fire(
                'SomeThing Wrong',
                error,
                'error'
            )          }
        }
      })

    }
  }
};
</script>


<style scoped>
.search-input{
  border:none;
  outline:none;
  width:70%;
  border:1px solid #ccc;
  border-radius: 10px;
  padding:10px;
}
.title-creating{
  margin-top:10px;
}
.header {
  align-items: center;
}

</style>