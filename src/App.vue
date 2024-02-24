<script >
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppRestaurants from './components/AppRestaurants.vue';
import AppWorkWithus from './components/AppWorkWithus.vue';
export default {
  data() {
    return {}
  },
  components: {
    AppHeader,
    AppJumbotron,
    AppRestaurants,
    AppWorkWithus,
    AppFooter,
  }
}
</script>

<template>

  <AppHeader/>
  
  <main>
    <AppJumbotron />
    <AppRestaurants />
    <AppWorkWithus />
  </main>

  <AppFooter />
  
</template>

<style lang="scss">
@use "./scss/partials/variables" as *;

</style>
