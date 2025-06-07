import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Config } from 'primevue'
import Aura from '@primeuix/themes/aura'

import App from './App.vue'

import { router } from './providers'

import './styles/index.scss'

const app = createApp(App)

app
  .use(createPinia())
  .use(Config, {
    theme: {
      preset: Aura
    }
  })
  .use(router)

export { app }
