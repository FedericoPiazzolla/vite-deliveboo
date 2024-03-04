<script>
import { store } from "../data/store";
import axios from "axios";

export default {
    data() {
        return {
            store,
            orderId: null,
            order: null,
        }
    },
    methods: {
        getOrderId() {
            return JSON.parse(localStorage.getItem('orderId'))
        }
    },
    created() {
        this.orderId = this.getOrderId()
        console.log(this.orderId);

        axios
            .get(`${this.store.apiUrl}api/show-order`, {
                params: {
                    order_id: this.orderId
                }
            })
            .then((resp) => {
                console.log(resp.data);
                this.order = resp.data
            })
    }
}
</script>

<template>
    <div class="background-style">
        <div id="order-container">
            <div class="post-card w-75 text-center mb-3 mx-auto" style="background-color:#ffc338;">
                <div v-if="orderId">
                    <h2 class="mb-4 text-capitalize text-center">
                        Ordine effettuato
                        <i class="text-success fa-regular fa-circle-check"></i>
                    </h2>

                    <div class="mb-4">
                        <p class="mb-2">Grazie
                            <span class="text-capitalize fw-bold"></span>
                            l'ordine è andato a buon fine!
                        </p>
                        <p class="mb-2">A breve ti verrà spedito all'indirizzo da te fornito</p>
                        <p>Qui sotto puoi trovare il riepilogo dell'ordine:</p>
                    </div>

                    <ol class="py-2  mb-4 list-group-numbered" style="background-color:#ffea81; border-radius:1rem;">
                        <li v-for="product in order.dishes" :key="product.id"
                            class="list-group-item d-flex justify-content-between align-items-start mb-3">
                            <div class="ms-2 me-auto">
                                <p class="fw-semibold mb-0">
                                    {{ product.name }}
                                    <span class="ps-3">&euro;{{ product.price }}</span>
                                </p>
                                {{ product.ingredients }}
                            </div>
                            <div class="d-inline-block mt-2"> Qtà:
                                <span class="px-2 fw-bold">{{ product.pivot.dish_quantity }}</span>
                            </div>
                        </li>
                    </ol>

                    <p class="text-end">Totale: &euro;{{
                        order.total }}</p>
                </div>

                <div v-else class="p-5">
                    <h2 class="mb-4 text-capitalize text-center">
                        Ordine annullato
                        <i class="text-danger fa-regular fa-circle-check"></i>
                    </h2>
                    <p>C'è stato un problema nella conferma del pagamento.</p>
                    <p>Aprendo il carrello può ricominciare la procedura per l'acquisto dei prodotti selezionati.</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.background-style {
  
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("src/assets/img/background2.png"), no-repeat,;
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
}

}


@media screen and (max-width: 500px) {

    #order-container{
        padding: 1rem;
    }
    .post-card {
        width: 100%;
        padding:5px;
        ol{
            padding: 40px;
        }
    }
}

</style>