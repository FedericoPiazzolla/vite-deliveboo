<script>
import AppJumbotron from '../components/AppJumbotron.vue'
import AppRestaurants from '../components/AppRestaurants.vue'
import AppWorkWithus from '../components/AppWorkWithus.vue'
  export default {
    components: { AppJumbotron, AppRestaurants, AppWorkWithus },
    data() {

    },
    name: 'Home',
  }
</script>

<template>
  <AppJumbotron />
  <AppRestaurants />
  <AppWorkWithus />
</template>

<style>

</style>