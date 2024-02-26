import { reactive } from 'vue';

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/",

  cart: loadCart(),

  restaurats: [],
  restaurat_id: 0,
});

// Salvo il carrello
store.saveCart = saveCart;


// Salvo il carrello in store
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}


// Carico il carrello in store
function loadCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

