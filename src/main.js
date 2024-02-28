import { createApp } from 'vue'
import { router } from './router'
import { dropin } from 'braintree-web-drop-in';
import './scss/general.scss'
import App from './App.vue'

createApp(App).use(router).use(dropin).mount('#app')
