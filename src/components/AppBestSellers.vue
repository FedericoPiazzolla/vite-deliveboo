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
    <div class="title d-flex align-items-center ms-2">
      <i class="fa-solid fa-star"></i>
      <span class="ms-2 fs-5 fw-bold">Best Sellers</span>
    </div>
    <div class="best-sellers row-cols-4 d-flex py-4">
      <AppBestSellersCard
        v-for="(dish, index) in bestSellers"
        :key="index"
        :singleDish="dish"
        :singleDishIndex="index" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.title {
  color: $primary;
}

.best-sellers {
  height: 100%;
  align-items: stretch;
  overflow-x: scroll;
}
</style>
