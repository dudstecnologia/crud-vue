// import HelloWorld from '@/components/HelloWorld'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Aluno from '../components/aluno/Aluno'

const routes = [
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
    component: Aluno
  }
]

export default routes
