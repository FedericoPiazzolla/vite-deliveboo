<script>
import { store } from "../data/store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      orderId: null,
      order: null,
    };
  },
  methods: {
    getOrderId() {
      return JSON.parse(localStorage.getItem("orderId"));
    },
  },
  created() {
    this.orderId = this.getOrderId();
    console.log(this.orderId);

    axios
      .get(`${this.store.apiUrl}api/show-order`, {
        params: {
          order_id: this.orderId,
        },
      })
      .then((resp) => {
        console.log(resp.data);
        this.order = resp.data;
      });
  },
};
</script>

<template>
  <div class="background-style">
    <div
      id="order-container"
      class="d-flex h-100 justify-content-center align-items-center">
      <div class="post-card w-100 w-sm-75 text-center">
        <div v-if="orderId">
          <h2 class="mb-4 text-capitalize text-center ms_my-color">
            Ordine effettuato
            <i class="text-success fa-regular fa-circle-check"></i>
          </h2>

          <div class="mb-4 ms_my-color">
            <p class="mb-2">
              Grazie, <b>{{ order.order_info.interested_user_name }}</b>
              <span class="text-capitalize fw-bold"></span>
              l'ordine è andato a buon fine!
            </p>
            <p class="mb-2">
              A breve ti verrà spedito all'indirizzo da te fornito.
            </p>
          </div>
          <div class="user_details">
            <h5><b> Riepilogo dati utente: </b></h5>
            <p>
              Nome:
              <b>
                {{ order.order_info.interested_user_name }}
                {{ order.order_info.interested_user_surname }}
              </b>
            </p>
            <p>
              Indirizzo: <b>{{ order.order_info.interested_user_address }}</b>
            </p>
            <p class="mb-0">
              Numero di telefono:
              <b>{{ order.order_info.interested_user_phone }}</b>
            </p>
          </div>
          <p class="d-inline-block ms_order-success m-0 mb-3">
            Qui sotto puoi trovare il riepilogo dell'ordine:
          </p>

          <ol class="py-2 mb-4 list-group-numbered ms_list-class">
            <li
              v-for="product in order.dishes"
              :key="product.id"
              class="list-group-item d-flex flex-row justify-content-between align-items-start p-2">
              <div class="ms-2 flex-grow-1">
                <p
                  class="fw-semibold mb-0 text-start text-sm-center d-flex justify-content-between">
                  <span>{{ product.name }}</span>
                  <span class="ms-3 pe-3 d-inline text-end d-sm-inline ms_price"
                    >&euro;{{ product.price }}</span
                  >
                </p>
                {{ product.ingredients }}
              </div>
              <div class="d-inline-block">
                Qtà:
                <span class="px-1 fw-bold">{{
                  product.pivot.dish_quantity
                }}</span>
              </div>
            </li>
          </ol>

          <p class="text-end pe-2">
            Totale:
            <span class="ms_total">&euro;{{ order.total.toFixed(2) }}</span>
          </p>
        </div>

        <div v-else class="p-5">
          <h2 class="mb-4 text-capitalize text-center">
            Ordine annullato
            <i class="text-danger fa-regular fa-circle-check"></i>
          </h2>
          <p>C'è stato un problema nella conferma del pagamento.</p>
          <p>
            Aprendo il carrello può ricominciare la procedura per l'acquisto dei
            prodotti selezionati.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.background-style {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("src/assets/img/background2.png"), no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
}

#order-container {
  padding: 4rem;
  height: 100vh;
  filter: drop-shadow(16px 16px 10px rgb(28, 28, 28));
  //opacity: 0.9;
  .post-card {
    border-radius: 25px;
    padding: 2rem;
    background-color: $bg-btn;
  }

  .user_details {
    border: 1px solid $main-text;
    margin: 1rem auto;
    padding: 0.8rem;
    border-radius: 1rem;
    color: $main-text;
    width: 75%;
  }
  @media screen and (min-width: 850px) {
    .user_details {
      width: 50%;
    }
  }

  @media screen and (min-width: 1300px) {
    .user_details {
      width: 25%;
    }
  }

  .ms_list-class {
    background-color: $main-text;
    color: $bg-color;
    border-radius: 1rem;
  }

  .ms_order-success {
    background-color: $main-text;
    color: $bg-btn;
    padding: 0.4rem 0.8rem;
    border-radius: 2rem;
  }

  .ms_total {
    font-weight: bolder;
    color: $main-text;
    font-size: 1.4rem;
  }

  .ms_my-color {
    color: $main-text;
  }
}

@media screen and (max-width: 500px) {
  #order-container {
    padding: 1rem;
  }
  .post-card {
    width: 100%;
    padding: 5px;
    ol {
      padding: 0px;
    }
  }
}
</style>
