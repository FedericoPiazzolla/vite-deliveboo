<script>
import axios from "axios";
export default {
  data() {
    return {
      restaurants: [],
    };
  },
  props: {
    singleRestaurant: Object,
  },
};
</script>

<template>
  <div class="ms_col col-md-4 col-sm-12">
    <router-link :to="{ name: 'singleRestaurant' }">
      <div
        class="cards"
        :style="`background-image: url(${singleRestaurant.restaurant_image})`">
        <h5>
          {{ singleRestaurant.restaurant_name }}
        </h5>
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

    h4 {
      text-decoration: none;
      color: $bg-btn;
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
