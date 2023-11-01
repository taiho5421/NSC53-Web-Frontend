<script lang="ts">
import { defineComponent } from 'vue'
<<<<<<< HEAD

export default defineComponent({
  name: 'ProductInsert'
=======
import ProductNavbar from '@/components/ProductNavbar.vue'

export default defineComponent({
  name: 'ProductInsert',
  components: {
    ProductNavbar: ProductNavbar
  }
>>>>>>> 5406860f4e0ef11849a5cf9ecd5f68e3395330e7
})
</script>

<template>
<section class="container card mt-5 mb-5 pt-3 pb-3">
<<<<<<< HEAD
  <nav class="navbar-nav navbar-expand navbar-dark">
    <router-link class="btn btn-outline-info" to="/product/insert/page1">選擇版型</router-link>
    <router-link class="btn btn-outline-info" to="/product/insert/page2">填寫資料</router-link>
    <router-link class="btn btn-outline-info" to="/product/insert/page3">預覽商品</router-link>
    <router-link class="btn btn-outline-info" to="/product/insert/page4">確認送出</router-link>
  </nav>
  <router-view />
=======
  <ProductNavbar></ProductNavbar>
>>>>>>> 5406860f4e0ef11849a5cf9ecd5f68e3395330e7
</section>
</template>
