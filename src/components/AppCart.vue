<script>
import { saveCart, store } from "../data/store";

export default {
  name: "Cart",

  data() {
    return {
      store,
    };
  },
  methods: {
    addScrollbarToCart() {
      let cartContainer = document.getElementById("cart-container");
      let cartContainerHeight = cartContainer.getBoundingClientRect();

      console.log(cartContainerHeight);
    },
    // Aggiungo una quantità del prodotto
    addQuantity(dishKey) {
      this.store.updatedCart[dishKey].quantity++;
      saveCart(store.updatedCart);
    },

    removeQuantity(dishKey) {
      if (store.updatedCart[dishKey].quantity > 1) {
        store.updatedCart[dishKey].quantity--;
        saveCart(store.updatedCart);
      } else if (store.updatedCart[dishKey].quantity === 1) {
        store.updatedCart.splice(dishKey, 1);
        saveCart(store.updatedCart);
      }
    },

    emptyCart() {
      localStorage.removeItem("updatedCart");
      store.updatedCart = [];
      console.log(localStorage);
    },

    // calcolo il totale
    calcTotal() {
      let total = 0;

      for (const index in store.updatedCart) {
        total +=
          store.updatedCart[index].price * store.updatedCart[index].quantity;
      }

      return total.toFixed(2);
    },

    showBtnOnCart() {
      let cartModal = document.getElementById("myModal");
    },

    hideCartModal() {
      let cartModal = document.getElementById("myModal");

      cartModal.classList.add("d-none");
    },
  },
};
</script>

<template>
  <div class="d-none" id="hide_cart_btn">
    <button @click="hideCartModal" class="ms_back-btn">
      <span class="fs-6">&leftarrow; Chiudi carrello</span>
    </button>
  </div>

  <!-- carrello con lista ordinata dei prodotti, totale da pagare e bottoni -->
  <div class="pt-4 cart_title text-center">
    <h3 class="m-0">
      Il tuo carrello<i class="fa-solid fa-cart-shopping"></i>
    </h3>
  </div>

  <!-- Sezione prodotti nel carrello -->
  <section
    id="cart-container"
    class="cart_element"
    v-if="store.updatedCart.length > 0"
    @click="addScrollbarToCart">
    <div class="text-center">
      <h6 class="ms_restaurant-title mb-3 d-inline">
        {{ store.updatedCart[0].restaurant.restaurant_name }}
      </h6>
    </div>

    <ol class="list-group mt-4">
      <li
        v-for="(product, index) in store.updatedCart"
        :key="index"
        class="ps-4 rounded-5 mb-3 flex-row list-group-item d-flex justify-content-between align-items-center">
        <div class="ms-md-2 me-auto">
          <p class="ms_dish-name fw-bold mb-1">{{ product.name }}</p>
          <span class="ms_price d-inline-block"
            >&euro; {{ product.price }}</span
          >
        </div>

        <div class="ms_quantity-show d-inline-block mt-2 mb-2 mb-md-0">
          <button class="px-2 py-1" @click="removeQuantity(index)">
            <i class="fa-solid fa-minus"></i>
          </button>
          <span class="px-2 fw-bold">{{ product.quantity }}</span>
          <button class="px-2 py-1" @click="addQuantity(index)">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </li>
    </ol>
  </section>

  <section v-else class="text-center my-4">
    <h6>Non hai ancora selezionato alcun piatto</h6>
  </section>

  <div
    class="total_order ps-4 rounded-5 mb-3 flex-row list-group-item d-flex justify-content-between align-items-center">
    <p class="ms_dish-name fw-bold m-0">Totale</p>
    <span class="ms_price d-inline-block">&euro; {{ calcTotal() }}</span>
  </div>

  <div
    class="buttons_order d-flex justify-content-between"
    @click="hideCartModal">
    <router-link to="/checkout" v-if="store.updatedCart.length > 0">
      <button class="order_button btn">Checkout</button>
    </router-link>

    <button class="empty_cart_btn btn" @click="emptyCart">
      <i class="fa-solid fa-trash"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.ms_back-btn {
  border: 0;
  background-color: $primary;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 2rem;
}

.buttons_order {
  .order_button {
    background-color: $bg-btn;
    color: $main_text;
  }

  .empty_cart_btn {
    background-color: $primary;
    color: $bg-color;
  }
}

h6 {
  color: $primary;
}
.ms_price {
  background-color: $bg-color;
  padding: 0.2rem 0.5rem;
  border-radius: 2rem;
  font-weight: bolder;
}

.cart_element {
  max-height: 750px;
  overflow-y: scroll;

  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px $bg-btn;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: $main-text;
    border-radius: 10px;
  }
}

ol {
  li {
    background-color: $bg-btn;

    .ms_quantity-show {
      background-color: $bg-color;
      border-radius: 2rem;

      button {
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
}

.total_order {
  background-color: $main-text;
  color: $bg-btn;
  border: 2px solid $bg-btn;
  .ms_price {
    color: $main-text;
  }
}

.ms_total-price {
  padding-top: 1rem;
  p {
    margin: 0;
    background-color: $primary;
    font-size: 1.7rem;
    color: $bg-color;
    padding: 0.5rem 0.7rem;
    border-radius: 2rem;
  }
}
</style>
