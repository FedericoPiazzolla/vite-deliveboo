<script>
import AppBestSellersCard from "./AppBestSellersCard.vue";

export default {
  data() {
    return {
      currentIndex: 0,
      bestSellers: [
        {
          name: "Pasta alla norma",
          image:
            "https://www.cucchiaio.it/content/cucchiaio/it/ricette/2009/12/ricetta-pasta-norma/_jcr_content/header-par/image_single.img.jpg/1562754500727.jpg",
          description: "Pasta con sugo di melanzane e ricotta salata",
        },
        {
          name: "Rigatoni all'amatriciana",
          image:
            "https://mutti-parma.com/app/uploads/sites/7/2019/09/thumb-1223-recipe-cover-desktop-800x450.jpeg",
          description: "Rigatoni con sugo, guanciale e pecorino romano",
        },
        {
          name: "Polpette di melanzane",
          image:
            "https://cdn.cook.stbm.it/thumbnails/ricette/42/42477/hd750x421.jpg",
          description: "Pasta con sugo di melanzane e ricotta salata",
        },
        {
          name: "Ricotta di bufala alle Noci",
          image:
            "https://www.caseificiolastellabianca.com/wp-content/uploads/2020/05/ricotta_cuori_noci.jpg",
          description: "Con cipollina carammellata e miele",
        },
        {
          name: "Sedano rapa glassato",
          image:
            "https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2023/03/12-arrosto-di-sedano-rapa-servire__MG_1218.jpg",
          description:
            "Sedano rapa glassato e cotto a bassa temperatura con insalatina orientale",
        },
      ],
    };
  },

  components: {
    AppBestSellersCard,
  },

  methods: {
    showNext() {
      if (this.currentIndex < this.bestSellers.length - 1) {
        this.currentIndex = this.currentIndex + 1;
      } else {
        this.currentIndex = 0;
      }
    },
    showPrev() {
      if (this.currentIndex == 0) {
        this.currentIndex = this.bestSellers.length - 1;
      } else {
        this.currentIndex = this.currentIndex - 1;
      }
    },
    changeActive(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<template>
  <section class="" id="BestSellers">
    <div
      class="ms_container best-sellers-top d-flex justify-content-between align-items-center px-4">
      <div class="carousel-arrow">
        <button @click="showPrev" class="btn-carousel rounded-5">&larr;</button>
        <button @click="showNext" class="btn-carousel ms-4 rounded-5">
          &rarr;
        </button>
      </div>
    </div>

    <div
      class="carousel d-flex py-4 justify-content-center align-items-stretch">
      <AppBestSellersCard
        :indexToShow="
          this.currentIndex == 0
            ? this.bestSellers.length - 2
            : this.currentIndex - 1 == 0
            ? this.bestSellers.length - 1
            : this.currentIndex - 2
        "
        :carousel="this.bestSellers" />
      <AppBestSellersCard
        :indexToShow="
          this.currentIndex == 0
            ? this.bestSellers.length - 1
            : this.currentIndex - 1
        "
        :carousel="this.bestSellers" />
      <!-- CARD CENTRALE -->

      <AppBestSellersCard
        :indexToShow="this.currentIndex"
        :carousel="this.bestSellers" />

      <!-- //CARD CENTRALE -->

      <AppBestSellersCard
        :indexToShow="
          this.currentIndex == this.bestSellers.length - 1
            ? 0
            : this.currentIndex + 1
        "
        :carousel="this.bestSellers" />
      <AppBestSellersCard
        :indexToShow="
          this.currentIndex == this.bestSellers.length - 1
            ? 1
            : this.currentIndex + 1 == this.bestSellers.length - 1
            ? 0
            : this.currentIndex + 2
        "
        :carousel="this.bestSellers" />
    </div>
    <div class="text-center">
      <span
        v-for="(item, dotIndex) in this.bestSellers.length"
        class="dot"
        :class="this.currentIndex == dotIndex ? `activeDot` : ``"
        @click="changeActive(dotIndex)"
        >.</span
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;
.carousel {
  overflow: hidden;
}
.btn-carousel {
  background-color: white;
  border-color: $primary;
  color: $primary;
}
.dot {
  font-size: 70px;
  color: rgba(0, 0, 0, 0.178);
  cursor: pointer;
}
.activeDot {
  color: $primary;
}
</style>
