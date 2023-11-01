<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductInsert'
})
</script>

<template>
<section class="container card mt-5 mb-5 pt-3 pb-3">
  <nav class="navbar-nav navbar-expand navbar-dark">
    <router-link class="btn btn-outline-info" to="/product/insert/page1">選擇版型</router-link>
    <router-link class="btn btn-outline-info" to="/product/insert/page2">填寫資料</router-link>
    <router-link class="btn btn-outline-info" to="/product/insert/page3">預覽商品</router-link>
    <router-link class="btn btn-outline-info" to="/product/insert/page4">確認送出</router-link>
  </nav>
  <router-view />
</section>
</template>
