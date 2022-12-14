import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import App from "./App.vue";
import DefaultLayout from "./layouts/Default.vue";
import DashboardLayout from "./layouts/Dashboard.vue";
import router from "./router";
import store from "./store";
import "@/firebase/index";
import "./scss/app.scss";

Vue.use(Antd);

Vue.config.productionTip = false;

// Adding template layouts to the vue components.
Vue.component("layout-default", DefaultLayout);
Vue.component("layout-dashboard", DashboardLayout);

new Vue({
  router,
  store,
  created() {},
  render: (h) => h(App),
}).$mount("#app");
