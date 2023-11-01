import { createStore } from 'vuex'

export default createStore({
  state: {
    accountData: [],
    productData: [],
    recordsData: [],
    modulesData: [],
    modulesCard: []
  },
  getters: {
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
    }
  },
  modules: {
  }
})
