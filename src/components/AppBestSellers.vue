<script>
import AppBestSellersCard from "./AppBestSellersCard.vue";

export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    bestSellers: Array,
  },
  components: {
    AppBestSellersCard,
  },

  methods: {},
};
</script>

<template>
  <section class="">
    <div class="title d-flex align-items-center px-4">
      <i class="fa-solid fa-star"></i>
      <span class="ms-2 fs-5 fw-bold">Best Sellers</span>
    </div>
    <div class="best-sellers row-cols-4 d-flex py-4 align-items-stretch">
      <AppBestSellersCard
        v-for="(dish, index) in bestSellers"
        :key="index"
        :singleDish="dish" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.title {
  color: $primary;
}

.best-sellers {
  overflow-x: scroll;
}
</style>
