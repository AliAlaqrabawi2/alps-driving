import Vue from 'vue';
import Vuex from 'vuex';
import AuthModule from "@/store/modules/AuthModule";
import AdminModule from "@/store/modules/AdminModule";

Vue.use(Vuex)



export default new Vuex.Store({
    modules:{
        AuthModule ,
        AdminModule
    }


})