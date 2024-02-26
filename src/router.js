import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import SingleRestaurant from "./pages/SingleRestaurant.vue";
import Cart from "./pages/Cart.vue";

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
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
  ],
});

export { router };
