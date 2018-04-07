import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/main/Register'
import TackList from '@/main/TackList'
import ContractInfo from '@/main/ContractInfo'
import Authentication from '@/main/Authentication'
import Realname from '@/main/RealName'
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
    },
    {
      path: '/ContractInfo',
      name: 'ContractInfo',
      meta: {
        title: '合同详情'
      },
      component: ContractInfo
    },
    {
      path: '/Authentication',
      name: 'Authentication',
      meta: {
        title: '实名认证'
      },
      component: Authentication
    },
    {
      path: '/Realname',
      name: 'Realname',
      meta: {
        title: '实名认证'
      },
      component: Realname
    }
  ]
})
Vue.use(require('vue-wechat-title'))
