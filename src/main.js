import Vue from 'vue'
import Vuex from 'vuex'
import './axios'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex)
Vue.use(BootstrapVue)

// console.log(process.env.SERVER)
// Vue.http.options.root = process.env.SERVER

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
