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
    };
  },
  props: { singleRestaurant: Object },
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
  methods: {},
};
</script>

<template>
  <div class="restaurant-header ms-4">
    <div class="main-info p-4 d-flex justify-content-center align-items-center">
      <div class="restaurant-logo">
        <img :src="singleRestaurant.restaurant_logo" alt="" />
      </div>
      <div class="name ms-3">
        <h3 class="m-0">
          {{ this.singleRestaurant.restaurant_name }}
        </h3>
        <h6>{{ singleRestaurant.restaurant_address }}</h6>
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
@use "../scss/partials/variables" as *;

.restaurant-header {
  .bg-image {
    height: 300px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .main-info {
    .restaurant-logo {
      img {
        width: 150px;
        aspect-ratio: 1;
        background-color: #17373641;
        border-radius: 50%;
        padding: 1rem;
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
