<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AccountManage',
  data () {
    return {
      products: null
    }
  },
  mounted () {
    this.productSel()
  },
  methods: {
    productSel () {
      fetch('http://localhost/php/nsrc53.php?cmd=product_sel', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      }).then(async res => {
        this.products = await res.json()
      })
    }
  }
})
</script>
<template>
  <section class="container card mt-5 mb-5 pt-3 pb-3">
    <header class="card-header">
      <router-link class="btn btn-outline-info" to="/product/insert">新增</router-link>
    </header>
    <article class="card-body">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th>編號</th>
          <th>名稱</th>
          <th>圖片</th>
          <th>介紹</th>
          <th>價格</th>
          <th>連結</th>
          <th>版型</th>
          <th>時間</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="nl in products" :key="nl.id">
          <td>{{ nl.id }}</td>
          <td>{{ nl.name }}</td>
          <td>
            <img :src="'http://localhost/img/' + nl.image" style="width: 120px; height: 120px; object-fit: cover">
          </td>
          <td>{{ nl.text }}</td>
          <td>{{ nl.money }}</td>
          <td>{{ nl.link }}</td>
          <td>{{ nl.mid }}</td>
          <td>{{ nl.time }}</td>
          <td>
            <button class="btn btn-outline-warning" v-if="nl.permissions !== '超級管理者'">編輯</button>
            <button class="btn btn-outline-danger" v-if="nl.permissions !== '超級管理者'">刪除</button>
          </td>
        </tr>
        </tbody>
      </table>
    </article>
  </section>
</template>
