<template>

  <a-card>
    <template #title>

      <div class="header" style="display: flex;justify-content: space-between;align-items: center">
        <h4 class="font-semibold title-creating">Trainer Table</h4>
        <input v-model="searchInput" @keyup="searchTrainee(searchInput)" type="text" placeholder="Search on Trainer" class="search-input" />

        <a-button type="link" ghost>
          <router-link to="/trainee-creating">
            Add New Trainer
          </router-link>
        </a-button>
      </div>
    </template>
    <h3 class="font-regular" v-if="loading">Loading...</h3>

    <a-table :columns="tableHeader" :data-source="tableData" :pagination="false" >
      <template slot="info" slot-scope="info">
        <div class="table-avatar-info" style="cursor: pointer"  >
          <router-link :to="`/trainee-overview/${info.id}`">
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


      <template slot="address" slot-scope="address">
        <div class="author-info">
          <h6 class="m-0">{{ address }}</h6>
        </div>
      </template>

      <template slot="email" slot-scope="email">
        <div class="author-info">
          <h6 class="m-0">{{ email }}</h6>
        </div>
      </template>
      <template slot="languageSpoken" slot-scope="languageSpoken">
        <div class="author-info">
          <h6 class="m-0">{{ languageSpoken }}</h6>
        </div>
      </template>



      <template slot="action" slot-scope="_id">
        <router-link :to="`trainee-editing/${_id}`" tag="span">
          <a-icon type="edit" theme="outlined" style="margin-right:10px; font-size:18px ;cursor:pointer;" />
        </router-link>
        <a-icon type="delete"  @click="deleteTrainee(_id)" theme="outlined" style="font-size:18px ;cursor:pointer;" />
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
    title: "ADDRESS",
    dataIndex: "address",
    scopedSlots: { customRender: "address" },
  },

  {
    title: "LANGUAGESPOKEN",
    dataIndex: "languageSpoken",
    scopedSlots: { customRender: "languageSpoken" },
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
    await this.$store.dispatch("getAllTrainee");
    this.tableData =this.$store.getters.getTrainers
    this.loading=false;
    this.tableData.map((data) =>{
       return data.info={
          id:data._id,
          gender: data.gender,
        }

          })
    console.log(this.tableData);
  }  ,
  methods:{

    searchTrainee( input) {
      const cloneList = this.$store.getters.getTrainers
      if (input === "") {
        return (this.tableData = cloneList);
      }
      this.tableData= this.tableData.filter((trainee) => {
        return trainee.firstName.toLowerCase().includes(input.toLowerCase())
      });
    },
    deleteTrainee (id){
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
          await  this.$store.dispatch("deleteTrainee",id);
          const error = this.$store.getters.getError;
          if (!error) {
            await this.$store.dispatch("getAllTrainee");
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