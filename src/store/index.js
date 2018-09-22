import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const state = {
  data: [],
  shoppingCart: [],
}
const getters = {
  getData(state) {
    return state.data
  },
  getNeedData(state, index) {
    let moreDataArray = []
    for (let i = 0; i < 5; i++) {
      moreDataArray.push(state.data[index + i])
    }
    return moreDataArray
  },
  getShoppingCart(state) {
    return state.shoppingCart
  },
}
const actions = {
  getApi(context, productInfo) {
    axios.get(`https://cors-anywhere.herokuapp.com/https://ecshweb.pchome.com.tw/search/v3.3/all/results?page=${productInfo.number}&q=${productInfo.product}&sort=rnk/dc`)
      .then(respone => {
        let apiData = respone.data.prods
        context.commit('setData', apiData)
      })
      .catch(error => {
        console.log(error)
      })
  },
  moreProduct(context, product) {

  }
}
const mutations = {
  setData(state, apiData) {
    apiData.forEach(item => {
      item.number = 1
      state.data.push(item)
    })
  },
  moreData(state, apiData) {
    apiData.forEach(item => {
      item.number = 1
      state.data.push(item)
    })
  },
  setShoppingCart(state, data) {
    state.shoppingCart.push(data)
  },
  resetData(state) {
    state.data = []
  },
  deleteShoppingCartOrder(state, index) {
    state.shoppingCart.splice(index, index + 1)
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})