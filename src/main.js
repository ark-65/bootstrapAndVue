// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {Alert, Confirm, Toast} from 'wc-messagebox'
import Vuelidate from 'vuelidate'
import 'wc-messagebox/style.css'
import './static/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Toast)
Vue.use(Vuelidate)

Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
