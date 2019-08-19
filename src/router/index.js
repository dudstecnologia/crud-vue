import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Aluno from '../components/aluno/Aluno'
import Curso from '../components/curso/Curso'
import Professor from '../components/professor/Professor'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/aluno',
      name: 'aluno',
      component: Aluno,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/curso',
      name: 'curso',
      component: Curso,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/professor',
      name: 'professor',
      component: Professor,
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
