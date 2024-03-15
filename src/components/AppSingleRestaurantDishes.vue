<script>
import AppBestSellers from "./AppBestSellers.vue";
import AppDishesList from "./AppDishesList.vue";
import axios from "axios";
import { store } from "../data/store";
export default {
  components: { AppBestSellers, AppDishesList },
  data() {
    return {
      dishes: [],
      bestSellers: [],
      store,
    };
  },
  methods: {
    // Funzione per prendere 5 dish random tra i quelli del singolo ristorante in modo da ottenere i best sellers
    getRandomBestSeller() {
      let shuffledDishes = this.dishes.sort(() => 0.5 - Math.random());
      this.bestSellers = shuffledDishes.slice(0, 5);
      localStorage.setItem("bestSellers", JSON.stringify(this.bestSellers));
    },

    // Carico il restaurant_id dal local store
    loadRestaurantId() {
      return JSON.parse(localStorage.getItem("restaurant_id")) || [];
    },
  },
  created() {
    if (this.store.restaurant_id !== "") {
      this.saveRestaurantId(store.restaurant_id);
    }
    const restaurantToShow = this.loadRestaurantId();
    axios
      .get(`http://127.0.0.1:8000/api/dishes?restaurant_id=${restaurantToShow}`)
      .then((resp) => {
        this.dishes = resp.data.results.data;
        this.getRandomBestSeller();
      });
  },
};
</script>

<template>
  <div class="d-none d-sm-block col-12 ms-2 pe-0" id="best_sellers">
    <AppBestSellers :bestSellers="bestSellers" />
  </div>
  <div class="col-12 col-lg-6 ps-5 pe-4">
    <AppDishesList :restaurantDishes="dishes" />
  </div>
</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;

// #best_sellers {

// }
</style>
