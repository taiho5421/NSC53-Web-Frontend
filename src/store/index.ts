import { createStore } from 'vuex'

export default createStore({
  state: {
<<<<<<< HEAD
    accountData: [],
    productData: [],
=======
    productData: [],
    accountData: [],
>>>>>>> 5406860f4e0ef11849a5cf9ecd5f68e3395330e7
    recordsData: [],
    modulesData: [],
    modulesCard: []
  },
  getters: {
<<<<<<< HEAD
    getAccountData: state => state.accountData,
    getProductData: state => state.productData,
    getRecordsData: state => state.recordsData,
    getModulesData: state => state.modulesData,
    getModulesCard: state => state.modulesCard
  },
  mutations: {
    setAccountData: (state, data) => state.accountData = data,
    setProductData: (state, data) => state.productData = data,
    setRecordsData: (state, data) => state.recordsData = data,
    setModulesData: (state, data) => state.modulesData = data,
    setModulesCard: (state, data) => state.modulesCard = data
  },
  actions: {
    async postAccountDataSel ({ commit }) {
      commit('setAccountData', await (await fetch('http://localhost/php/nsrc53.php?cmd=accountDataSel')).json())
    },
    async postProductDataSel ({ commit }) {
      commit('setProductData', await (await fetch('http://localhost/php/nsrc53.php?cmd=productDataSel')).json())
    },
    async postRecordsDataSel ({ commit }) {
      commit('setRecordsData', await (await fetch('http://localhost/php/nsrc53.php?cmd=recordsDataSel')).json())
    },
    async postModulesDataSel ({ commit }) {
      commit('setModulesData', await (await fetch('http://localhost/php/nsrc53.php?cmd=modulesDataSel')).json())
    },
    async postModulesCardSel ({ commit }) {
      commit('setModulesCard', await (await fetch('http://localhost/php/nsrc53.php?cmd=modulesCardSel')).json())
=======
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
>>>>>>> 5406860f4e0ef11849a5cf9ecd5f68e3395330e7
    }
  },
  modules: {
  }
})
