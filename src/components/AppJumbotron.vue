<script>
export default {
  data() {
    return{
      types: [
        'italiano',
        'giapponese',
        'cinese',
        'gelateria',
        'Pesce',
        'Carne',
        'Pizza',
        'FastFood',
        'Kebab',
        'Colazione',
        'vegetariano',
        'Indiano',
      ]
    }
  }
}
</script>

<template>
  <div class="ms_jumbotron h-100 d-flex align-items-end justify-content-center">
    <div class="container h-100">

      <!-- imaggine di sfondo -->
      <div class="ms_background-overlay"></div>

      <!-- bottoni per scegliere le types -->
      <div class="row g-2 g-sm-2 text-md-center text-sm-start h-100">
        <div class="col-lg-2 col-md-3 col-sm-2 mb-lg-2" v-for="(type, index) in types" :key="index">
          <a class="btn ms_btn" href="">{{ type }}</a>
        </div>
        
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.ms_jumbotron {
  min-height: 600px;
  position: relative;

  .ms_background-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("/jumbotron.jpeg");
    background-position: center;
    background-size: cover;
    filter: brightness(0.5);
    z-index: -1;
  }

  .ms_btn{
    background-color: $bg-btn;
    color: $main-text;
    width: 60%;
  }
  
}

@media screen and (max-width: 575px) {
    /* Regole CSS specifiche per schermi con larghezza massima di 575px (dispositivi mobili) */
    .ms_btn {
      width: 30% !important;
    }

    .ms_jumbotron {
      align-items: center !important;
    }
  }

</style>