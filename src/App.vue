<script >
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppRestaurants from './components/AppRestaurants.vue';
export default {
  data() {
    
  },
  components: {
    AppHeader,
    AppJumbotron,
    AppRestaurants,
  }
}
</script>

<template>

  <AppHeader/>
  
  <main>
    <appJumbotron />
    <AppRestaurants />
  </main>
  
</template>

<style lang="scss">
@use "./scss/partials/variables" as *;

</style>
