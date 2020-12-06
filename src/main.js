import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios";

import Preloader from './utils/preloader/Preloader'

import 'materialize-css/dist/js/materialize.min'

const token = localStorage.getItem('token')
if (token) {
    axios.defaults.headers.common['Authorization'] = token
}

createApp(App)
    .use(store)
    .use(router)
    .component('Preloader',Preloader)
    .mount('#app')


