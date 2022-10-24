import { HTTP } from "@/core/service/ApiService";
import { checkAuth } from "@/core/service/ApiService";

export default {
  state: {
    departments: [],
    department: {},
  },
  getters: {
    getDepartments(state) {
      return state.departments;
    },
    getDepartment(state) {
      return state.department;
    },
  },
  mutations: {
    setDepartments(state, payload) {
      state.departments = payload;
    },
    setDepartment(state, payload) {
      state.department = payload;
    },
  },
  actions: {
    async getAllDepartment({ commit }) {
      try {
        commit("setError", null);
        const res = await HTTP.get("/api/trigger-department/all", {});

        commit("setDepartments", res.data.data);
      } catch (err) {
        commit("setError", err.response.data.msg);
        checkAuth(err.response.status);
      }
    },
    async createNewDepartment({ commit }, department) {
      try {
        commit("setError", null);
        await HTTP.post("/api/trigger-department/create", {
          description: department.description,
          title: department.title,
        });
      } catch (err) {
        commit("setError", err.response.data.msg);
        checkAuth(err.response.status);
      }
    },

    async deleteDepartment({ commit }, id) {
      try {
        commit("setError", null);
        await HTTP.delete(`/api/trigger-department/${id}`);
        location.reload();
      } catch (err) {
        console.log(err.response);
        commit("setError", err.response.data.msg);
        checkAuth(err.response.status);
      }
    },
    async getUniqueDepartment({ commit }, id) {
      try {
        const res = await HTTP.get(`/api/trigger-department/${id}`);
        commit("setDepartment", res.data);
      } catch (err) {
        commit("setError", err.response.data.msg);
        checkAuth(err.response.status);
      }
    },

    updateDepartment: async function ({ commit }, department) {
      await HTTP.put(`/api/trigger-department/${department.id}`, {
        department,
      });
    },
  },
};
