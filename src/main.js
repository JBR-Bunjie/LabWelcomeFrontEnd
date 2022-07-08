import { createApp } from 'vue'
import App from '@/App'
import router from '@/router/index'
import store from '@/store/index'
import axios from "axios";

import '@/assets/css/global.css'

const app = createApp(App)

app.use(store).use(router)

app.mount('#app')

// axios.defaults.baseURL = "http://121.5.130.107:5300/"