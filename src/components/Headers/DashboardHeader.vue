<template>
  <!-- Main Sidebar -->
  <component :is="navbarFixed ? 'a-affix' : 'div'" :offset-top="top">
    <!-- Layout Header -->
    <a-layout-header>
      <a-row type="flex">
        <!-- Header Breadcrumbs & Title Column -->
        <a-col :span="24" :md="6">
          <!-- Header Breadcrumbs -->
          <a-breadcrumb>
            <a-breadcrumb-item
              ><router-link to="/"> Pages</router-link></a-breadcrumb-item
            >
            <a-breadcrumb-item>{{ this.$route.name }}</a-breadcrumb-item>
          </a-breadcrumb>
          <!-- / Header Breadcrumbs -->


        </a-col>
        <!-- / Header Breadcrumbs & Title Column -->

        <!-- Header Control Column -->
        <a-col :span="24" :md="18" class="header-control">
          <a-button type="link" class="sidebar-toggler" @click="$emit('toggleSidebar', ! sidebarCollapsed) , resizeEventHandler()">
						<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
					</a-button>

          <template>
            <a-dropdown>
              <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                <a-icon type="user" theme="outlined" />
              </a>
              <a-menu slot="overlay">

                <a-menu-item>
                <h6>{{user.firstName+ ' ' + user.lastName}}</h6>

                </a-menu-item>
                <a-menu-item @click="logout">

                  <a href="javascript:;">Logout</a>
                </a-menu-item>


              </a-menu>
            </a-dropdown>
          </template>


        </a-col>
        <!-- / Header Control Column -->
      </a-row>
    </a-layout-header>
    <!--  /Layout Header -->
  </component>
  <!-- / Main Sidebar -->
</template>

<script>
import {mapActions} from "vuex"

export default {
  props: {
    // Header fixed status.
    navbarFixed: {
      type: Boolean,
      default: false,
    },

    // Sidebar collapsed status.
    sidebarCollapsed: {
      type: Boolean,
      default: false,
    },


  },
  data() {
    return {
      top: 0,
      searchLoading: false,
      wrapper: document.body,
      user:{}
    };
  },
  methods: {

    ...mapActions(["logout"]),
    resizeEventHandler() {
      this.top = this.top ? 0 : -0.01;
      // To refresh the header if the window size changes.
      // Reason for the negative value is that it doesn't activate the affix unless
      // scroller is anywhere but the top of the page.
    },
    onSearch(value) {},
  },
  mounted: function () {
    // Set the wrapper to the proper element, layout wrapper.
    this.wrapper = document.getElementById("layout-dashboard");
  },
  created() {
    window.addEventListener("resize", this.resizeEventHandler);
    this.user = this.$store.getters.currentUser;
  },
  destroyed() {
    // Removing window resize event listener.
    window.removeEventListener("resize", this.resizeEventHandler);
  },
};
</script>
