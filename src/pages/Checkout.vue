<script>
import axios from "axios";
import { store, loadCart } from "../data/store";

export default {
  data() {
    return {
      importedCart: null,
      store,
      token: "",
      instance: null,
      paymentNonce: null,
      paymentLoaded: false,

      dataToSend: {
        interested_user_name: "",
        interested_user_surname: "",
        interested_user_address: "",
        interested_user_email: "",
        interested_user_phone: "",
        total: null,
        payment_method_nonce: null,
        // Informazioni del/dei piatto/i con la/le quantità
        dishes_id: null,
        dishes_quantities: null,
      },
    };
  },
  methods: {
    brainTreeInit() {
      let dataToSend = this.dataToSend;
      const button = document.querySelector("#submit-button");

      braintree.dropin.create(
        {
          authorization: this.token,
          container: "#dropin-container",
        },
        function (createErr, instance) {
          button.addEventListener("click", function () {
            instance.requestPaymentMethod(
              (requestPaymentMethodErr, payload) => {
                this.paymentNonce = payload.nonce;

                dataToSend.payment_method_nonce = this.paymentNonce;

                console.log("PaymentNonce", this.paymentNonce);

                console.log("Oggetto dei dati da passare", dataToSend);

                // Una volta ottenuto il token, faccio la chiamata post per verificare il pagamento ed eventualmente salvare l'ordine
                axios
                  .post("http://127.0.0.1:8000/api/order", dataToSend)
                  .then((resp) => console.log(resp))
                  .finally(
                    localStorage.clear("updatedCart"),
                    console.log("Log del carrello una volta svuotato", loadCart)
                  );
              }
            );
            console.log("Pagamento avvenuto!");
          });
        }
      );
      setTimeout(() => (this.paymentLoaded = true), 1000);
    },

    generatePaymentForm() {
      axios
        .get(`${this.store.apiUrl}api/braintree/token`)
        .then((resp) => {
          this.token = resp.data.clientToken;
          console.log("Token ottenuto dalla chiamata a Braintree", this.token);
        })
        .finally(this.brainTreeInit);
    },

    importCart() {
      this.importedCart = this.store.updatedCart;
      console.log("Carrello importato", this.importedCart);
      let dishesId = [];
      let dishesQuantities = [];
      let total = 0;

      this.importedCart.forEach((dish) => {
        // Pusho nei corrispettivi array gli id dei piatti e le loro quantità
        dishesId.push(dish.id);
        dishesQuantities.push(dish.quantity);

        // Li rendo stringhe
        dishesId.toString();
        dishesQuantities.toString();

        // Calcolo progressivamente il totale
        total += dish.price * dish.quantity;
      });

      // Rendo gli id e le quantità delle singole stringhe
      dishesId = dishesId.join(",");
      dishesQuantities = dishesQuantities.join(",");

      // Assegno alle chiavi nell'oggetto dei dati da inviare il risultato
      this.dataToSend.dishes_id = dishesId;
      this.dataToSend.dishes_quantities = dishesQuantities;
      this.dataToSend.total = total;

      console.log("id dei piatti dal carrello", this.dataToSend.dishes_id);
      console.log(
        "quantità dei piatti del carrello",
        this.dataToSend.dishes_quantities
      );
      console.log("totale da pagare", this.dataToSend.total);
    },
  },
  created() {
    this.importCart();
  },
};
</script>

<template>
  <div class="container py-5">
    <div id="checkout-form" class="w-75 mx-auto">
      <div class="mb-3">
        <label for="interested_user_name" class="form-label">Nome</label>
        <input
          class="w-100 form-control"
          required
          v-model="dataToSend.interested_user_name"
          id="interested_user_name"
          type="text" />
      </div>
      <div class="mb-3">
        <label for="interested_user_surname" class="form-label">Cognome</label>
        <input
          class="w-100 form-control"
          required
          v-model="dataToSend.interested_user_surname"
          id="interested_user_surname"
          type="text" />
      </div>
      <div class="mb-3">
        <label for="interested_user_address" class="form-label"
          >Indirizzo</label
        >
        <input
          class="w-100 form-control"
          required
          v-model="dataToSend.interested_user_address"
          id="interested_user_address"
          type="text" />
      </div>
      <div class="mb-3">
        <label for="interested_user_email" class="form-label">Email</label>
        <input
          class="w-100 form-control"
          v-model="dataToSend.interested_user_email"
          id="interested_user_email"
          type="email" />
      </div>
      <div class="mb-3">
        <label for="interested_user_phone" class="form-label">Telefono</label>
        <input
          class="w-100 form-control"
          required
          v-model="dataToSend.interested_user_phone"
          id="interested_user_phone"
          type="text" />
      </div>
    </div>
    <div class="mb-3 text-center">
      <button class="btn" @click="generatePaymentForm">Vai al pagamento</button>
    </div>
    <section class="ms_checkout-section">
      <div id="dropin-wrapper">
        <div id="checkout-message"></div>
        <div id="dropin-container"></div>

        <button v-show="paymentLoaded" class="btn" id="submit-button">
          Submit payment
        </button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;
.container {
  button {
    background-color: $bg-btn;
    color: $main-text;
  }
  .ms_checkout-section {
    min-height: 480px;
    padding: 3rem;
  }
}
</style>
