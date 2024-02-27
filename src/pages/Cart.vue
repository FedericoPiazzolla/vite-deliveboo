<script>
import { saveCart, store } from '../data/store';

export default {
  name: 'Cart',

  data() {
    return {
      store,
    }
  },
  methods: {
    // Aggiungo una quantità del prodotto
    addQuantity(dishKey) {
      this.store.updatedCart[dishKey].quantity++;
      saveCart(store.updatedCart);
    },

    removeQuantity(dishKey) {
      if (store.updatedCart[dishKey].quantity > 1) {
        store.updatedCart[dishKey].quantity--;
        saveCart(store.updatedCart);
      } else if (store.updatedCart[dishKey].quantity === 1){
        store.updatedCart.splice(dishKey, 1);
        saveCart(store.updatedCart);
      }
    },
    removeDishes() {
      localStorage.clear();
      store.updatedCart = [];
    },

    // calcolo il totale
    calcTotal() {
      let total = 0;

      for (const index in store.updatedCart) {
        total += store.updatedCart[index].price * store.updatedCart[index].quantity;
      }

      return total.toFixed(2)
    }
  }
}
</script>

<template>
  <section class="ms_cart-section">
    <!-- carrello con lista ordinata dei prodotti, totale da pagare e bottoni -->
    <section id="cart-container" class="p-3 py-5" v-if="store.updatedCart.length > 0">
      
        <h2 class="pb-5 text-center m-0">Il tuo ordine <i class="fa-solid fa-cart-shopping"></i></h2>
      
        <h4 class="ms_restaurant-title mb-3 d-inline">{{ store.updatedCart[0].restaurant.restaurant_name }}</h4>

        <ol class="list-group mt-4">
          <li v-for="(product, index) in store.updatedCart" :key="index" class="ps-4 rounded-5 mb-3 flex-row list-group-item d-flex justify-content-between align-items-center">

            <div class="ms-md-2 me-auto">
              <p class=" ms_dish-name fw-bold mb-1">{{ product.name }}</p>
              <span class="ms_price d-inline-block">&euro; {{ product.price }}</span>
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

        <div class="ms_total-price d-flex justify-content-between justify-content-md-end">
          <p>Totale: &euro; {{ calcTotal() }}</p>
          <button class="btn btn-success">Conferma ordine</button>
        </div>
    </section>

    <section v-else class="text-center">
      <h2>Il tuo carello è vuoto</h2>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.ms_cart-section {
  min-height: 1000px;

  .ms_restaurant-title {
    background-color: $bg-btn;
    border-radius: 2rem;
    padding: .5rem 1rem;
    margin-left: 1rem;
  }

  .ms_price {
    background-color: $bg-color;
    padding: .2rem .5rem;
    border-radius: 2rem;
    font-weight: bolder;
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

  .ms_total-price {
    text-align: center;
    padding-top: 1rem;
    p {
      margin: 0;
      background-color: $primary;
      font-size: 1.7rem;
      color: $bg-color;
      padding: .5rem .7rem;
      border-radius: 2rem;
    }
  }

}
</style>