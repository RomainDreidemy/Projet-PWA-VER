import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../views/Product.vue'
import Home from '../views/Home.vue'
import Product_list from '../views/Product_list.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/product_list',
    name: 'Product_list',
    component: Product_list
  }
]

const router = new VueRouter({
  routes
})

export default router
