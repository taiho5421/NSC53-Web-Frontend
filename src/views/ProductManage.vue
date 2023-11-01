<script lang="ts">
import { defineComponent } from 'vue'
import {mapActions, mapGetters} from "vuex";

export default defineComponent({
  name: 'AccountManage',
  data () {
    return {
<<<<<<< HEAD
      productData: []
=======
      products: null
>>>>>>> 5406860f4e0ef11849a5cf9ecd5f68e3395330e7
    }
  },
  mounted () {
    this.fetchProductData()
  },
  computed: {
    ...mapGetters(['getProductData'])
  },
  methods: {
<<<<<<< HEAD
    ...mapActions(['postProductDataSel']),
    async fetchProductData () {
      await this.postProductDataSel()
      this.productData = this.getProductData
=======
    ...mapActions(['postProductSel']),
    async fetchProductData () {
      await this.postProductSel()
      this.products = this.getProductData
>>>>>>> 5406860f4e0ef11849a5cf9ecd5f68e3395330e7
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
<<<<<<< HEAD
        <tr v-for="nl in productData" :key="nl.id">
=======
        <tr v-for="nl in products" :key="nl.id">
>>>>>>> 5406860f4e0ef11849a5cf9ecd5f68e3395330e7
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
