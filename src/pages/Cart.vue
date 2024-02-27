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
    removeDish() {
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
    <section id="cart-container" v-if="store.updatedCart.length > 0">
      
        <h2 class="mb-4 text-uppercase text-center">Carrello <i class="fa-solid fa-cart-shopping"></i></h2>
      
        <h4 class="mb-3">{{ store.updatedCart[0].restaurant.restaurant_name }}</h4>

        <ol class="list-group list-group-numbered">
          <li v-for="(product, index) in store.updatedCart" :key="index" class="ps-4 rounded-5 mb-3 flex-column flex-md-row list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-md-2 me-auto">
              <p class="fw-bold mb-1">
                {{ product.name }}
                <span class="ps-md-3 d-block d-md-inline">&euro;{{ product.price }}</span>
              </p>
            </div>
            <div class="d-inline-block mt-2 mb-2 mb-md-0">
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

        <div class="d-flex justify-content-end">
          <p class="text-decoration-underline mb-3 text-warning px-5 fw-bolder fs-3">Totale: &euro; {{ calcTotal() }}</p>
          <button @click="removeDish()">Elimna piatti</button>
        </div>
    </section>

    <section v-else class="text-center">
      <h2>Il tuo carello è vuoto</h2>
    </section>
  </section>
</template>

<style lang="scss" scoped>

.ms_cart-section {
  min-height: 1000px;
}
</style>