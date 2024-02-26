<script>
export default {
  data() {
    return {};
  },
  methods: {
    getImageUrl(imgName) {
      return new URL(`../assets/img/${imgName}`, import.meta.url).href;
    },
  },
};
</script>

<template>
  <header>
    <div class="h-100 d-flex justify-content-between align-items-center p-3">
      <!-- immagine del logo che porta alla home -->
      <div class="ms_logo-image w-25">
        <router-link to="/">
          <img
            class="h-100"
            :src="getImageUrl('deliveboo_logo.png')"
            alt="logoristo" />
        </router-link>
      </div>
      <!-- /immagine del logo che porta alla home -->

      <!-- Central text logo -->
      <span class="ms_logo-text d-md-inline-block text-center">Deliveboo</span>
      <!-- /Central text logo -->

      <!-- nav menu per login e carrello -->
      <ul
        class="list-unstyled d-flex justify-content-end align-items-center h-100 m-0 w-25">
        <li>
          <a href="">Log-In</a>
        </li>
        <li>
          <a href="">Carrello</a>
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
  background-color: $primary;
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

  ul {
    width: 20%;
    li {
      padding-left: 1rem;
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
