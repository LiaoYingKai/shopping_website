<template >
<div class="shoppingCartPage">
  <ul>
    <li v-for="(item,index) in cartData">
      <div class="productImage">
        <img :src="`https://f.ecimg.tw${item.image}`">
      </div>
      <div class="productName">
        商品名稱：{{item.name}}
      </div>
      <div class="productUserWant">
        商品價格：{{item.price}}</br>
        <el-input-number v-model="item.number" :min="1" size="mini" v-if="item.isEdit"></el-input-number>
        <span v-else>購買數量：{{item.number}}</span>
      </div>
      <div class="productSubtotal">
        小計：{{item.price*item.number}}
      </div>
      <div class="productEdit">
        <font-awesome-icon icon="pen" class="penStyle" @click="editOrder(item)" />
        <font-awesome-icon icon="times" class="deleteStyle" @click="deleteOrder(index)" />
      </div>
    </li>
  </ul>
  <div class="totalPrice">
    合計：{{totalPrice()}}
    <button type="button" @click="checkout">結帳</button>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    cartData: function() {
      return this.$store.getters.getShoppingCart
    },
  },
  methods: {
    editOrder: function(item) {
      item.isEdit = !item.isEdit
    },
    deleteOrder: function(index) {
      this.$store.commit('deleteShoppingCartOrder', index)
    },
    totalPrice: function() {
      let price = 0
      this.cartData.forEach(item => {
        price += item.price * item.number
      })
      return price
    },
    checkout: function() {
      if (this.$store.getters.loginState) {
        console.log('付錢啦幹')
      } else {
        this.$store.commit('changeLoginState')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "mixin";
.shoppingCartPage {
    @include containerCenter;
    margin-bottom: 50px;
}
ul {
    list-style: none;
    padding: 0;
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 20px;
        border-bottom: 1px #fff solid;
    }
}
.productImage {
    width: 200px;
    img {
        width: 100%;
        height: auto;
    }
}
.productName {
    max-width: 400px;
    font-size: 20px;
}
.productUserWant {
    width: 150px;
    // text-align: center;
}
.productEdit {
    font-size: 24px;
    cursor: pointer;
    .deleteStyle {
        margin-left: 15px;
        color: red;

    }
}
.totalPrice {
    text-align: right;
    font-size: 24px;
    color: red;
}
button {
    @include buttonStyle(#ff5722,#fff,#ff6736) margin-left: 15px;
}
</style>
