import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import SingleRestaurant from "./pages/SingleRestaurant.vue";

const router = createRouter({
  history: createWebHistory(),
  // linkExactActiveClass: 'active',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/restaurant",
      name: "singleRestaurant",
      component: SingleRestaurant,
    },
  ],
});

export { router };
