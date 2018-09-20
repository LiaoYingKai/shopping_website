import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const state = {
  data: [],
  shoppingCart: []
}
const getters = {
  getData(state) {
    return state.data
  },
  getShoppingCart(state) {
    return state.shoppingCart
  },
}
const actions = {
  getApi(context, product) {
    axios.get(`https://cors-anywhere.herokuapp.com/https://ecshweb.pchome.com.tw/search/v3.3/all/results?page=1&q=${product}&sort=rnk/dc`)
      .then(respone => {
        let data = respone.data.prods
        context.commit('setData', data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
const mutations = {
  setData(state, apiData) {
    state.data = [...apiData]
    state.data.forEach(item => {
      item.number = 1
    })
  },
  setShoppingCart(state, data) {
    state.shoppingCart.push(data)
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})