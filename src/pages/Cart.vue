<script>
import { store } from '../data/store';

export default {
  name: 'Cart',

  data() {
    return {
      store,
      cartItems: {
        product1: {
          name: 'Pizza Margherita',
          price: 7,
          ingredients: 'Pomodoro, mozzarella, basilico',
          quantity: 1
        },
        product2: {
          name: 'Pasta Carbonara',
          price: 10,
          ingredients: 'Uova, pancetta, pecorino, pepe',
          quantity: 1
        },
        product3: {
          name: 'Insalata Caesar',
          price: 8,
          ingredients: 'Lattuga, crostini, parmigiano, salsa caesar',
          quantity: 1
        },
        product4: {
          name: 'Hamburger Classico',
          price: 12,
          ingredients: 'Manzo, formaggio, lattuga, pomodoro',
          quantity: 1
        }
      }
    }
  },
  methods: {
    // Aggiungo una quantità del prodotto
    addQuantity(dishKey) {
      this.cartItems[dishKey].quantity++;
    },

    removeQuantity(dishKey) {
      if (this.cartItems[dishKey].quantity > 1) {
        this.cartItems[dishKey].quantity--;
      } else {
        // this.$delete(this.cartItems, dishKey);
      }
    },

    // calcolo il totale
    calcTotal() {
      let total = 0;

      for (const index in this.cartItems) {
        total += this.cartItems[index].price * this.cartItems[index].quantity;
      }

      return total
    }
  }
}
</script>

<template>
  <section class="ms_cart-section">
    <!-- carrello con lista ordinata dei prodotti, totale da pagare e bottoni -->
    <section id="cart-container">
      
      <h2 class="mb-4 text-uppercase text-center">Carrello <i class="fa-solid fa-cart-shopping"></i></h2>
      
        <h4 class="mb-3">Nome ristorante da cui acquisto</h4>

        <ol class="list-group list-group-numbered">
          <li v-for="(product, index) in cartItems" :key="index" class="ps-4 rounded-5 mb-3 flex-column flex-md-row list-group-item d-flex justify-content-between align-items-start">
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
        </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>

.ms_cart-section {
  min-height: 1000px;
}
</style>