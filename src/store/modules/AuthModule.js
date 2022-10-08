import {HTTP} from "@/core/service/ApiService";
export default {
    state: {
        user:JSON.parse(localStorage.getItem("user")) || null ,
        err:null
    },
    getters: {
       currentUser(state){
           return state.user;
       } ,
        getError (state){
           return state.err;
        }
    },
    mutations: {

        setUser(state ,user) {
            state.user= user;
        } ,
        destroyUser(state){
            localStorage.removeItem(("user"))

        },
        setError(state, payload) {
            state.err = payload;
        },
    },
    actions: {

        async login({ commit }, {email,password}) {
            try {
                const res = await HTTP.post("/api/auth/login", {
                    email: email,
                    password:password,
                },
                    {
                        withCredentials:true
                    });
                commit("setUser", res.data.user);
                commit("setError",null);
                localStorage.setItem("user", JSON.stringify(res.data.user));
            } catch (err) {
                localStorage.removeItem(("user"))
                console.log(err.response.data.msg);
                commit("setError", err.response.data.msg);
            }
        },
        async logout({ commit }, {email,password}) {
            try {
                const res = await HTTP.post("/api/auth/logout");
                localStorage.removeItem(("user"))
                commit("setUser", null);
                commit("setError",null);
                commit("destroyUser")
                location.href="/sign-in";
            } catch (err) {
                commit("setError", err.response.data.msg);
            }
        },
        verifyAuth({commit}){
            if (localStorage.getItem("user")===null) {}
        }

    },

}
