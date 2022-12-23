<template>

    <a-card>
      <template #title>

        <div class="header" style="display: flex;justify-content: space-between;align-items: center">
          <h4 class="font-semibold title-creating">Admin Table</h4>
          <input v-model="searchInput" @keyup="searchAdmin(searchInput)" type="text" placeholder="Search on Admin" class="search-input" />
          <a-button type="link" ghost>
            <router-link to="/admin-creating">
              Add New Admin
            </router-link>
          </a-button>
        </div>
      </template>
      <h3 class="font-regular" v-if="loading">Loading...</h3>

      <a-table :columns="tableHeader" :data-source="tableData" :pagination="true"  >


    <template slot="info" slot-scope="info">
        <router-link :to="`/admin-overview/${info.id}`">
          <div class="table-avatar-info" style="cursor: pointer"  >
            <a-avatar  :src="info.img" v-if="info.img" class="userImg" />
            <a-avatar shape="square" src="images/profilepic.png" v-else />
          </div>
        </router-link>

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
        <template slot="isSupervisor" slot-scope="isSupervisor">
          <a-tag
              class="tag-status"
              :class="isSupervisor ? 'ant-tag-primary' : 'ant-tag-muted'"
          >
            {{ isSupervisor ? "SuperVisor" : "Admin" }}
          </a-tag>
        </template>


        <template slot="action" slot-scope="_id">
        <router-link :to="`admin-editing/${_id}`" tag="span">
          <a-icon type="edit" theme="outlined" style="margin-right:10px; font-size:18px ;cursor:pointer;" />
        </router-link>
          <a-icon type="delete"  @click="deleteAdmin(_id)" theme="outlined" style="font-size:18px ;cursor:pointer;" />
        </template>



  </a-table>

    </a-card>
</template>
<script>

const tableHeader = [
  {
    title: "",
    dataIndex: "info",
    scopedSlots: { customRender: "info" },
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
    title: "STATUS",
    dataIndex: "isSupervisor",
    scopedSlots: { customRender: "isSupervisor" },
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
      user:{},
      searchInput :'',
    };

  },

  async created() {
    this.loading=true;
    await this.$store.dispatch("getAllAdmin");
    this.tableData =this.$store.getters.getAdmins
    this.loading=false;
    this.user = this.$store.getters.currentUser;
    this.tableData.map((data) =>{
      return data.info={
        id:data._id,
        gender: data.gender,
        img:data.imgUrl
      }
    })

  }  ,
  methods:{

    overviewPage(){
      console.log(this.$refs.overViewBtn)
    } ,

    searchAdmin( input) {
      const cloneList = this.$store.getters.getAdmins
      if (input === "") {
        return (this.tableData = cloneList);
      }
      this.tableData= cloneList.filter((admin) => {
        return (admin.firstName.toLowerCase().includes(input.toLowerCase()))});



    },
    
    deleteAdmin (id){
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
        await  this.$store.dispatch("deleteAdmin",id);
          const error = this.$store.getters.getError;
          if (!error) {
            await this.$store.dispatch("getAllAdmin");
            Swal.fire(
                'Deleted!',
                'Admin has been deleted.',
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