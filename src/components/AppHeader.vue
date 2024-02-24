<script>
export default {

}
</script>

<template>
  <header>

    <div class="h-100 d-flex justify-content-between align-items-center p-3">

      <!-- immagine del logo che porta alla home -->
      <div class="ms_logo-image ">

        <img class="h-100" src="/deliveboo_logo.png" alt="logoristo">

      </div>

      <span class="ms_logo-text d-md-inline-block text-center">Deliveboo</span>

      <!-- nav menu per login e carrello -->
      <ul class="list-unstyled d-flex justify-content-end align-items-center h-100 m-0">
        <li>
          <a href="">Log-In</a>
        </li>
        <li>
          <a href="">Carrello</a>
        </li>
      </ul>

    </div>

  </header>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;
  header {
    height: 120px;
    background-color: $primary;

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

  @media screen and (max-width: 575px) {
    /* Regole CSS specifiche per schermi con larghezza massima di 575px (dispositivi mobili) */
    .ms_logo-image, ul {
      width: 50% !important;
      justify-content: end !important;
    }
  }
</style>

