<script>
import axios from "axios";
import { store, loadCart } from "../data/store";

export default {
    data() {
        return {
            importedCart: null,
            store,
            token: '',
            instance: null,
            paymentNonce: null,
            dataToSend: {
                interested_user_name: 'Pippo',
                interested_user_surname: 'Pippi',
                interested_user_address: 'Via del citofono, 19, 21021 Milano',
                interested_user_email: 'pippo.pippi@gmail.com',
                interested_user_phone: '+393574681755',
                total: 0,
                payment_method_nonce: null,
                // Informazioni del/dei piatto/i con la/le quantità
                dishes_id: null,
                dishes_quantities: null,
            }
        }
    },
    methods: {
        brainTreeInit() {
            let dataToSend = this.dataToSend;
            const button = document.querySelector('#submit-button');

            braintree.dropin.create({
                authorization: this.token,
                container: '#dropin-container'
            }, function (createErr, instance) {
                button.addEventListener('click', function () {
                    instance.requestPaymentMethod((requestPaymentMethodErr, payload) => {
                        this.paymentNonce = payload.nonce;

                        dataToSend.payment_method_nonce = this.paymentNonce;

                        console.log("PaymentNonce", this.paymentNonce);

                        console.log("Oggetto dei dati da passare", dataToSend);

                        // Una volta ottenuto il token, faccio la chiamata post per verificare il pagamento ed eventualmente salvare l'ordine
                        axios
                            .post("http://127.0.0.1:8000/api/order", dataToSend)
                            .then((resp) => console.log(resp))
                            .finally(
                                localStorage.clear('updatedCart'),
                                console.log("Log del carrello una volta svuotato", loadCart)
                            )
                    });
                    console.log("Pagamento avvenuto!");
                });
            });
        },
        generatePaymentForm() {
            axios
                .get(`${this.store.apiUrl}api/braintree/token`)
                .then((resp) => {
                    this.token = resp.data.clientToken;
                    console.log("Token ottenuto dalla chiamata a Braintree", this.token);
                })
                .finally(
                    this.brainTreeInit
                )
        },
        // sendPaymentPayload() {
        //     axios.post(`${this.store.apiUrl}api/orders`, {
        //         total: 10,
        //         payment_method_nonce: this.paymentNonce // Invia il nonce di pagamento al server
        //     })
        //         .then((resp) => console.log(resp))
        // },
        importCart() {
            this.importedCart = this.store.updatedCart;
            console.log("Carrello importato", this.importedCart);
            let dishesId = [];
            let dishesQuantities = [];
            let total = 0;

            this.importedCart.forEach(dish => {
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
            dishesId = dishesId.join(',');
            dishesQuantities = dishesQuantities.join(',');

            // Assegno alle chiavi nell'oggetto dei dati da inviare il risultato
            this.dataToSend.dishes_id = dishesId;
            this.dataToSend.dishes_quantities = dishesQuantities;
            this.dataToSend.total = total;

            console.log("id dei piatti dal carrello", this.dataToSend.dishes_id);
            console.log("quantità dei piatti del carrello", this.dataToSend.dishes_quantities);
            console.log("totale da pagare", this.dataToSend.total);
        }
    },
    created() {
        this.importCart()
    }
}

</script>

<template>
    <button @click="generatePaymentForm">Genera form</button>
    <div id="checkout-form" class="w-75 mx-auto">
        <label for="interested_user_name">Nome</label>
        <input class="w-100" required v-model="dataToSend.interested_user_name" id="interested_user_name" type="text">

        <label for="interested_user_surname">Cognome</label>
        <input class="w-100" required v-model="dataToSend.interested_user_surname" id="interested_user_surname" type="text">

        <label for="interested_user_address">Indirizzo</label>
        <input class="w-100" required v-model="dataToSend.interested_user_address" id="interested_user_address" type="text">

        <label for="interested_user_email">Email</label>
        <input class="w-100" v-model="dataToSend.interested_user_email" id="interested_user_email" type="email">

        <label for="interested_user_phone">Telefono</label>
        <input class="w-100" required v-model="dataToSend.interested_user_phone" id="interested_user_phone" type="text">

    </div>
    <section class="ms_checkout-section">
        <div id="dropin-wrapper">
            <div id="checkout-message"></div>
            <div id="dropin-container"></div>
            <button id="submit-button">Submit payment</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.ms_checkout-section {
    min-height: 480px;
    padding: 3rem;
}
</style>