import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/main/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    }
  ]
})
