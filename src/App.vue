<script >
import AppHeader from './components/AppHeader.vue'
export default {
  data() {
    
  },
  components: {
    AppHeader,
  }
}
</script>

<template>

  <AppHeader/>

  <main>

  </main>
  
</template>

<style lang="scss">
@use "./scss/partials/variables" as *;

main {
  background-color: $bg-color;
}
</style>
