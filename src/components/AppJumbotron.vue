<script>
import axios from "axios";
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
      types: [],
    };
  },
  created() {
    axios.get(`http://127.0.0.1:8000/api/types`).then((resp) => {
      this.types = resp.data.results;
    });
  },
  methods: {
    getTypeId(id) {
      // Ricavo gli id delle categorie selezionate dall'utente
      let typesResearch = this.store.typesResearch;

      if (!typesResearch.includes(id)) {
        typesResearch.push(id);
      } else {
        typesResearch.splice(typesResearch.indexOf(id), 1);
      }
      // chiamata Axios che restituirà i ristoranti che hanno le tipologie richieste dall'utente
      let typeParams = this.store.typesResearch.join(",");
      axios
        .get(`http://127.0.0.1:8000/api/restaurants`, {
          params: {
            type_id: typeParams,
          },
        })
        .then((resp) => {
          if (this.store.typesResearch.length == 0) {
            axios.get(`http://127.0.0.1:8000/api/restaurants`).then((resp) => {
              this.store.restaurantLoading = false;
              this.store.restaurantsToShow = resp.data.results;
              document.getElementById("homeTitle").textContent =
                "I ristoranti intorno a te!";
            });
          } else {
            this.store.restaurantsToShow = [];
            if (resp.data.results) {
              this.store.restaurantsToShow = resp.data.results;
              document.getElementById("homeTitle").textContent =
                "Risultati ricerca";
            }
          }
        });
    },
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
          <btn
            class="btn ms_btn"
            href=""
            :id="type.id"
            @click="getTypeId(type.id)"
            >{{ type.name }}</btn
          >
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
