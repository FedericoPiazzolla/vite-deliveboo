<script>
import axios from "axios";
import { store } from "../data/store";
import AppRestaurantCard from "./AppRestaurantCard.vue";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppRestaurantCard,
  },

  created() {
    axios.get(`http://127.0.0.1:8000/api/restaurants`).then((resp) => {
      this.store.restaurantLoading = false;
      this.store.restaurantsToShow = resp.data.results;
    });
  },
};
</script>

<template>
  <section class="ms_restaurants">
    <h2 class="ms_title-restaurants" v-if="store.restaurantLoading">
      Caricamento risultati...
    </h2>

    <h2
      v-if="store.restaurantLoading == false"
      class="ms_title-restaurants"
      id="homeTitle">
      Ristoranti intorno a te!
    </h2>
    <div class="container">
      <div class="row g-3 ms_row">
        <AppRestaurantCard
          v-for="(restaurant, index) in store.restaurantsToShow"
          :key="index"
          :singleRestaurant="restaurant" />

        <h6
          v-if="
            this.store.restaurantsToShow.length === 0 &&
            this.store.typesResearch.length > 0
          ">
          La tua ricerca non ha prodotto risultati!
        </h6>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.ms_restaurants {
  padding: 4rem 0;

  .ms_title-restaurants {
    text-align: center;
    padding-bottom: 2.4rem;
    color: $main-text;
    font-weight: bolder;
    font-size: 2rem;
  }
}

@media screen and (max-width: 500px) {
  /* Regole CSS specifiche per schermi con larghezza massima di 500px (dispositivi mobili) */

  .ms_row {
    flex-direction: column;
  }
}
</style>
