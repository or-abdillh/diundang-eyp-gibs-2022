import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import AOS from 'aos'

import '@/style.css'
import 'animate.css'
import 'aos/dist/aos.css'

AOS.init()

createApp(App)
    .use( router )
    .mount('#app')
