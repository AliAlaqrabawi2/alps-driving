<template>

  <a-card>
    <template #title>

      <div class="header" style="display: flex;justify-content: space-between;align-items: center">
        <h4 class="font-semibold title-creating">Employee Table</h4>
        <input v-model="searchInput" @keyup="searchEmployee(searchInput)" type="text" placeholder="Search on Employee" class="search-input" />

        <a-button type="link" ghost>
          <router-link to="/employee-creating">
            Add New Employee
          </router-link>
        </a-button>
      </div>
    </template>
    <h3 class="font-regular" v-if="loading">Loading...</h3>

    <a-table :columns="tableHeader" :data-source="tableData" :pagination="false" >

      <template slot="imgUrl" slot-scope="imgUrl">
        <div class="table-avatar-info" style="cursor: pointer"  @click="$refs.overViewBtn.click()">
          <a-avatar shape="square" src="images/profilepic.png" />
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


      <template slot="email" slot-scope="email">
        <div class="author-info">
          <h6 class="m-0">{{ email }}</h6>
        </div>
      </template>



      <template slot="action" slot-scope="_id">
        <router-link :to="`employee-editing/${_id}`" tag="span">
          <a-icon type="edit" theme="outlined" style="margin-right:10px; font-size:18px ;cursor:pointer;" />
        </router-link>
        <a :href="`employee-overview/${_id}`" ref="overViewBtn" v-show="false">
          <a-icon type='search' theme="outlined" style="margin-right:10px; font-size:18px ;cursor:pointer;" />
        </a>
        
        <a-icon type="delete"  @click="deleteEmployee(_id)" theme="outlined" style="font-size:18px ;cursor:pointer;" />
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
    title: "EMAIL",
    dataIndex: "email",
    scopedSlots: { customRender: "email" },
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
      searchInput :'',

    };

  },

  async created() {
    this.loading=true;
    await this.$store.dispatch("getAllEmployee");
    this.tableData =this.$store.getters.getEmployees
    this.loading=false;

  }  ,
  methods:{
    test(){
        console.log('test');
    } ,

    searchEmployee( input) {
      const cloneList = this.$store.getters.getEmployees
      if (input === "") {
        return (this.tableData = cloneList);
      }
      this.tableData= cloneList.filter((employee) => {
        return employee.firstName.toLowerCase().includes(input.toLowerCase())
      });
    },
    deleteEmployee (id){
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
          await  this.$store.dispatch("deleteEmployee",id);
          const error = this.$store.getters.getError;
          if (!error) {
            await this.$store.dispatch("getAllEmployee");
            Swal.fire(
                'Deleted!',
                'Employee has been deleted.',
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