<script>
import AppBestSellersCarousel from "./AppBestSellersCarousel.vue";
export default {
  components: { AppBestSellersCarousel },
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
  <AppBestSellersCarousel />
</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;
.dishes {
  .title {
    color: $primary;
  }
}
</style>
