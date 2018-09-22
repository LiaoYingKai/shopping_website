<template >
<div class="header">
  <div class="personalInfo">
    <ul>
      <li>賣家中心</li>
      <li>追蹤</li>
      <li>下載</li>
    </ul>
    <ul>
      <li>幫助</li>
      <li @click="goRegister">註冊</li>
      <li @click="goLogin">登入</li>
    </ul>
  </div>
  <div class="mallBar">
    <router-link :to="{ name: 'Home', params: {} }" class="logo">
      FuckingKai
    </router-link>
    <div class="">
      <div class="filterBar">
        <input type="text" v-model="text" @keyup.enter="searchProduct">
        <button type="button">搜尋</button>

      </div>
      <div class="hotSearchBar">
        <ul>
          <li v-for="item in hotSearch">
            <a href="##">  {{item}}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="shoppingCart">
      <router-link :to="{ name: 'shoppingCart', params: {} }">
        <el-badge :value="shoppingCartQuantity" class="item">
          <font-awesome-icon icon="shopping-cart" />
        </el-badge>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      hotSearch: ["adidas 後背包", "蘋果手機殼", "女生短袖", "牛仔長裙", "兒童牙刷", "小米手帶", "sony 手機殼", "居家收納", "正韓洋裝", "nike air max"],
      text: ""
    }
  },
  methods: {
    searchProduct: function() {
      console.log(this.text)
      this.text = ""
    },
    goLogin: function() {
      this.$store.commit("changeLoginState")
    },
    goRegister: function() {
      this.$store.commit('changeRegisteredState')
    }
  },
  computed: {
    shoppingCartQuantity: function() {
      return this.$store.getters.getShoppingCart.length
    }
  }
}
</script>

<style lang="scss"scoped>
@import "mixin";
.header {
    background-color: #f74d18;
}
.personalInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include containerCenter;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        li {
            color: #fff;
            text-decoration: none;
            margin: 10px 0;
            padding: 0 15px;
            border-left: 1px solid #fff;
            cursor: pointer;
            &:first-child {
                border-left: 0;
                padding-left: 0;
            }
            &:last-child {
                padding-right: 0;
            }
            a {
                text-decoration: none;
                color: #fff;
            }
        }
    }
}
.mallBar {
    @include containerCenter;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
}
.logo {
    font-size: 48px;
    color: #fff;
    line-height: 1.3;
    text-decoration: none;
}
.filterBar {
    padding: 5px 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    width: 650px;
    input[type="text"] {
        width: 80%;
        font-size: 20px;
        padding: 5px 15px;
        border: 0;
    }
    button {
        border: 0;
        color: #fff;
        font-size: 20px;
        padding: 0 15px;
        background-color: #f74d18;
    }
}
.hotSearchBar {
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        justify-content: space-between;
        li {
            a {
                font-size: 12px;
                color: #fff;
                text-decoration: none;
            }
        }
    }
}
.shoppingCart {
    margin-right: 20px;
    svg {
        color: #fff;
        font-size: 24px;
        cursor: pointer;

    }
}
</style>
