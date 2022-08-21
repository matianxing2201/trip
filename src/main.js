import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import pinia from './store'
import Vant from 'vant'
import 'vant/lib/index.css'

import 'normalize.css'

createApp(App).use(router).use(pinia).use(Vant).mount('#app')
