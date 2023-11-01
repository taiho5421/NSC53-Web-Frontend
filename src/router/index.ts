import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import VueHome from '@/layouts/VueHome.vue'
import VueSign from '@/layouts/VueSign.vue'
import ProductSelect from '@/views/ProductSelect.vue'
import AddProduct from '@/views/AddProdcut.vue'
import Page1 from '@/views/addProduct/Page1.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    components: ProductSelect,
    meta: { layout: VueHome }
  },
  {
    path: '/add-product',
    component: AddProduct,
    meta: { layout: VueHome },
    children: [
      {
        path: 'page1',
        component: Page1
      },
      {
        path: 'page2',
        component: () => import('@/views/addProduct/Page2.vue'),
      },
      {
        path: 'page3',
        component: () => import('@/views/addProduct/Page3.vue'),
      },
      {
        path: 'page4',
        component: () => import('@/views/addProduct/Page4.vue'),
      }
    ]
  },
  {
    path: '/manage-product',
    component: () => import('@/views/ProductManage.vue'),
    meta: { layout: VueHome }
  },
  {
    path: '/manage-account',
    component: () => import('@/views/AccountManage.vue'),
    meta: { layout: VueHome }
  },
  {
    path: '/sign',
    component: () => import('@/layouts/VueSign.vue'),
    meta: { layout: VueSign }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
