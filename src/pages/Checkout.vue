<script>
import axios from "axios";
import { store } from "../data/store";

export default {
    data() {
        return {
            store,
            token: '',
            instance: null,
        }
    },
    methods: {
        brainTreeInit() {
            const button = document.querySelector('#submit-button');

            braintree.dropin.create({
                authorization: this.token,
                container: '#dropin-container'
            }, function (createErr, instance) {
                button.addEventListener('click', function () {
                    instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
                        // Submit payload.nonce to your server
                    });
                });
            });
        }
    },
    created() {
        axios
            .get(`${this.store.apiUrl}api/braintree/token`)
            .then((resp) => {
                this.token = resp.data.clientToken;
                console.log("Token ottenuto dalla chiamata a Braintree", this.token);
            })
            .finally(
                this.brainTreeInit
            )
    }
}

</script>

<template>
    <div id="dropin-wrapper">
        <div id="checkout-message"></div>
        <div id="dropin-container"></div>
        <button id="submit-button">Submit payment</button>
    </div>
</template>

<style lang="scss" scoped></style>