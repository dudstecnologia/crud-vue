import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('_token_temp') || '',
    user: {}
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    login ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios.post('http://127.0.0.1:8000/api/auth/login', user)
          .then(resp => {
            const token = resp.data.access_token
            const user = resp.data.user
            localStorage.setItem('_token_temp', token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('_token_temp')
            reject(err)
          })
      })
    },
    register ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios.post('http://127.0.0.1:8000/api/auth/register', user)
          .then(resp => {
            const token = resp.data.access_token
            const user = resp.data.user
            localStorage.setItem('_token_temp', token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout ({commit}) {
      return new Promise((resolve, reject) => {
        commit('logout')
        axios.get('http://127.0.0.1:8000/api/auth/logout')
          .then(resp => {
            localStorage.removeItem('_token_temp')
            delete axios.defaults.headers.common['Authorization']
            resolve(resp)
          })
          .catch(err => {
            localStorage.removeItem('_token_temp')
            delete axios.defaults.headers.common['Authorization']
            reject(err)
          })
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
})
