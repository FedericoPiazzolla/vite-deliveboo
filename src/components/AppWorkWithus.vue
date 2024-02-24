<script>
export default {
  data() {
    return {}
  },
  methods: {
    getImageUrl(imgName) {
      return new URL(`../assets/img/${imgName}`, import.meta.url).href;
    },
  }
}
</script>

<template>
  <section class="ms_work-section">
    <div class="container">
      <div class="row ms_row">
        <div class="col ms_col">
          <img :src="getImageUrl('hero-rider.png')" alt="">
        </div>
        <div class="col ms_col d-flex align-items-center">
          <p class="p-4">
            <span class="fw-bolder d-block pb-5">Sei pronto a essere il motore che alimenta la felicità dei nostri clienti?</span>
            Unisciti a noi nel portare il gusto direttamente nelle case di chiunque desideri un pasto delizioso e conveniente. Siamo alla ricerca di rider intraprendenti, desiderosi di mettersi in gioco e rendere ogni consegna un'esperienza straordinaria. Entra a far parte della nostra squadra e trasforma ogni tua corsa in un'opportunità di crescita e soddisfazione personale
          </p>
        </div>
      </div>
    </div> 
  </section>

</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.ms_work-section {

  background-color: #FF9000;

  .row {

    .ms_col {
      width: calc(100% / 2);
    }
  } 
}


@media screen and (max-width: 500px) {
    /* Regole CSS specifiche per schermi con larghezza massima di 500px (dispositivi mobili) */

  .ms_row {
    flex-wrap: wrap;
    flex-direction: column;
    .ms_col {
      width: 100% !important;     
    }    
  }
}

</style>