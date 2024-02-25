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
      class="portfolio-title d-flex-column justify-content-between align-items-center py-4 px-3">
      <h5 class="mb-4">
        <b>{{ carousel[indexToShow].name }}</b>
      </h5>
      <p class="m-0 d-none d-lg-block">
        {{ carousel[indexToShow].description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;
.ms_card {
  min-width: calc(100vw / 3.75);
  img {
    width: 100%;
    aspect-ratio: 1;
    max-height: 50%;
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
}
</style>
