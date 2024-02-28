<script>
import { store } from "../data/store";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    getImageUrl(imgName) {
      return new URL(`../assets/img/${imgName}`, import.meta.url).href;
    },
  },
  computed: {
    totalQuantity() {
      return store.updatedCart.reduce(
        (total, itemCart) => total + itemCart.quantity,
        0
      );
    },
  },
};
</script>

<template>
  <header>
    <div class="h-100 d-flex justify-content-between align-items-center p-3">
      <!-- immagine del logo che porta alla home -->
      <div class="w-25 ms_logo-image">
        <router-link to="/">
          <img
            class="h-100"
            :src="getImageUrl('deliveboo_logo.png')"
            alt="logoristo" />
        </router-link>
      </div>
      <!-- /immagine del logo che porta alla home -->

      <!-- Central text logo -->
      <span class="ms_logo-text d-md-inline-block text-center bg-image"
        >Deliveboo</span
      >
      <!-- /Central text logo -->

      <!-- nav menu per login e carrello -->
      <ul
        class="list-unstyled d-flex justify-content-end align-items-center h-100 m-0">
        <li>
          <a class="" href="">Log-In</a>
        </li>
        <li>
          <a class="cart-badge" href="/cart">
            <i class="fa-solid fa-cart-shopping"></i>
            <div class="position-relative">
              <div class="cart"></div>
              <div v-if="totalQuantity > 0" class="cart-quantity">
                <span>{{ totalQuantity }}</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <!-- /nav menu per login e carrello -->
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;
header {
  height: 120px;
  background-color: $main-text;
  position: fixed;
  z-index: 999;
  width: 100%;

  .ms_logo-image {
    height: 90%;
    width: 25%;
  }

  .ms_logo-text {
    display: none;
    width: 60%;
    font-size: 3rem;
    font-weight: bold;
    color: $main-text;
  }
  .bg-image {
    background-image: url(../assets/img/jumbotron.jpeg);
    background-size: contain;

    background-clip: text;
    color: transparent;
  }
  ul {
    width: 25%;
    li {
      padding: 0 1rem;

      a {
        text-decoration: none;
        color: $bg-btn;
        display: inline-block;
        background-color: $bg-btn;
        color: $main-text;
        padding: 0.4rem 0.5rem;
        border-radius: 2rem;
      }

      .cart-badge {
        position: relative;
        display: inline-block;
      }

      .cart-quantity {
        position: absolute;
        top: -42px;
        right: -15px;
        background-color: $primary; /* Colore del badge */
        color: white; /* Colore del testo del badge */
        border-radius: 50%;
        padding: 0.2em 0.5em;
        font-size: 12px;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  /* Regole CSS specifiche per schermi con larghezza massima di 500px (dispositivi mobili) */
  .ms_logo-image,
  ul {
    width: 50% !important;
    justify-content: end !important;
  }
}
</style>
