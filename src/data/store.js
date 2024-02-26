import { reactive } from 'vue';

export const store = reactive({
  apiUrl: "http://127.0.0.1:8000/",

  updatedCart: loadCart(),
  restaurats: [],
  restaurat_id: 0,

  typesResearch: [],
  restaurantsToShow: [],
  restaurantLoading: true,
});

// Salvo il carrello
store.saveCart = saveCart;

// Salvo il carrello in store
export function saveCart(cart) {
  localStorage.setItem('updatedCart', JSON.stringify(cart));
}


// Carico il carrello in store
export function loadCart() {
  return JSON.parse(localStorage.getItem('updatedCart')) || [];
}

