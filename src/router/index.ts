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
    path: '/product/insert',
    name: 'productInsert',
    component: () => import('@/views/ProductInsert.vue'),
    meta: { layout: VueHome },
    children: [
      {
        path: 'page1',
        name: 'page1',
        component: () => import('@/views/Page1.vue'),
      },
      {
        path: 'page2',
        name: 'page2',
        component: () => import('@/views/Page2.vue'),
      },
      {
        path: 'page3',
        name: 'page3',
        component: () => import('@/views/Page3.vue'),
      },
      {
        path: 'page4',
        name: 'page4',
        component: () => import('@/views/Page4.vue'),
      }
    ]
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
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('@/layouts/VueSign.vue'),
    meta: { layout: VueSign }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
