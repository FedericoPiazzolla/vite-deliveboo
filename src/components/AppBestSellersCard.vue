<script>
import { store, saveCart, loadCart } from "../data/store";

export default {
  data() {
    return {
      bestSellers: [],
      store,
    };
  },
  props: {
    singleDish: Object,
    singleDishIndex: Number,
  },
  methods: {
    addQuantity(item) {
      const dish = this.bestSellers[item];

      localStorage.setItem("restaurant", JSON.stringify(store.restaurant));

      const existentDish = store.updatedCart.find(
        (dishToFind) => dishToFind.id === dish.id
      );
      if (existentDish) {
        existentDish.quantity++;
      } else {
        if (
          store.updatedCart.length > 0 &&
          store.updatedCart[0].restaurant_id !== dish.restaurant_id
        ) {
          this.showConfirmationModal = true;
          return;
        }
        dish.quantity = 1;
        store.updatedCart.push(dish);
      }
      saveCart(store.updatedCart);
    },

    removeQuantity(item) {
      const dish = this.bestSellers[item];

      const existentDishIndex = store.updatedCart.findIndex(
        (dishToFind) => dishToFind.id === dish.id
      );

      if (existentDishIndex !== -1) {
        if (
          store.updatedCart[existentDishIndex] &&
          store.updatedCart[existentDishIndex].quantity > 1
        ) {
          store.updatedCart[existentDishIndex].quantity--;
        } else {
          store.updatedCart.splice(existentDishIndex, 1);
        }

        saveCart(store.updatedCart);
      }
    },

    getCartQuantity(dishId) {
      const cartItem = store.updatedCart.find((item) => item.id === dishId);
      return cartItem ? cartItem.quantity : 0;
    },
  },
  created() {
    let bestSellersString = localStorage.getItem("bestSellers");
    this.bestSellers = JSON.parse(bestSellersString);
    console.log(this.bestSellers);
  },
};
</script>

<template>
  <div class="col ms_card me-4 shadow rounded-4 pb-sm-3">
    <img :src="`${singleDish.image}`" alt="" class="rounded-4" />

    <!-- <div class="d-none d-sm-flex flex-sm-column pt-sm-4 px-sm-3"> -->
    <h6 class="mx-3">
      {{ singleDish.name }}
    </h6>
    <p class="fs-6 mt-4 m-0 d-none d-xl-block mx-4">
      {{ singleDish.description }}
    </p>

    <!-- Quantità per carrello -->

    <div
      class="ms_quantity d-flex align-items-center justify-content-between mt-0 mx-auto w-75 w-md-5">
      <button
        class="ms_card-btn px-2 py-1"
        @click="removeQuantity(singleDishIndex)">
        <i class="fa-solid fa-minus"></i>
      </button>
      <span class="ms_quantity-show px-2 fw-bold">{{
        getCartQuantity(singleDish.id)
      }}</span>
      <button
        class="ms_card-btn px-2 py-1"
        @click="addQuantity(singleDishIndex)">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  </div>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;
.ms_card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: calc(100vw / 6);
  background-color: $bg-btn;
  color: $main-text;

  @media screen and (min-width: 576px) {
    height: auto;
  }
  img {
    width: 100%;
    aspect-ratio: 1;
    max-height: 40%;
    object-fit: cover;
  }

  h6 {
    font-size: 0.6em;
    color: $main-text;
    @media screen and (min-width: 576px) {
      font-size: 25px;
    }
  }
}

.ms_quantity {
  background-color: $bg-color;
  border-radius: 2rem;

  .ms_card-btn {
    background-color: $main-text;
    color: $bg-btn;
    border: 0;
    border-radius: 50%;

    :hover {
      background-color: none;
    }
  }
}
</style>
