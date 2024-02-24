<script >
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
export default {
  data() {
    
  },
  components: {
    AppHeader,
    AppJumbotron,
  }
}
</script>

<template>

  <AppHeader/>
  
  <main>
    <appJumbotron />
  </main>
  
</template>

<style lang="scss">
@use "./scss/partials/variables" as *;

</style>
