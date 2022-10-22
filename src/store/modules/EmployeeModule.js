import { HTTP } from "@/core/service/ApiService";
import { checkAuth } from "@/core/service/ApiService";

export default {
  state: {
    employees: [],
    employee: {},
  },
  getters: {
    getEmployees(state) {
      return state.employees;
    },
    getEmployee(state) {
      return state.employee;
    },
  },
  mutations: {
    setEmployees(state, payload) {
      state.employees = payload;
    },
    setEmployee(state, payload) {
      state.employee = payload;
    },
  },
  actions: {
    async getAllEmployee({ commit }) {
      try {
        commit("setError", null);
        const res = await HTTP.get("/api/employee/all", {});
        commit("setEmployees", res.data.data);
      } catch (err) {
        commit("setError", err.response.data.msg);
        checkAuth(err.response.status);
      }
    },
    async createNewEmployee({ commit }, employee) {
      try {
        commit("setError", null);
        await HTTP.post("/api/employee/create", {
          employee,
        });
      } catch (err) {
        commit("setError", err.response.data.msg);
        checkAuth(err.response.status);
      }
    },
    async deleteEmployee({ commit }, id) {
      try {
        await HTTP.delete(`/api/employee/${id}`);
        location.reload();
      } catch (err) {
        console.log(err.response);
        commit("setError", err.response.data.msg);
        checkAuth(err.response.status);
      }
    },
    async getUniqueEmployee({ commit }, id) {
      try {
        const res = await HTTP.get(`/api/employee/${id}`);
        commit("setEmployee", res.data);
      } catch (err) {
        commit("setError", err.response.data.msg);
        checkAuth(err.response.status);
      }
    },

    updateEmployee: async function ({ commit }, employee) {
      const { id, ...data } = employee;
      await HTTP.put(`/api/employee/${id}`, { employee: data });
    },
    deleteEmployeeImage: async function ({ commit }, { id, urlImage }) {
      try {
        await HTTP.put(`/api/employee/image/${id}`, { urlImage });
        window.location.reload();
      } catch (err) {
        commit("setError", err.response.data.msg);
        checkAuth(err.response.status);
      }
    },
  },
};
