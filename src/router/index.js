import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Home from '@/components/Home'
import HomeContent from '@/components/HomeContent'
import ProductList from '@/components/ProductList'
import ProductPage from '@/components/ProductPage'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    redirect: '/Home',
    component: Home,
    children: [{
      path: "/Home",
      name: 'content',
      component: HomeContent,
    }, {
      path: 'Home/:name',
      component: ProductList,

    }, {
      path: 'Home/:name/:productId',
      component: ProductPage
    }]
  }, ]
})