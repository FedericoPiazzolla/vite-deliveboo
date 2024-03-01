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
    <div id="order-container">

        <div>
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

            <ol class="p-0 mb-4 list-group-numbered">
                <li v-for="product in order.dishes" :key="product.id"
                    class="list-group-item d-flex justify-content-between align-items-start mb-3">
                    <div class="ms-2 me-auto">
                        <p class="fw-semibold mb-0">
                            {{ product.name }}
                            <span class="ps-3">&euro;{{ product.price }}</span>
                        </p>
                        {{ product.ingredients }}
                    </div>
                    <div class="d-inline-block mt-2">
                        <span class="px-2 fw-bold">{{ product.pivot.dish_quantity }}</span>
                    </div>
                </li>
            </ol>

            <p class="total text-decoration-underline text-end mb-3">Totale: &euro;{{ order.total }}</p>
        </div>

        <!-- <div v-else class="p-5">
  <h2 class="mb-4 text-capitalize text-center">
    Ordine annullato
    <i class="text-danger fa-regular fa-circle-check"></i>
  </h2>
  <p>C'è stato un problema nella conferma del pagamento.</p>
  <p>Aprendo il carrello può ricominciare la procedura per l'acquisto dei prodotti selezionati.</p>
</div> -->

    </div>
</template>


<style lang="scss" scoped>

#order-container {
  padding: 5rem;
}
</style>