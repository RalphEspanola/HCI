// src/main.js - Corrected version
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VCalendar } from 'vuetify/labs/components'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const vuetify = createVuetify({
  components: {
    ...components,
    VCalendar,
  },
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
