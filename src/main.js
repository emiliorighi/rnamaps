import { createApp } from 'vue'
import App from './App.vue'
import {
    createVuestic,
} from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'
import { createPinia } from 'pinia'
import router from './router'
import './assets/overrides.css'


createApp(App)

    .use(createPinia())
    .use(createVuestic())
    .use(router)
    .mount('#app')
