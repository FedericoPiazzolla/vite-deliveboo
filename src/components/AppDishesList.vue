<script>
import axios from "axios";
import { store } from "../data/store"

export default {
  components: {},
  data() {
    return {
      store,
      product: [],
    };
  },
  props: {
    restaurantDishes: Array, //chiamata per singolo ristorante per prendere i suoi piatti
  },
  created() {},
  methods: {
    AddToCart(item) {
      const dish = this.restaurantDishes[item];
      const price = this.restaurantDishes[item].price;
      dish.quantity = 1;

      // console.log("piatto", dish);

      store.cart.push(dish);
      localStorage.setItem('restaurant', store.restaurants);

      // Se il prodotto esiste in store.cart incremento la quantità
      if (store.cart.contains(dish)) {
        // store.cart.dish.quantity++;
      }

      console.log(store.cart);
    }
  }
};
</script>

<template>
  <section>
    <div class="px-4 pt-4 title d-flex align-items-center">
      <i class="fa-solid fa-utensils"></i>
      <span class="ms-2 fs-5 fw-bold">Tutti i piatti</span>
    </div>
    <div class="d-flex px-5 pt-4 justify-content-center align-items-stretch">
      <div class="row d-flex flex-column">
        <div
          class="col d-flex align-items-center ps-0 mb-3"
          v-for="(dish, index) in restaurantDishes"
          :key="index">
          <img class="me-2" :src="`${dish.image}`" alt="" />
          <p class="dish-name m-0 me-3">{{ dish.name }}</p>
          <p class="d-none d-lg-block fs-6 m-0">{{ dish.description }}</p>
          <button @click="AddToCart(index)">Add</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;

.title {
  color: $primary;
}
.col {
  color: $main-text;
  background-color: $bg-btn;
  border-radius: 2rem;

  img {
    width: 20%;
    aspect-ratio: 1;
    border-radius: 2rem;
    object-fit: cover;

    @media (min-width: 576px) {
      width: 7%;
    }
    @media (min-width: 1800px) {
      width: 5%;
    }
  }
  .dish-name {
    width: 50%;
    @media (min-width: 576px) {
      width: 50%;
    }
    @media (min-width: 992px) {
      width: 30%;
    }
  }

  p {
    width: 40%;
  }
}
</style>
