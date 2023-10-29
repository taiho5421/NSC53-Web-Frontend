<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VueHome'
})
</script>
<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">帳號管理系統</router-link>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/product/insert">商品上架</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/product/manage">商品管理</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/account/manage">帳號管理</router-link>
      </li>
    </ul>
    <router-link class="ml-auto btn btn-outline-success" to="/sign">登入</router-link>
  </nav>
  <router-view />
</template>
