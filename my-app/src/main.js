import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'


const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '287355208197-5dodvqjt9ge05peq9kkobnp8d1jep2sd.apps.googleusercontent.com'
}
)
app.use(router)

app.mount('#app')

