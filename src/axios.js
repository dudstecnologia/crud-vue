import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://crud.api/api/auth'

const token = localStorage.getItem('_token_temp')

Vue.use({
  install (Vue) {
    Vue.prototype.$http = axios
    if (token) {
      Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  }
})
