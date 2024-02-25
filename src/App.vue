<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
export default {
  data() {
    return {};
  },
  components: { AppHeader, AppFooter },
};
</script>

<template>
  <AppHeader />

  <main>
    <router-view></router-view>
  </main>

  <AppFooter />
</template>

<style lang="scss">
@use "./scss/partials/variables" as *;
</style>
