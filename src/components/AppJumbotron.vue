<script>
import axios from "axios";
export default {
  data() {
    return {
      types: [],
    };
  },
  created() {
    axios.get(`http://127.0.0.1:8000/api/types`).then((resp) => {
      console.log(resp.data.results);
      this.types = resp.data.results;
    });
  },
};
</script>

<template>
  <div class="ms_jumbotron h-100 d-flex align-items-end justify-content-center">
    <div class="container h-100">
      <!-- imaggine di sfondo -->
      <div class="ms_background-overlay"></div>

      <!-- bottoni per scegliere le types -->
      <div class="row p-2 g-2 g-sm-2 text-md-center text-sm-start h-100">
        <div
          class="col-sm-2 col-md-3 col-lg-3 mb-lg-2"
          v-for="(type, index) in types"
          :key="index">
          <btn class="btn ms_btn" href="">{{ type.name }}</btn>
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
    background-image: url("../assets/img/jumbotron.jpeg");
    background-position: center;
    background-size: cover;
    filter: brightness(0.5);
    z-index: -1;
  }

  .ms_btn {
    background-color: $bg-btn;
    color: $main-text;
    width: 60%;

    &:hover {
      background-color: lighten($color: $bg-btn, $amount: 20%);
    }
  }
}

@media screen and (max-width: 500px) {
  /* Regole CSS specifiche per schermi con larghezza massima di 500px (dispositivi mobili) */
  .ms_btn {
    width: 30% !important;
  }

  .ms_jumbotron {
    align-items: center !important;
  }
}
</style>
