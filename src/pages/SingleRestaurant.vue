<script>
import AppSingleRestaurantHeader from "../components/AppSingleRestaurantHeader.vue";
import AppSingleRestaurantDishes from "../components/AppSingleRestaurantDishes.vue";
import AppCart from "../components/AppCart.vue";
import axios from "axios";
import { store } from "../data/store";

export default {
  components: { AppSingleRestaurantHeader, AppSingleRestaurantDishes, AppCart },
  data() {
    return {
      restaurant: {},
    };
  },
  name: "SingleRestaurant",
  methods: {
    isInViewport(element) {
      let footer = element.getBoundingClientRect();

      let windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      let windowWidth =
        window.innerWidth || document.documentElement.clientWidth;

      // Controlla se almeno 1px dell'elemento è visibile nel viewport
      let vertInView = footer.bottom >= 0 && footer.top <= windowHeight;
      let horInView = footer.right >= 0 && footer.left <= windowWidth;

      return vertInView && horInView;
    },
  },
  created() {
    const restaurantToShow = localStorage.getItem("restaurant_id");
    axios
      .get(
        `http://127.0.0.1:8000/api/restaurants?restaurant_id=${restaurantToShow}`
      )
      .then((resp) => {
        this.restaurant = resp.data.results;
      });

    document.addEventListener("scroll", () => {
      let footer = document.getElementById("ms_footer");
      let cart = document.getElementById("ms_cart");
      if (this.isInViewport(footer)) {
        console.log("ciao");
        cart.classList.toggle("position-fixed");
        cart.classList.add("position-absolute");
      } else {
        cart.classList.remove("position-absolute");
      }
    });
  },
};
</script>

<template>
  <div
    :style="`background-image: url(${this.restaurant.restaurant_image})`"
    class="bg-image w-100"></div>
  <div class="row">
    <div class="w-75">
      <AppSingleRestaurantHeader :singleRestaurant="restaurant" />
      <AppSingleRestaurantDishes />
    </div>
    <div class="w-25 d-flex justify-content-center mx-auto p-0 ps-2">
      <div class="w-25 pb-4 position-fixed" id="ms_cart">
        <AppCart />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg-image {
  height: 300px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.row {
  width: 100vw;
  position: relative;
}

.absolute {
  position: absolute;
  bottom: 0;
}
</style>
