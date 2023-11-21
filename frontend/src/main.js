import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)

//essas duas linhas vão permitir que vc use o axios em qualquer lugar do vue, exceto em casos específicos
//exemplo: dentro do Store (pinia). Lá o vue ainda não terá sido iniciado naquele contexto,
//por isso axios não poderia ser usado la
app.use(VueAxios, axios.create({baseURL: 'http://localhost'}))
app.provide('axios', app.config.globalProperties.axios)

app.mount('#app')
