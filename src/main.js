import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './routers'
import AOS from 'aos'
import 'aos/dist/aos.css'
import store from './store/index';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
  .mounted(AOS.init())
