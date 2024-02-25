<script>
import AppSingleRestaurantHeader from "../components/AppSingleRestaurantHeader.vue";
import AppSingleRestaurantDishes from "../components/AppSingleRestaurantDishes.vue";

export default {
  components: { AppSingleRestaurantHeader, AppSingleRestaurantDishes },
  data() {
    return {};
  },
  name: "SingleRestaurant",
};
</script>

<template>
  <div>
    <AppSingleRestaurantHeader />
    <AppSingleRestaurantDishes />
  </div>
</template>

<style scoped lang="scss"></style>
