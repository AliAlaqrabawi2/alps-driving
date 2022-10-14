import {HTTP} from "@/core/service/ApiService";
import {checkAuth} from "@/core/service/ApiService";

export default {
    state: {
        trainees:[] ,
        trainee :{}
    },
    getters: {
        getTrainees (state) {
            return state.trainees;
        }
        ,
        getTrainee (state) {
            return state.trainee
        }

    },
    mutations: {

        setTrainees(state,payload){
            state.trainees =payload

        } ,
        setTrainee(state,payload){
            state.trainee =payload

        } ,


    },
    actions: {
        async getAllTrainee({commit }) {
            try {
                commit("setError", null);
                const res = await HTTP.get("/api/trainee/all" ,{
                });
                commit("setTrainees",res.data.data);
            } catch (err) {
                commit("setError", err.response.data.msg);
                checkAuth(err.response.status);
            }

        },
        async createNewTrainee ({commit} ,trainee){
            try {
                commit("setError", null);
                await HTTP.post('/api/trainee/create',{
                    trainee
                })
            }
            catch (err) {
                commit("setError", err.response.data.msg);
                checkAuth(err.response.status);
            }
        },
        async deleteTrainee({commit } ,id) {
            try {
                await HTTP.delete(`/api/trainee/${id}`);
                location.reload()

            } catch (err) {
                console.log(err.response)
                commit("setError", err.response.data.msg);
                checkAuth(err.response.status);
            }

        },
        async getUniqueTrainee({commit} , id) {
            try {
                const res =   await  HTTP.get(`/api/trainee/${id}`);
                commit("setTrainee",res.data);
            }
            catch (err){
                commit("setError", err.response.data.msg);
                checkAuth(err.response.status);

            }
        },

        updateTrainee: async function ({commit},  trainee) {
            const {id , ...data} =trainee
                await HTTP.put(`/api/trainee/${id}`,{trainee:data});
            window.location.href="/trainee-listing"


        }


    },

}
