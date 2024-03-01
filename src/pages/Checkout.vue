<script>
import axios from "axios";
import { store, loadCart } from "../data/store";
import {
  checkName,
  checkSurname,
  checkAddress,
  checkEmail,
  checkPhoneNumber,
  formControl,
} from "../checkoutValidation";

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
    checkName,
    checkSurname,
    checkAddress,
    checkEmail,
    checkPhoneNumber,
    formControl,
    redirectPostCheckout() {
      setTimeout(window.location.replace('http://localhost:5173/postcheckout'), 10000)
    },
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
                async function processOrder() {
                  let resp = await axios
                    .post("http://127.0.0.1:8000/api/order", dataToSend)
                  console.log(resp.data.order_id);
                  localStorage.setItem('orderId', JSON.stringify(resp.data.order_id));
                  window.location.replace('http://localhost:5173/postcheckout')
                }
                localStorage.clear("updatedCart")
                store.updatedCart = []
                console.log("Log del carrello una volta svuotato", loadCart)
                processOrder()
              }
            );
            console.log("Pagamento avvenuto!");
          });
        }
      );
      setTimeout(() => (this.paymentLoaded = true), 1000);
    },

    generatePaymentForm() {
      formControl(this.event);
      document.getElementById("formError").textContent = "";
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
      <!-- NOME -->
      <div class="mb-3">
        <label for="interested_user_name" class="form-label">Nome</label>
        <input class="w-100 form-control" required v-model="dataToSend.interested_user_name" id="interested_user_name"
          type="text" @input="checkName" />
        <!-- {{-- Gestione errore name --}} -->
        <span>
          <strong id="nameError" class="errorFormMsg ms-1"></strong><br />
        </span>
      </div>

      <!-- COGNOME -->
      <div class="mb-3">
        <label for="interested_user_surname" class="form-label">Cognome</label>
        <input class="w-100 form-control" required v-model="dataToSend.interested_user_surname"
          id="interested_user_surname" type="text" @input="checkSurname" />
        <!-- {{-- Gestione errore cognome --}} -->
        <span>
          <strong id="surnameError" class="errorFormMsg ms-1"></strong><br />
        </span>
      </div>

      <!-- INDIRIZZO -->
      <div class="mb-3">
        <label for="interested_user_address" class="form-label">Indirizzo</label>
        <input class="w-100 form-control" required v-model="dataToSend.interested_user_address"
          id="interested_user_address" type="text" @input="checkAddress" />
        <!-- {{-- Gestione errore indirizzo --}} -->
        <span>
          <strong id="addressError" class="errorFormMsg ms-1"></strong><br />
        </span>
      </div>

      <!-- EMAIL -->
      <div class="mb-3">
        <label for="interested_user_email" class="form-label">Email</label>
        <input class="w-100 form-control" v-model="dataToSend.interested_user_email" id="interested_user_email"
          type="email" @input="checkEmail" />
        <!-- {{-- Gestione errore email --}} -->
        <span>
          <strong id="emailError" class="errorFormMsg ms-1"></strong><br />
        </span>
      </div>

      <!-- NUMERO DI TELEFONO -->
      <div class="mb-3">
        <label for="interested_user_phone" class="form-label">Telefono</label>
        <input class="w-100 form-control" required v-model="dataToSend.interested_user_phone" id="interested_user_phone"
          type="text" @input="checkPhoneNumber" />
        <!-- {{-- Gestione errore numero --}} -->
        <span>
          <strong id="numberError" class="errorFormMsg ms-1"></strong><br />
        </span>
      </div>
    </div>

    <!-- BUTTON PER ANDARE AL PAGAMENTO -->
    <div class="mb-3 text-center">
      <button class="btn" id="userDataBtn" @click="generatePaymentForm">
        Vai al pagamento
      </button>
    </div>

    <!-- ERROR FORM CONTROL  -->
    <div class="text-center">
      <h1><strong id="formError" class="errorFormMsg ms-1"></strong><br /></h1>
    </div>

    <!-- FORM PAGAMENTO BRAINTREE-->
    <section class="ms_checkout-section">
      <div id="dropin-wrapper">
        <div id="checkout-message"></div>
        <div id="dropin-container"></div>

        <button v-show="paymentLoaded" class="btn" id="submit-button">
          Completa pagamento
        </button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.container {
  .mb-3 {
    strong {
      color: red;
    }
  }

  #formError {
    color: red;
  }

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
