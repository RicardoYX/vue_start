// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import store from './store/index'
import router from './router'
import VueLazyload from 'vue-lazyload'
import './assets/font/iconfont.css'
import './assets/font/iconfont_new.css'
import './assets/css/base.css'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3333/'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios
Vue.use(VueLazyload,{
  preLoad:1.3,
  error:require('./assets/images/err.png'),
  loading:require('./assets/images/loading.gif'),
  attempt:1,
  listenEvents:['scroll']
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
