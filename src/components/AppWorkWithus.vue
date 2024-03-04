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
  <section class="ms_work-section">
    <div class="container">
      <div class="row ms_row">
        <!-- Imagine Col -->
        <div class="col-12 col-md-6 my-auto">
          <img :src="getImageUrl('hero-rider.png')" alt="" />
        </div>
        <!-- /Imagine Col -->

        <!-- Text Col -->
        <div class="col-12 col-md-6 d-flex align-items-center">
          <p class="p-4">
            <span class="fw-bolder d-block pb-5"
              >Sei pronto a essere il motore che alimenta la felicità dei nostri
              clienti?</span
            >
            Unisciti a noi nel portare il gusto direttamente nelle case di
            chiunque desideri un pasto delizioso e conveniente. Siamo alla
            ricerca di rider intraprendenti, desiderosi di mettersi in gioco e
            rendere ogni consegna un'esperienza straordinaria. Entra a far parte
            della nostra squadra e trasforma ogni tua corsa in un'opportunità di
            crescita e soddisfazione personale
          </p>
        </div>
        <div class="col-12 text-center mb-5">
          <a href="http://127.0.0.1:8000/" class="ms_btn">Lavora con noi</a>
        </div>
        <!-- /Text Col -->
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.ms_btn {
  background-color: $main-text;
  color: $bg-color;
  padding: 0.7rem;
  border-radius: 2rem;
  text-decoration: none;
}
.ms_work-section {
  background-color: $bg-btn;
}

@media screen and (max-width: 500px) {
  /* Regole CSS specifiche per schermi con larghezza massima di 500px (dispositivi mobili) */

  .ms_row {
    flex-wrap: wrap;
    flex-direction: column;
  }
}
</style>
