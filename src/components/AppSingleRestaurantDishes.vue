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
    <div class="title d-flex align-items-center">
      <i class="fa-solid fa-star"></i>
      <span class="ms-2 fs-5 fw-bold">Best Sellers</span>
    </div>
  </div>
  <AppBestSellers />
  <AppDishesList />
</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;
.dishes {
  .title {
    color: $primary;
  }
}
</style>
