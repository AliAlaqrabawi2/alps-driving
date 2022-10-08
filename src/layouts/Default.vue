<template>
  <div>
    <a-layout class="layout-default" id="layout-default" :class="[layoutClass]">
      <DefaultHeader></DefaultHeader>

      <!-- Page Content -->
      <a-layout-content>
        <router-view/>
      </a-layout-content>
      <!-- / Page Content -->

    </a-layout>
    <!-- / Default Layout -->
  </div>
</template>

<script>
import DefaultHeader from "../components/Headers/DefaultHeader";

export default {
  components: {
    DefaultHeader,
  },
  data() {
    return {};
  },
  computed: {
    // Sets layout's element's class based on route's meta data.
    layoutClass() {
      return this.$route.meta.layoutClass;
    },
  },
};
</script>
