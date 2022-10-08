import {HTTP} from "@/core/service/ApiService";
import {checkAuth} from "@/core/service/ApiService";

export default {
    state: {
       admins:[] ,
        admin :{}
    },
    getters: {
        getAdmins (state) {
            return state.admins;
        }
        ,
            getAdmin (state) {
         return state.admin
        }

    },
    mutations: {

        setAdmins(state,payload){
            state.admins =payload

        } ,
        setAdmin(state,payload){
            state.admin =payload

        } ,


    },
    actions: {
        async getAllAdmin({commit }) {
            try {
                const res = await HTTP.get("/api/admin/all" ,{
                });
                commit("setAdmins",res.data);
            } catch (err) {
                commit("setError", err.response.data.msg);
                checkAuth(err.response.status);
            }

        },
        async createNewAdmin ({commit} ,admin){
            try {
                await HTTP.post('/api/auth/register',{
                    firstName:admin.firstName ,
                    lastName:admin.lastName ,
                    email :admin.email ,
                    pass:admin.pass ,
                    phoneNumber :admin.phoneNumber ,
                    isSupervisor :admin.isSupervisor
                })
            }
            catch (err) {
                commit("setError", err.response.data.msg);
                checkAuth(err.response.status);
            }
        },
        async deleteAdmin({commit } ,id) {
            try {
               await HTTP.delete(`/api/admin/${id}` ,{
                });
               location.reload()

            } catch (err) {
                console.log(err.response)
                commit("setError", err.response.data.msg);
                checkAuth(err.response.status);
            }

        },
        async getUniqueAdmin({commit} , id) {
            try {
              const res =   await  HTTP.get(`/api/admin/${id}`);
                commit("setAdmin",res.data);
            }
            catch (err){
                commit("setError", err.response.data.msg);
                checkAuth(err.response.status);

            }
        }


    },

}
