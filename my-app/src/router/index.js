import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../components/cart/Cart.vue'
import Catgory from '../components/catgory/Catgory.vue'
import Find from '../components/find/Find.vue'
import Home from '../components/home/Home.vue'
import Mine from '../components/mine/Mine.vue'
import GoodsDetail from '../components/detail/GoodsDetail.vue'
import SearchMain from '../components/search/SearchMain.vue'
import Login from '../components/mine/Login.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path:'/detail/:id',
      component: GoodsDetail
    },
    {
      path:'/search',
      component: SearchMain
    },
    {
      path: '/catgory',
      component: Catgory
    },
    {
      path: '/catgory/:id',
      component: Catgory
    },
    {
      path: '/find',
      component: Find
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect:'/home'
    }
  ]
})
