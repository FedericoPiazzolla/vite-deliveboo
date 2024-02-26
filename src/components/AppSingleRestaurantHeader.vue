<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      temporaryRatingNumber: "",
      ratingNumber: "",
      temporaryTimingNumber: "",
      timingNumber: "",
      costPossibility: [0, 1.99, 2.99, 3.99],
      randomIndex: "",
      costNumber: "",
      restaurant: {},
    };
  },
  props: {},
  mounted() {
    // Generare una valutazione da 1 a 5
    this.temporaryRatingNumber = Math.random() * (5 - 1) + 1;
    this.ratingNumber =
      Math.floor(this.temporaryRatingNumber) +
      (this.temporaryRatingNumber % 1 >= 0.5 ? 0.5 : 0.0);

    // Generare numero random tra 10 e 40
    this.temporaryTimingNumber = Math.random() * (40 - 10) + 10;
    this.timingNumber = Math.round(this.temporaryTimingNumber);

    // Scegliere un costo random tra quelli in Array
    this.randomIndex = Math.floor(Math.random() * this.costPossibility.length);
    this.costNumber = this.costPossibility[this.randomIndex];
  },
  methods: {
    // Salvo l'id ristorante nel local store
    saveRestaurantId(restaurant_id) {
      localStorage.setItem("restaurant_id", JSON.stringify(restaurant_id));
    },
    // Carico il restaurant_id dal local store
    loadRestaurantId() {
      return JSON.parse(localStorage.getItem("restaurant_id")) || [];
    },
  },
  created() {
    const restaurantToShow = this.loadRestaurantId();
    console.log(restaurantToShow);
    axios
      .get(
        `http://127.0.0.1:8000/api/restaurants?restaurant_id=${restaurantToShow}`
      )
      .then((resp) => {
        console.log(resp);
        this.restaurant = resp.data.results;
      });
  },
};
</script>

<template>
  <div class="restaurant-header">
    <div class="bg-image w-100"></div>
    <div
      class="main-info py-4 d-flex justify-content-center align-items-center">
      <div class="restaurant-logo">
        <img src="../assets/img/deliveboo_logo.png" alt="" />
      </div>
      <div class="name ms-3">
        <h3 class="text-center m-0">{{ this.restaurant.restaurant_name }}</h3>
        <h6>{{ this.restaurant.restaurant_address }}</h6>
      </div>
    </div>
    <div class="row-cols-6 info d-flex justify-content-center text-center mt-4">
      <div class="col rating">
        <i class="fa-solid fa-star"></i>
        <span>{{ ratingNumber }}</span>
      </div>
      <div class="col timing">
        <i class="fa-solid fa-clock"></i>
        <span>{{ timingNumber }} m</span>
      </div>
      <div class="col cost">
        <i class="fa-solid fa-sack-dollar"></i>
        <span>{{ costNumber }}€</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.restaurant-header {
  .bg-image {
    background-image: url("https://www.catellanismith.com/_next/image/?url=https%3A%2F%2Fcatellani.kinsta.cloud%2Fapp%2Fuploads%2F2019%2F05%2Fimg-amb-solo-crudo-3.jpg&w=3840&q=75");
    height: 300px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .main-info {
    .restaurant-logo {
      img {
        width: 150px;
      }
    }
  }

  .info {
    div {
      display: flex;
      flex-direction: column;

      i {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
