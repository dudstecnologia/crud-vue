import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Aluno from '../components/aluno/Aluno'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/aluno',
      name: 'Aluno',
      component: Aluno,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})

export default router
