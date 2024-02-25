<script>
export default {
  components: {},
  data() {
    return {
      dishesList: [
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
};
</script>

<template>
  <section>
    <div class="px-4 title d-flex align-items-center">
      <i class="fa-solid fa-utensils"></i>
      <span class="ms-2 fs-5 fw-bold">Tutti i piatti</span>
    </div>
    <div class="d-flex p-4 justify-content-center align-items-stretch">
      <div class="row d-flex flex-column">
        <div
          class="col d-flex align-items-center ps-0 mb-3"
          v-for="(dish, index) in dishesList"
          :key="index">
          <img class="me-3" :src="`${dish.image}`" alt="" />
          <h5 class="m-0 me-3">{{ dish.name }}</h5>
          <p class="d-none d-sm-block fs-6 m-0">{{ dish.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../scss/partials/variables" as *;

.title {
  color: $primary;
}
.col {
  color: $main-text;
  background-color: $bg-btn;
  border-radius: 2rem;
  img {
    width: 20%;
    aspect-ratio: 1;
    border-radius: 2rem;

    @media (min-width: 576px) {
      width: 20%;
    }
  }
  h5 {
    width: 40%;
    @media (min-width: 576px) {
      width: 30%;
    }
  }
  p {
    width: 40%;
  }
}
</style>
