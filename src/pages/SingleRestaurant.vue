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
    // isFooterInViewport(footer) {
    //   let footerSizes = footer.getBoundingClientRect();
    //   let windowHeight =
    //     window.innerHeight || document.documentElement.clientHeight;
    //   let windowWidth =
    //     window.innerWidth || document.documentElement.clientWidth;
    //   // Controlla se almeno 1px dell'elemento è visibile nel viewport
    //   let vertInView =
    //     footerSizes.bottom >= 0 && footerSizes.top <= windowHeight;
    //   let horInView = footerSizes.right >= 0 && footerSizes.left <= windowWidth;
    //   return vertInView && horInView;
    // },
    // isCartInViewport(cart) {
    //   let cartSizes = cart.getBoundingClientRect();
    //   let windowHeight =
    //     window.innerHeight || document.documentElement.clientHeight;
    //   let windowWidth =
    //     window.innerWidth || document.documentElement.clientWidth;
    //   //  Controlla se il bottom del carrello è visibile in pagina
    //   let cartBottomInView =
    //     cartSizes.bottom <= windowHeight && cartSizes.bottom >= 0;
    //   return cartBottomInView;
    // },
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

    // document.addEventListener("scroll", () => {
    //   // posso aggiungere il fixed con top uguale alla misura del view meno l'header
    //   //implementare la condizione: SE il carello si vede tutto allora procedere
    //   let footer = document.getElementById("ms_footer");
    //   let cart = document.getElementById("ms_cart");
    //   if (this.isCartInViewport(cart)) {
    //     console.log("si vede");
    //     if (this.isFooterInViewport(footer)) {
    //       console.log("ciao");
    //       cart.classList.remove("position-absolute");
    //       cart.classList.add("position-fixed");
    //       cart.classList.remove("w-100");
    //     }
    //   } else {
    //     cart.classList.add("w-100");
    //     cart.classList.remove("position-fixed");
    //     cart.classList.add("position-absolute");
    //   }
    // });
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
      class="d-none d-md-inline cart_container w-25 d-flex justify-content-center mx-auto p-0">
      <div class="w-100" id="ms_cart">
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

// .cart_container {
//   position: relative;
//   overflow-y: scroll;
//   .absolute {
//     position: absolute;
//     bottom: 0;
//   }
// }
</style>
