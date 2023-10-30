<script lang="ts">
import { defineComponent } from 'vue'
import {mapActions, mapGetters} from "vuex";

export default defineComponent({
  name: 'AccountManage',
  data () {
    return {
      accounts: []
    }
  },
  mounted () {
    this.fetchAccountData()
  },
  computed: {
    ...mapGetters(['getAccountData'])
  },
  methods: {
    ...mapActions(['postAccountSel']),
    async fetchAccountData () {
      await this.postAccountSel()
      this.accounts = this.getAccountData
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
          <th style="display: flex; align-items: center">
            <span style="margin-right: 5px">編號</span>
            <div style="display: flex;flex-direction: column">
              <span style="transform: rotate(-90deg)">&gt;</span>
              <span style="transform: rotate(-90deg)">&lt;</span>
            </div>
          </th>
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
