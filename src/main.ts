import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 中间件
import './interlayer/index'
import './interlayer/interlayer'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
