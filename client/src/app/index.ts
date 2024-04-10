import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'

import { router } from './providers'

import 'primevue/resources/themes/aura-light-green/theme.css'
import './styles/index.scss'

const app = createApp(App)

app.use(createPinia()).use(PrimeVue).use(router)

export { app }
