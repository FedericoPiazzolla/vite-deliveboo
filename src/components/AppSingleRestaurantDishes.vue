<script>
import AppBestSellers from "./AppBestSellers.vue";
import AppDishesList from "./AppDishesList.vue";
import axios from "axios";
export default {
  components: { AppBestSellers, AppDishesList },
  data() {
    return {
      dishes: [],
      bestSellers: [],
      restaurant_id: 2,
    };
  },
  methods: {
    // Funzione per prendere 5 dish random tra i quelli del singolo ristorante in modo da ottenere i best sellers
    getRandomBestSeller() {
      let shuffledDishes = this.dishes.sort(() => 0.5 - Math.random());
      this.bestSellers = shuffledDishes.slice(0, 5);
    },
  },
  created() {
    axios
      .get(
        `http://127.0.0.1:8000/api/dishes?restaurant_id=${this.restaurant_id}`
      )
      .then((resp) => {
        this.dishes = resp.data.results.data;
        this.getRandomBestSeller();
      });
  },
};
</script>

<template>
  <div class="dishes">
    <AppBestSellers :bestSellers="bestSellers" />
    <AppDishesList :restaurantDishes="dishes" />
  </div>
</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;
</style>
