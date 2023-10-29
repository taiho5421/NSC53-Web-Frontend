import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import VueHome from '@/layouts/VueHome.vue'
import VueSign from '@/layouts/VueSign.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/ProductSelect.vue'),
    meta: { layout: VueHome }
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('@/layouts/VueSign.vue'),
    meta: { layout: VueSign }
  },
  {
    path: '/product/insert',
    name: 'productInsert',
    component: () => import('@/views/ProductInsert.vue'),
    meta: { layout: VueHome }
  },
  {
    path: '/product/manage',
    name: 'productManage',
    component: () => import('@/views/ProductManage.vue'),
    meta: { layout: VueHome }
  },
  {
    path: '/account/manage',
    name: 'accountManage',
    component: () => import('@/views/AccountManage.vue'),
    meta: { layout: VueHome }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
