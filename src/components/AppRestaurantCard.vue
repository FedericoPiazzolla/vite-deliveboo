<script>
import axios from "axios";
import { store } from "../data/store";
export default {
  data() {
    return {
      restaurants: [],
      store,
    };
  },
  props: {
    singleRestaurant: Object,
  },
  methods: {
    getRestaurantId(id) {
      this.store.restaurant_id = id;
      console.log(this.store.restaurant_id);
    },
  },
};
</script>

<template>
  <div class="ms_col col-md-4 col-sm-12">
    <router-link :to="{ name: 'singleRestaurant' }">
      <div
        class="cards"
        @click="getRestaurantId(singleRestaurant.id)"
        :style="`background-image: url(${singleRestaurant.restaurant_image})`">
        <div class="title">
          <h5 class="p-2 text-center">
            {{ singleRestaurant.restaurant_name }}
          </h5>
        </div>
      </div>
    </router-link>
  </div>
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
    height: 200px;
    border-radius: 2rem;

    .title {
      background-color: $bg-btn;
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
      h5 {
        text-decoration: none;
        color: $main-text;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  /* Regole CSS specifiche per schermi con larghezza massima di 500px (dispositivi mobili) */

  .ms_row {
    flex-direction: column;

    .ms_col:nth-child(odd) {
      display: flex;
      justify-content: end;
    }

    .cards {
      width: 80%;
      height: 150px;
    }
  }
}
</style>
