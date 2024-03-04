<script>
import { store } from "../data/store";
import AppCart from "./AppCart.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppCart,
  },
  methods: {
    getImageUrl(imgName) {
      return new URL(`../assets/img/${imgName}`, import.meta.url).href;
    },

    showModalCart() {
      let cartModal = document.getElementById("myModal");

      cartModal.classList.toggle("d-none");
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
  <header id="ms_header">
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
        class="right_header list-unstyled d-flex justify-content-end align-items-center h-100 m-0">
        <li>
          <a class="" href="http://127.0.0.1:8000/"
            ><i class="fa-solid fa-user"></i
          ></a>
        </li>
        <li class="m-0 p-0">
          <a class="cart-badge" id="myInput" href="#" @click="showModalCart">
            <i class="fa-solid fa-cart-shopping"></i>
            <div class="position-relative">
              <div class="cart"></div>
              <div v-if="totalQuantity > 0" class="cart-quantity">
                <span>{{ totalQuantity }}</span>
              </div>
            </div>
          </a>
          <div class="ms_modal d-none" id="myModal">
            <AppCart />
          </div>
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
    background: rgb(197, 22, 5);
    background: linear-gradient(
      90deg,
      rgba(197, 22, 5, 1) 10%,
      rgba(255, 253, 208, 1) 25%,
      rgba(255, 144, 0, 1) 50%,
      rgba(255, 253, 208, 1) 75%,
      rgba(197, 22, 5, 1) 100%
    );

    // text-shadow: 1px 5px 15px $bg-btn;
    position: relative;
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
        top: -35px;
        right: -20px;
        background-color: $primary;
        color: white;
        border-radius: 50%;
        padding: 0.2em 0.5em;
        font-size: 12px;
      }
    }
  }

  .ms_modal {
    height: calc(100vh - 120px);
    width: 100vw;
    background-color: $bg-color;
    padding: 1rem;
    position: absolute;
    top: 120px;
    left: 1px;
  }

  .right_header {
    li {
      a {
        width: 50px;
        aspect-ratio: 1;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

@media screen and (max-width: 578px) {
  /* Regole CSS specifiche per schermi con larghezza massima di 578px (dispositivi mobili) */
  .ms_logo-image,
  ul {
    width: 50% !important;
    justify-content: end !important;
  }
}
</style>
