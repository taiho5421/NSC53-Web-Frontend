<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AccountManage',
  data () {
    return {
      accounts: null
    }
  },
  mounted () {
    this.accountSel()
  },
  methods: {
    accountSel () {
      fetch('http://localhost/php/nsrc53.php?cmd=account_sel', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      }).then(async res => {
        this.accounts = await res.json()
      })
    }
  }
})
</script>

<template>
  <section class="container card mt-5 mb-5 pt-3 pb-3">
    <header class="card-header">
      <button class="btn btn-outline-info">新增</button>
      <button class="btn btn-outline-info">紀錄</button>
    </header>
    <article class="card-body">
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th>編號</th>
          <th>帳號</th>
          <th>密碼</th>
          <th>權限</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="nl in accounts" :key="nl.id">
          <td>{{ nl.id }}</td>
          <td>{{ nl.account }}</td>
          <td>{{ nl.password }}</td>
          <td>{{ nl.permissions }}</td>
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
