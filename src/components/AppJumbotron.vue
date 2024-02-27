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
      let typeButton = document.getElementById(id);

      if (!typesResearch.includes(id)) {
        typesResearch.push(id);
        typeButton.classList.add("selected");
      } else {
        typesResearch.splice(typesResearch.indexOf(id), 1);
        typeButton.classList.remove("selected");
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
    openMenu() {
      let menu = document.querySelector(".tipology");
      let title = document.getElementById("titleMenu");
      menu.classList.toggle("active");
      title.classList.toggle("d-none");
    },

    getImageUrl(imgName) {
      return new URL(`../assets/img/types-icon/${imgName}`, import.meta.url)
        .href;
    },

    showTypeText(indexText) {
      let typeText = document.getElementById(`typeText-${indexText}`);
      typeText.classList.add("d-block");
    },

    hideTypeText(indexText) {
      let typeText = document.getElementById(`typeText-${indexText}`);
      typeText.classList.remove("d-block");
    },
  },
};
</script>

<template>
  <div class="ms_jumbotron h-100 d-flex align-items-end justify-content-center">
    <div class="container my-auto">
      <!-- imaggine di sfondo -->
      <div class="ms_background-overlay"></div>

      <!-- MENÙ PROVA -->
      <ul class="tipology">
        <div class="menuToggle d-flex flex-column" @click="openMenu">
          <i class="fa-solid fa-plus"></i>
          <p id="titleMenu" class="fs-6">Tipologie</p>
        </div>

        <li
          v-for="(type, index) in types"
          @click="getTypeId(type.id)"
          :key="type.id"
          :style="`--i:${type.id}`">
          <a
            class="text-decoration-none d-flex justify-content-center"
            href="#"
            @mouseleave="hideTypeText(type.id)">
            <img
              :id="type.id"
              :style="`transform: rotate(calc(-360deg / 12 * ${type.id}))`"
              @mouseover="showTypeText(type.id)"
              :src="getImageUrl(type.icon)"
              alt="" />
            <p
              :id="`typeText-${type.id}`"
              class="fs-6 ms-3 mb-0 text-center"
              :style="`transform: rotate(calc(-360deg / 12 * ${type.id}))`">
              {{ type.name }}
            </p>
          </a>
        </li>
      </ul>
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
    background-color: $main-text;
    color: $bg-btn;
    width: 60%;

    &:hover {
      background-color: lighten($color: $bg-btn, $amount: 20%);
      color: $main-text;
    }
  }

  .selected {
    // background-color: lighten($color: $bg-btn, $amount: 20%);
    border: 3px solid $bg-btn;

    color: $main-text;
    p {
      color: $bg-btn;
      display: block;
    }
  }
}

// MENÙ PROVA
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  .tipology {
    position: relative;
    width: 90px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      position: absolute;
      left: 0;
      bottom: 100px;
      list-style: none;
      transform-origin: 60px;
      transition: 0.5s;
      transition-delay: calc(0.1s * var(--I));

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
        border-radius: 50%;
        color: white;
        transform: rotate(0deg) translateX(150px);

        img {
          display: none;
          mix-blend-mode: multiply;
          width: 55px;
          aspect-ratio: 1;
        }

        p {
          display: none;
        }
      }
    }

    .menuToggle {
      position: absolute;
      bottom: 100px;
      width: 60px;
      height: 60px;
      color: $bg-btn;
      display: flex;
      justify-content: center;
      align-items: center;
      // z-index: 1000;
      border-radius: 50%;
      cursor: pointer;
      font-size: 2rem;
      transition: transform 1.5s;
    }
  }
  .tipology.active li {
    transform: rotate(calc(360deg / 12 * var(--i)));
  }

  .tipology.active img {
    display: block;
  }
  .tipology.active .menuToggle {
    transform: rotate(315deg);
  }
}

@media screen and (max-width: 500px) {
  /* Regole CSS specifiche per schermi con larghezza massima di 500px (dispositivi mobili) */
  .ms_jumbotron {
    align-items: center !important;
  }
}
</style>
