import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/main/Register'
import TackList from '@/main/TackList'
import ContractInfo from '@/main/ContractInfo'
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
    }
  ]
})
Vue.use(require('vue-wechat-title'))
