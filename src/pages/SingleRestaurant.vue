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
    isBestSellerInViewport(element) {
      let bestSeller = element.getBoundingClientRect();

      let windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      let windowWidth =
        window.innerWidth || document.documentElement.clientWidth;
      let headerHeight = 120;
      // Controlla se il div bestSellers è presente nel viewport
      const vertInView =
        bestSeller.top < windowHeight - headerHeight &&
        bestSeller.top + bestSeller.height > headerHeight;
      let horInView = bestSeller.right >= 0 && bestSeller.left <= windowWidth;
      return vertInView && horInView;
    },

    footerVisibleHeight(element) {
      let footer = element.getBoundingClientRect();
      let viewPortHeight = window.innerHeight;
      if (footer.bottom < 0 || footer.top > viewPortHeight) {
        return 0;
      }
      let visibleFooterHeight =
        Math.min(footer.bottom, viewPortHeight) - Math.max(footer.top, 0);

      return Math.max(0, visibleFooterHeight);
    },

    checkVisibility() {
      let bestSeller = document.getElementById("best_sellers");
      let footer = document.getElementById("ms_footer");
      let cart = document.getElementById("ms_cart");
      let cartHeight = cart.offsetHeight;
      let headerHeight = document.getElementById("ms_header").offsetHeight;
      let viewHeight = window.innerHeight;
      let footerVisibleHeight = this.footerVisibleHeight(footer);
      let elementTotalHeight =
        cartHeight + headerHeight + footerVisibleHeight + 20;

      let cartContainer = document.getElementById("cart_col");

      if (!this.isBestSellerInViewport(bestSeller)) {
        cart.classList.add("fixed-top-cart");
        // console.log("non c'è");
      } else {
        cart.classList.remove("fixed-top-cart");
        // console.log("è presente");
      }

      if (elementTotalHeight >= viewHeight) {
        console.log("ciao");
        cart.classList.remove("fixed-top-cart");
        cart.classList.add("fixed-bottom-cart");
        cartContainer.classList.add("position-relative");
      } else {
        cart.classList.remove("fixed-bottom-cart");
        cartContainer.classList.remove("position-relative");
      }
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

    window.addEventListener("scroll", this.checkVisibility);
  },
};
</script>

<template>
  <div
    :style="`background-image: url(${this.restaurant.restaurant_image})`"
    class="bg-image w-100"></div>
  <div class="row">
    <div class="col-12">
      <AppSingleRestaurantHeader :singleRestaurant="restaurant" />
    </div>

    <AppSingleRestaurantDishes />

    <div
      class="col-3 d-none d-md-inline cart_container w-25 d-flex justify-content-center mx-auto p-0"
      id="cart_col">
      <div class="cart" id="ms_cart">
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
}

.fixed-top-cart {
  position: fixed;
  width: 25%;
  top: 120px;
  right: 10;
}

// .cart {
//   max-height: 500px;
//   overflow-y: scroll;
// }
.fixed-bottom-cart {
  position: absolute;
  width: 100%;
  bottom: 20px;
  right: 10;
}
</style>
