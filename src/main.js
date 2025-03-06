import './assets/admin.css'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import '../node_modules/aos/dist/aos.css'
import AOS from 'aos'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const head = createHead()

app.use(head)

app.use(router)

app.mount('#app')
AOS.init()
