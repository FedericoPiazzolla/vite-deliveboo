<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<template>
  <footer>
    <div class="container pt-5">

      <h3 class="ms_logo-text text-center">Deliveboo</h3>

      <div class="row text-center pt-5">

        <!-- Uniamo le forze col -->
        <div class="col-6 col-md-4 col-lg-3 mb-5">
          <h5 class="mb-3">Uniamo le forze</h5>
          <ul class="d-flex flex-column gap-3 list-unstyled">
            <li><a href="#">Lavora con noi</a></li>
            <li><a href="#">Deliveboo per i Partner</a></li>
            <li><a href="#">Corrieri</a></li>
            <li><a href="#">Deliveboo Business</a></li>
          </ul>
        </div>
        <!-- /uniamo le forze col -->

        <!-- Link col -->
        <div class="col-6 col-md-4 col-lg-3 mb-5">
          <h5 class="mb-3">Link di Interesse</h5>
          <ul class="d-flex flex-column gap-3 list-unstyled">
            <li><a href="#">Chi siamo</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Deliveboo Prime</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contattaci</a></li>
            <li><a href="#">Sicurezza</a></li>
          </ul>
        </div>
        <!-- /link col -->
        
        <!-- Models col -->
        <div class="col-6 col-md-4 col-lg-3 mb-5">
          <h5 class="mb-3">Modulistica</h5>
          <ul class="d-flex flex-column gap-3 list-unstyled">
            <li><a href="#">Termini e condizioni</a></li>
            <li><a href="#">Politica sulla privacy</a></li>
            <li><a href="#">Politica sui cookie</a></li>
            <li><a href="#">Conformità</a></li>
          </ul>
        </div>
        <!-- /Models col -->

        <!-- Follow us col -->
        <div class="col-6 col-md-4 col-lg-3 offset-md-4 offset-lg-0 mb-5">
          <h5 class="mb-3 text-md-center">Seguici</h5>
          <ul class="d-flex gap-3 fs-4 justify-content-center list-unstyled">
            <li><a href="#"><i class="fa-brands fa-square-facebook"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
          </ul>
        </div>
        <!-- /Follow Us Col -->

      </div>

      <!-- References -->
      <p class="ms_our-group text-center m-0 py-4 fs-5">By Group 7 &hearts;</p>
      <!-- /References -->

    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

footer{
  background-color: $primary;
  color: $bg-btn;

  .ms_logo-text{
    font-family: "Lobster", sans-serif;
    color: $main-text;
    font-size: 3rem;
  }

  h5 {
    color: $main-text;
    font-weight: bolder;
    font-size: 1.5rem;
  }

  ul {

    li {
      a {
        color: $bg-color;
        text-decoration: none;
        &:hover {
          color: $bg-btn;
        }
      }
    }
  }
  

  .ms_our-group {
    color: $bg-color;
    font-size: 14px;
  }
}

@media screen and (max-width: 576px) {
footer{

  .ms_logo-text{
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
}

}
</style>