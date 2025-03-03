import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import App from './App.vue'
import router from './router'
import axios from './axiosInstance'

loadFonts()

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.config.globalProperties.$axios = axios
app.mount('#app')
