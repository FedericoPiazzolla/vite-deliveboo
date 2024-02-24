<script>
export default {
  data() {
    return {
      cards: [
        'ciao',
        'queste',
        'sono',
        '6',
        'card',
        'uguali'
      ]
    }
  },
  methods: {

  }
}
</script>

<template>
  <section class="ms_restaurants">

    <h2 class="ms_title-restaurants">" I ristoranti intorno a te! "</h2>

    <div class="container">
      <div class="row g-3 ms_row">
        <div v-for="(card, index) in cards" :key="index" class="col-md-4 col-sm-12">
          <div class="cards">
            {{ card }}
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.ms_restaurants {

  padding: 4rem 0;

  .ms_title-restaurants {
    text-align: center;
    padding-bottom: 2.4rem;
    color: $main-text;
    font-weight: bolder;
    font-size: 2rem;
  }

  .cards {
    width: 100%;
    height: 400px;
    background-color: aqua;
  }
}
  

  @media screen and (max-width: 500px) {
    /* Regole CSS specifiche per schermi con larghezza massima di 500px (dispositivi mobili) */

    .ms_row {
      flex-direction: column;

      .cards {
        width: 100%;
        height: 150px;
      }      
    }

  }
</style>