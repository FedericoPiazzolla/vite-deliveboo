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

  methods: {},
};
</script>

<template>
  <section class="p-4">
    <div class="title d-flex align-items-center">
      <i class="fa-solid fa-star"></i>
      <span class="ms-2 fs-5 fw-bold">Best Sellers</span>
    </div>
    <div class="best-sellers row-cols-4 d-flex py-4 align-items-stretch">
      <AppBestSellersCard
        v-for="(dish, index) in bestSellers"
        :key="index"
        :singleDish="dish" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.title {
  color: $primary;
}

.best-sellers {
  overflow-x: scroll;
}
</style>
