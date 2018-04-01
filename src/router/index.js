import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/main/Register'
import TackList from '@/main/TackList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      meta: {
        title: '登录'
      },
      component: Register
    },
    {
      path: '/TackList',
      name: 'TackList',
      meta: {
        title: '任务列表'
      },
      component: TackList
    }
  ]
})
Vue.use(require('vue-wechat-title'))
