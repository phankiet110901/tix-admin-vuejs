import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { router } from "./admin.router"
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from "./store/"
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
