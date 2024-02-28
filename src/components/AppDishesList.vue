<script>
import axios from "axios";
import { store, saveCart, loadCart } from "../data/store";

export default {
  components: {},
  data() {
    return {
      store,
      product: [],
      showConfirmationModal: false,
    };
  },
  props: {
    restaurantDishes: Array, //chiamata per singolo ristorante per prendere i suoi piatti
  },
  methods: {
    addQuantity(item) {
      const dish = this.restaurantDishes[item];

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
      const dish = this.restaurantDishes[item];

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

    emptyCart() {
      localStorage.clear();
      store.updatedCart = [];
      this.showConfirmationModal = false;
    },
    resetModal() {
      this.showConfirmationModal = false;
    },  
  },
};
</script>

<template>
  <section>
    <!-- Modale per la conferma svuota carrello -->
    <div v-if="showConfirmationModal" class="modal-container">
      <div class="modal-content">
        <h2>Attenzione!</h2>
        <p>Sei sicuro di voler cambiare ristorante? Il tuo carrello verrà svuotato.</p>
        <button @click="emptyCart">Ok</button>
        <button @click="resetModal">Annulla</button>
      </div>
    </div>

    <!-- cards -->
    <div class="px-4 pt-4 title d-flex align-items-center">
      <i class="fa-solid fa-utensils"></i>
      <span class="ms-2 fs-5 fw-bold">Tutti i piatti</span>
    </div>
    <div class="d-flex px-5 pt-4 justify-content-center align-items-stretch">
      <div class="row d-flex flex-column">
        <div
          class="col d-flex justify-content-between align-items-center ps-0 mb-3 pe-0"
          v-for="(dish, index) in restaurantDishes"
          :key="index">
          <!-- card image -->
          <img class="me-2" :src="`${dish.image}`" alt="" />
          <!-- /card image -->

          <!-- card content -->
          <div
            class="dish_details w-75 details_dish d-flex justify-content-between align-items-center">
            <h6 class="dish-name fw-bold m-0">{{ dish.name }}</h6>
            <!-- <p class="dish_description text-start d-none fs-6 m-0">
              {{ dish.description }}
            </p> -->
            <p class="dish_price d-none d-sm-block">€{{ dish.price }}</p>
          </div>
          <!-- /card content -->

          <div class="mb-md-0 pe-2 p-sm-4">
            <div
              class="ms_quantity d-flex align-items-center justify-content-between">
              <button
                class="ms_card-btn px-2 py-1"
                @click="removeQuantity(index)">
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="ms_quantity-show px-2 fw-bold">{{
                getCartQuantity(dish.id)
              }}</span>
              <button class="ms_card-btn px-2 py-1" @click="addQuantity(index)">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <!-- /quantità card -->

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: $bg-color;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 70px $bg-btn;
  max-width: 400px;
  width: 100%;
}

.modal-content button {
  margin-top: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: $main-text;
  color: #fff;
  font-size: 16px;
}

.modal-content button:hover {
  background-color: lighten($color: $main-text, $amount: 10%);
}

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

  .dish_details {
    .dish-name {
      width: 30%;
      color: $primary;

      @media (min-width: 576px) {
        width: 50%;
      }

      @media (min-width: 992px) {
        width: 20%;
      }
    }

    .dish-description {
      @media (min-width: 992px) {
        width: 70%;
      }
    }

    .dish_price {
      @media (min-width: 992px) {
        width: 20%;
      }
    }

    p {
      margin: 0;
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

      &:active {
        background-color: red;
      }
    }
  }
}
</style>
