<template>

  <a-card>
    <template >

      <div class="header" style="display: flex;justify-content: space-between;align-items: center">
        <h4 class="font-semibold title-creating">Department Table</h4>
        <input v-model="searchInput" @keyup="searchDepartment(searchInput)" type="text" placeholder="Search on department" class="search-input" />

        <a-button type="link" ghost>
          <router-link to="/trigger-department-creating">
            Add New Trigger Department
          </router-link>
        </a-button>
      </div>
    </template>
    <h3 class="font-regular" v-if="loading">Loading...</h3>

    <a-table :columns="tableHeader" :data-source="tableData" :pagination="false" >

    
     

      <template slot="description" slot-scope="description">
        <div class="author-info">
          <p class="m-0">{{ description }}</p>
        </div>
      </template>
      <template slot="titleDepartment" slot-scope="title">
        <div class="author-info">
          <h6 class="m-0">{{ title }}</h6>
        </div>
      </template>
    



      <template slot="action" slot-scope="_id">
        <router-link :to="`trigger-department-editing/${_id}`" tag="span">
          <a-icon type="edit" theme="outlined" style="margin-right:10px; font-size:18px ;cursor:pointer;" />
        </router-link>
        <a-icon type="delete"  @click="deleteDepartment(_id)" theme="outlined" style="font-size:18px ;cursor:pointer;" />
      </template>



    </a-table>

  </a-card>
</template>



<script>

const tableHeader = [

  {
    title: "TITLE",
    dataIndex: "title",
    scopedSlots: { customRender: "titleDepartment" },
  },
  {
    title: "DESCRIPTION",
    dataIndex: "description",
    scopedSlots: { customRender: "description" },
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
      department:{},
      searchInput :'',
    };

  },

  async created() {
    this.loading=true;
    await this.$store.dispatch("getAllDepartment");
    this.tableData =this.$store.getters.getDepartments
    this.loading=false;

  }  ,
  methods:{

    searchDepartment( input) {
      const cloneList = this.$store.getters.getDepartments
      if (input === "") {
        return (this.tableData = cloneList);
      }
      this.tableData= this.tableData.filter((department) => {
        return department.title.toLowerCase().includes(input.toLowerCase())
      });
    },
    
    deleteDepartment (id){
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
          // if (this.user._id===id){
          //   this.$store.dispatch("logout");
          // }
          // else
        await  this.$store.dispatch("deleteDepartment",id);
          const error = this.$store.getters.getError;
          if (!error) {
            await this.$store.dispatch("getAllDepartment");
            Swal.fire(
                'Deleted!',
                'Department has been deleted.',
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

<style >

.userImg{
  border:1px solid #ccc
}
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