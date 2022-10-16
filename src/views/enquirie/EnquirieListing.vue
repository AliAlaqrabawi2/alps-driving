<template>

  <a-card>
    <template #title>

      <div class="header" style="display: flex;justify-content: space-between;align-items: center">
        <h4 class="font-semibold title-creating">Enquiries Table</h4>
        <a-button type="link" ghost>
          <router-link to="/enquiries-creating">
            Add New Enquires
          </router-link>
        </a-button>
      </div>
    </template>
    <h3 class="font-regular" v-if="loading">Loading...</h3>

    <a-table :columns="tableHeader" :data-source="tableData" :pagination="false" >

      <template slot="firstName" slot-scope="firstName">
        <div class="author-info">
          <a-avatar  src="public/images/profilepic.png" />
          <h6 class="m-0">{{ firstName }} </h6>

        </div>
      </template>
      <template slot="firstName" slot-scope="firstName">
        <div class="table-avatar-info">
          <a-avatar shape="square" src="images/profilepic.png" />
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
      <template slot="rank" slot-scope="rank">
        <a-tag v-if="rank==='Instructor Enquiries'"
            class="tag-status bg-success text-white"
        >
          {{rank}}
        </a-tag>
        <a-tag v-else-if="rank==='Employee Enquiries'"
               class="tag-status bg-warning"
        >
          {{rank}}
        </a-tag>
        <a-tag v-else
               class="tag-status bg-secondary text-white"
        >
          {{rank}}
        </a-tag>

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
    title: "RANK",
    dataIndex: "rank",
    scopedSlots: { customRender: "rank" },
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
    };

  },

  async created() {
    this.loading=true;
    await this.$store.dispatch("getAllEnquirie");
    this.tableData =this.$store.getters.getEnquiries
    this.loading=false;

  }  ,
  methods:{
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
