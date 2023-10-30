<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ProductNavbar"
})
</script>
<template>
<nav class="navbar-nav navbar-expand navbar-dark">
  <button class="btn btn-outline-info">選擇版型</button>
  <button class="btn btn-outline-info">填寫資料</button>
  <button class="btn btn-outline-info">預覽商品</button>
  <button class="btn btn-outline-info">確認送出</button>
</nav>
</template>
