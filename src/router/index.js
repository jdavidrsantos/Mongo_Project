import { createRouter, createWebHashHistory } from 'vue-router'
import products from '@/modules/main/router/index'


const routes = [

  {
    path: '/',
    ...products
  },

  {
    path: '/shopcar',
    name: 'shopcar',
    component: () => import(/* webpackChunkName: "about" */ '@/modules/main/components/ShopCar.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
