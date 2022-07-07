import { createApp } from 'vue'
import App from '@/App'
import router from '@/router/index'
import store from '@/store/index'

import '@/assets/css/global.css'

const app = createApp(App)

app.use(store).use(router)

app.mount('#app')
