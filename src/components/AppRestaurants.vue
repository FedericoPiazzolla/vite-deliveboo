<script>
import axios from "axios";
import AppRestaurantCard from "./AppRestaurantCard.vue";
export default {
  data() {
    return {
      restaurants: [],
    };
  },
  components: {
    AppRestaurantCard,
  },

  created() {
    axios.get(`http://127.0.0.1:8000/api/restaurants`).then((resp) => {
      console.log(resp.data.results);
      this.restaurants = resp.data.results;
    });
  },
  methods: {
    // searchRestaurant() {
    //   // 1. svuotare array restaurants[]
    //   // 2. chiamata axios
    //   // 3. pushare nell'array restaurants la nuova resp
    // },
  },
};
</script>

<template>
  <section class="ms_restaurants">
    <h2 class="ms_title-restaurants">" I ristoranti intorno a te! "</h2>
    <div class="container">
      <div class="row g-3 ms_row">
        <AppRestaurantCard
          v-for="(restaurant, index) in restaurants"
          :key="index"
          :singleRestaurant="restaurant" />
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
