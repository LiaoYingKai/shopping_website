import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
  data: [],
  shoppingCart: [],
  loginPage: false,
  registeredPage: false,
  isLogin: false,
  aboutUser: [],
}
const getters = {
  getData(state) {
    return state.data
  },
  getShoppingCart(state) {
    return state.shoppingCart
  },
  getIsLogin(state) {
    return state.loginPage
  },
  getIsRegistered(state) {
    return state.registeredPage
  },
  getUserInfo: (state) => (account) => {
    return JSON.parse(localStorage.getItem(account))
  },
  loginState(state) {
    return state.isLogin
  },
  getWhichUser(state) {
    return state.aboutUser
  }

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
  },
  changeLoginState(state) {
    state.loginPage = !state.loginPage
  },
  changeRegisteredState(state) {
    state.registeredPage = !state.registeredPage
  },
  registeredUser(state, userInfo) {
    let userArray = JSON.parse(localStorage.getItem('userInfo')) || []
    userArray.push(userInfo)
    localStorage.setItem(userInfo.account, JSON.stringify(userArray))
  },
  changeUser(state) {
    state.isLogin = !state.isLogin
  },
  aboutUser(state, userInfo) {
    state.aboutUser = userInfo
  }
}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})