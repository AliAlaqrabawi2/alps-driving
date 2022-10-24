import { HTTP } from "@/core/service/ApiService";
import { checkAuth } from "@/core/service/ApiService";

export default {
  state: {
    instructors: [],
    instructor: {},
  },
  getters: {
    getInstructors(state) {
      return state.instructors;
    },
    getInstructor(state) {
      return state.instructor;
    },
  },
  mutations: {
    setInstructors(state, payload) {
      state.instructors = payload;
    },
    setInstructor(state, payload) {
      state.instructor = payload;
    },
  },
  actions: {
    async getAllInstructor({ commit }) {
      try {
        commit("setError", null);
        const res = await HTTP.get("/api/instructor/all", {});
        commit("setInstructors", res.data.data);
      } catch (err) {
        commit("setError", err.response.data.msg);
        checkAuth(err.response.status);
      }
    },
    async createNewInstructor({ commit }, instructor) {
      try {
        commit("setError", null);
        await HTTP.post("/api/instructor/create", {
          instructor,
        });
      } catch (err) {
        commit("setError", err.response.data.msg);
        checkAuth(err.response.status);
      }
    },
    async deleteInstructor({ commit }, id) {
      try {
        await HTTP.delete(`/api/instructor/${id}`);
        location.reload();
      } catch (err) {
        console.log(err.response);
        commit("setError", err.response.data.msg);
        checkAuth(err.response.status);
      }
    },
    async getUniqueInstructor({ commit }, id) {
      try {
        const res = await HTTP.get(`/api/instructor/${id}`);
        console.log(res.data);
        commit("setInstructor", res.data);
      } catch (err) {
        commit("setError", err.response.data.msg);
        checkAuth(err.response.status);
      }
    },

    updateInstructor: async function ({ commit }, instructor) {
      const { id, ...data } = instructor;
      await HTTP.put(`/api/instructor/${id}`, { instructor: data });
      window.location.href = "/instructor-listing";
    },
    deleteInstructorImage: async function ({ commit }, { id, urlImage }) {
      try {
        await HTTP.put(`/api/instructor/image/${id}`, { urlImage });
        window.location.reload();
      } catch (err) {
        commit("setError", err.response.data.msg);
        checkAuth(err.response.status);
      }
    },
  },
};
