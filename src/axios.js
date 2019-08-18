import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/auth'

const token = localStorage.getItem('_token_temp')

Vue.use({
  install (Vue) {
    Vue.prototype.$http = axios
    if (token) {
      Vue.prototype.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  }
})
