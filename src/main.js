import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import {http} from './http'
import store from './store'

Vue.config.productionTip = false



new Vue({
 
  router,
  http,
  store,
  render: h => h(App),
}).$mount('#app')
