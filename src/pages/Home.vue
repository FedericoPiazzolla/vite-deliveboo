<script>
import AppJumbotron from "../components/AppJumbotron.vue";
import AppRestaurants from "../components/AppRestaurants.vue";
import AppWorkWithus from "../components/AppWorkWithus.vue";
export default {
  components: { AppJumbotron, AppRestaurants, AppWorkWithus },
  data() {},
  name: "Home",
  mounted() {
    //   document.addEventListener("DOMContentLoaded", function () {
    //     setTimeout(function () {
    //       document.getElementById("splash-screen").style.display = "none";
    //     }, 5000); // Modifica questo valore per controllare la durata dello splash screen
    //   });
  },
};
</script>

<template>
  <div class="d-flex flex-column" id="animation">
    <span>Deliveboo</span>
    <img src="../assets/img/hero-rider.png" />
  </div>
  <AppJumbotron />
  <AppRestaurants />
  <AppWorkWithus />
</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;

#animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $main-text;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #000000;
  z-index: 1000;
  animation: fadeOut 3s ease-out forwards;
  animation-delay: 4s;

  span {
    font-size: 5rem;
    background-image: url(../assets/img/text-bg.jpeg);
    background-size: contain;

    background-clip: text;
    color: transparent;
  }

  img {
    animation: riderMovement 3s ease forwards;

    animation-timing-function: linear;
  }
  @keyframes riderMovement {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
}
</style>
