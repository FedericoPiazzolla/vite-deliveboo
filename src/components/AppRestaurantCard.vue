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
    getRestaurantId(restaurant_id) {
      localStorage.setItem("restaurant_id", JSON.stringify(restaurant_id));
    },
  },
};
</script>

<template>
  <div class="ms_col col-md-6 col-sm-12">
    <router-link
      class="text-decoration-none"
      :to="{ name: 'singleRestaurant' }">
      <div class="ms_cards" @click="getRestaurantId(singleRestaurant.id)">
        <div class="ms_title">
          <h5 class="p-2 text-center m-0">
            {{ singleRestaurant.restaurant_name }}
          </h5>
        </div>

        <div class="ms_img-container">
          <img
            class="ms_card-img"
            :src="singleRestaurant.restaurant_image"
            alt="" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.ms_col {
  .ms_cards {
    width: 100%;
    height: 200px;

    .ms_img-container {
      width: 100%;
      height: 60%;
      overflow: hidden;
      border-bottom-left-radius: 2rem;
      border-bottom-right-radius: 2rem;
    }

    .ms_card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .ms_title {
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
</style>
