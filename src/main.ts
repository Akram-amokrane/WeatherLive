import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)

app.use(createPinia())
app.use(router)

axios.interceptors.request.use((config) => {
	config.headers['X-RapidAPI-Key'] = import.meta.env.VITE_API_TOKEN
	config.headers['X-RapidAPI-Host'] = import.meta.env.VITE_API_HOST
	config.baseURL = import.meta.env.VITE_API_URL
	return config
})


app.mount('#app')
