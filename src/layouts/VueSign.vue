<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "VueSign"
})
</script>
<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/sign">會員登入系統</router-link>
    <router-link class="ml-auto btn btn-outline-danger" to="/">返回</router-link>
  </nav>
  <section class="container card col-3 mt-5 mb-5 pt-3 pb-3">
    <header class="card-title text-center">
      <h3>會員登入系統</h3>
    </header>
    <article class="card-body">
      <div class="form-group">
        <label>帳號:</label>
        <input class="form-control" placeholder="請輸入帳號">
      </div>
      <div class="form-group">
        <label>密碼:</label>
        <input class="form-control" placeholder="請輸入密碼">
      </div>
      <div class="form-group">
        <label>驗證碼:</label>
        <br>
        <img src="" alt="err">
        <br>
        <img src="" alt="err">
      </div>
    </article>
    <footer class="text-center">
      <button class="btn btn-outline-success">送出</button>
      <button class="btn btn-outline-success">清除</button>
      <button class="btn btn-outline-success">刷新</button>
    </footer>
  </section>
</template>
