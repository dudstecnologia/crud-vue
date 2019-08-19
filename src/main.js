import Vue from 'vue'
import Vuex from 'vuex'
import './axios'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import ClickConfirm from 'click-confirm/src/ClickConfirm.vue'
import VueNotification from '@kugatsu/vuenotification'
import VueMoment from 'vue-moment'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(VueNotification)
Vue.use(VueMoment)
Vue.component('clickConfirm', ClickConfirm)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
