<template>
  <div>
    <!-- Dashboard Layout -->
    <a-layout
        class="layout-dashboard"
        id="layout-dashboard"
        :class="[
        navbarFixed ? 'navbar-fixed' : '',
        !sidebarCollapsed ? 'has-sidebar' : '',
        layoutClass,
      ]"
    >
      <!-- Main Sidebar -->
      <DashboardSidebar
          :sidebarCollapsed="sidebarCollapsed"
          :sidebarColor="sidebarColor"
          :sidebarTheme="sidebarTheme"
          @toggleSidebar="toggleSidebar"
      ></DashboardSidebar>
      <!-- / Main Sidebar -->

      <!-- Layout Content -->
      <a-layout>
        <!-- Layout Header's Conditionally Fixed Wrapper -->
        <DashboardHeader
            :sidebarCollapsed="sidebarCollapsed"
            :navbarFixed="navbarFixed"
            @toggleSettingsDrawer="toggleSettingsDrawer"
            @toggleSidebar="toggleSidebar"
        ></DashboardHeader>
        <!-- / Layout Header's Conditionally Fixed Wrapper -->

        <!-- Page Content -->
        <a-layout-content>
          <router-view/>
        </a-layout-content>
        <!-- / Page Content -->

        <!-- Sidebar Overlay -->
        <div
            class="sidebar-overlay"
            @click="sidebarCollapsed = true"
            v-show="!sidebarCollapsed"
        ></div>
        <!-- / Sidebar Overlay -->
      </a-layout>
      <!-- / Layout Content -->




    </a-layout>
    <!-- / Dashboard Layout -->
  </div>
</template>

<script>
import DashboardSidebar from "../components/Sidebars/DashboardSidebar.vue";
import DashboardHeader from "../components/Headers/DashboardHeader.vue";
import DashboardFooter from "../components/Footers/DashboardFooter.vue";

export default {
  components: {
    DashboardSidebar,
    DashboardHeader,
    DashboardFooter,
  },
  data() {
    return {
      // Sidebar collapsed status.
      sidebarCollapsed: false,

      // Main sidebar color.
      sidebarColor: "primary",

      // Main sidebar theme : light, white, dark.
      sidebarTheme: "light",

      // Header fixed status.
      navbarFixed: false,

      // Settings drawer visiblility status.
      showSettingsDrawer: false,
    };
  },
  methods: {
    toggleSidebar(value) {
      this.sidebarCollapsed = value;
    },
    toggleSettingsDrawer(value) {
      console.log(value);
      this.showSettingsDrawer = value;
    },
    toggleNavbarPosition(value) {
      this.navbarFixed = value;
    },
    updateSidebarTheme(value) {
      this.sidebarTheme = value;
    },
    updateSidebarColor(value) {
      this.sidebarColor = value;
    },
  },
  computed: {
    // Sets layout's element's class based on route's meta data.
    layoutClass() {
      return this.$route.meta.layoutClass;
    },
  },
};
</script>
