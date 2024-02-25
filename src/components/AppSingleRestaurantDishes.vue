<script>
import AppBestSellers from "./AppBestSellers.vue";
import AppDishesList from "./AppDishesList.vue";
export default {
  components: { AppBestSellers, AppDishesList },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="dishes p-4">
    <AppBestSellers />
    <AppDishesList />
  </div>
</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;
</style>
