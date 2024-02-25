<script>
export default {
  data() {},
  props: {
    carousel: String,
    indexToShow: Number,
  },
};
</script>

<template>
  <div class="ms_card mx-3 shadow rounded-4">
    <img :src="`${carousel[indexToShow].image}`" alt="" class="rounded-4" />

    <div
      class="bestSellers-title d-none d-sm-flex flex-sm-column pt-sm-4 px-sm-3">
      <h5 class="fw-sm-bold text-center">
        {{ carousel[indexToShow].name }}
      </h5>
      <p class="fs-6 mt-4 m-0 d-none d-lg-block">
        {{ carousel[indexToShow].description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;
.ms_card {
  min-width: calc(100vw / 4.75);
  background-color: $bg-btn;
  color: $main-text;
  height: fit-content;

  @media (min-width: 576px) {
    height: auto;
  }

  img {
    width: 100%;
    aspect-ratio: 1;
    max-height: 40%;
  }

  &:hover {
    background: $bg-color;

    b {
      color: $primary;
    }

    p {
      color: $bg-btn;
    }
  }
  .bestSellers-title {
    overflow: scroll;
    @media (min-width: 576px) {
      overflow: unset;
    }
  }
}
</style>
