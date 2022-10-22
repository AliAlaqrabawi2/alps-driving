import Vue from "vue";
import Vuex from "vuex";
import AuthModule from "@/store/modules/AuthModule";
import AdminModule from "@/store/modules/AdminModule";
import TraineeModule from "@/store/modules/TraineeModule";
import InstructorModule from "@/store/modules/InstructorModule";
import EmployeeModule from "@/store/modules/EmployeeModule";
import EnquiriesModule from "@/store/modules/EnquiriesModule";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AuthModule,
    AdminModule,
    TraineeModule,
    InstructorModule,
    EmployeeModule,
    EnquiriesModule,
  },
});
