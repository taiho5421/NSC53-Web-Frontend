import { createStore } from 'vuex'

export default createStore({
  state: {
    productData: [],
    accountData: [],
    recordsData: [],
    modulesData: [],
    modulesCard: []
  },
  getters: {
    getProductData: (state) => state.productData,
    getAccountData: (state) => state.accountData,
    getRecordsData: (state) => state.recordsData,
    getModulesData: (state) => state.modulesData,
    getModulesCard: (state) => state.modulesCard
  },
  mutations: {
    setProductData: (state, data) => {
        state.productData = data
    },
    setAccountData: (state, data) => {
      state.accountData = data
    },
    setRecordsData: (state, data) => {
      state.recordsData = data
    },
    setModulesData: (state, data) => {
      state.modulesData = data
    },
    setModulesCard: (state, data) => {
      state.modulesCard = data
    }
  },
  actions: {
    async postProductSel ({ commit }) {
      const response = await fetch('http://localhost/php/nsrc53.php?cmd=productSel', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      })
      commit('setProductData', await response.json())
    },
    async postAccountSel ({ commit }) {
      const response = await fetch('http://localhost/php/nsrc53.php?cmd=accountSel', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      })
      commit('setAccountData', await response.json())
    },
    async postRecordsSel ({ commit }) {
      const response = await fetch('http://localhost/php/nsrc53.php?cmd=recordsSel', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      })
      commit('setRecordsData', await response.json())
    },
    async postModulesSel ({ commit }) {
      const response = await fetch('http://localhost/php/nsrc53.php?cmd=modulesSel', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      })
      commit('setModulesData', await response.json())
    },
    async postModuleCard ({ commit }) {
      const response = await fetch('http://localhost/php/nsrc53.php?cmd=modulesCard', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      })
      commit('setModulesCard', await response.json())
    }
  },
  modules: {
  }
})
