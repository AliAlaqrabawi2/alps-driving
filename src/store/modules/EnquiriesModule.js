import {HTTP} from "@/core/service/ApiService";
import {checkAuth} from "@/core/service/ApiService";

export default {
    state: {
        enquiries:[],
        enquirie :{}
    },
    getters: {
        getEnquiries (state) {
            return state.enquiries;
        }
        ,
        getEnquirie (state) {
            return state.enquirie
        }

    },
    mutations: {

        setEnquiries(state,payload){
            state.enquiries =payload

        } ,
        setEnquirie(state,payload){
            state.enquirie=payload

        } ,


    },
    actions: {
        async getAllEnquirie({commit }) {
            try {
                commit("setError", null);
                const res = await HTTP.get("/api/enquirie/all" ,{
                });

                commit("setEnquiries",res.data.data);
            } catch (err) {
                commit("setError", err.response.data.msg);
                checkAuth(err.response.status);
            }

        },
        async createNewEnquirie ({commit} ,enquirie){
            try {
                commit("setError", null);
                await HTTP.post('/api/enquirie/create',{
                    enquirie
                })
            }
            catch (err) {
                commit("setError", err.response.data.msg);
                checkAuth(err.response.status);
            }
        },

        async deleteEnquirie({commit } ,id) {
            try {
                commit("setError", null);
                await HTTP.delete(`/api/enquirie/${id}`);
                location.reload()

            } catch (err) {
                console.log(err.response)
                commit("setError", err.response.data.msg);
                checkAuth(err.response.status);
            }

        },
        async getUniqueEnquirie({commit} , id) {
            try {
                const res =   await  HTTP.get(`/api/enquirie/${id}`);
                commit("setEnquirie",res.data);
            }
            catch (err){
                commit("setError", err.response.data.msg);
                checkAuth(err.response.status);

            }
        },

        updateEnquirie: async function ({commit},  enquirie) {
            const {id , ...data} =enquirie
            await HTTP.put(`/api/enquirie/${id}`,{enquirie:data});
            window.location.href="/enquiries-listing"



        }


    },

}
