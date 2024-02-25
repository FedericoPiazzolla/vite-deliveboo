<script>
import SingleRestaurantHeader from "../components/SingleRestaurantHeader.vue";

export default {
  components: { SingleRestaurantHeader },
  data() {
    return {};
  },
  name: "SingleRestaurant",
};
</script>

<template>
  <SingleRestaurantHeader />
</template>

<style scoped lang="scss">
.restaurant-header {
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
