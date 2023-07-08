<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import storage from "@/plugins/storage";
// import { getBaseSite } from "@/api/common.js";
export default {
  name: "App",
  mounted() {
  },
}
</script>
<style lang="scss">
#app {
  @include background_color($light_background_color);
  width: 100%;
  height: 100%;
}
.container[data-v-4bc9d7de] {
  height: 100%;
}
</style>
