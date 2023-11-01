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
<<<<<<< HEAD
    path: '/product/insert',
    name: 'productInsert',
    component: () => import('@/views/ProductInsert.vue'),
    meta: { layout: VueHome },
    children: [
      {
        path: 'page1',
        name: 'page1',
        component: () => import('@/components/Page1.vue'),
      },
      {
        path: 'page2',
        name: 'page2',
        component: () => import('@/components/Page2.vue'),
      },
      {
        path: 'page3',
        name: 'page3',
        component: () => import('@/components/Page3.vue'),
      },
      {
        path: 'page4',
        name: 'page4',
        component: () => import('@/components/Page4.vue'),
      }
    ]
=======
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
>>>>>>> 5406860f4e0ef11849a5cf9ecd5f68e3395330e7
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
<<<<<<< HEAD
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('@/layouts/VueSign.vue'),
    meta: { layout: VueSign }
=======
>>>>>>> 5406860f4e0ef11849a5cf9ecd5f68e3395330e7
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
