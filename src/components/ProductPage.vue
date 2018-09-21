<template >
<div class="productPage">
  <div class="productStyle" v-for="item in product">
    <img :src="`https://f.ecimg.tw${item.picB}`">
    <div class="productContent">
      <div class="title">
        {{item.name}}
      </div>
      <div class="describe">
        {{item.describe}}
      </div>
      <div class="checkoutGroup">
        <span>價格：{{item.price}}</span>
        <el-input-number v-model="num" :min="1" size="medium"></el-input-number>
        <font-awesome-icon icon="shopping-cart" @click="addShoppingCart(item.picB,item.name,item.price,num)" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      text: this.$route.params.name,
      productId: this.$route.params.productId,
      num: 1,
    }
  },
  mounted: function() {
    if (this.$store.getters.getData.length === 0) {
      this.$store.dispatch('getApi', this.text)
    }
  },
  create: function() {
    this.addScrollEvent()
  },
  computed: {
    product: function() {
      return this.$store.getters.getData.filter(item => item.Id === this.productId)
    },
  },
  methods: {
    addShoppingCart: function(image, name, price, number) {
      if (number <= 0) {
        this.warnAdd()
        return
      } else {
        this.$store.commit("setShoppingCart", {
          image: image,
          name: name,
          price: price,
          number: number,
          isEdit: false
        })
        this.num = 1
        this.successAdd()
      }
    },
    successAdd: function() {
      this.$notify({
        title: '加入購物車',
        type: 'success',
        duration: 1000
      })
    },
    warnAdd: function() {
      this.$notify.error({
        title: '請只少購買一個商品',
        duratoin: 1000
      })
    },
  }
}
</script>

<style lang="scss" scoped>
@import "mixin";
.productPage {
    @include containerCenter;
}
.productStyle {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    img {
        width: 40%;
    }
}
.productContent {
    width: 55%;
    .title {
        text-align: center;
        font-size: 24px;
    }
    .describe {
        margin-top: 15px;
    }
    .checkoutGroup {
        margin-top: 15px;
        text-align: center;
        span {
            margin-right: 20px;
            font-size: 28px;
            color: red;
            line-height: 1;
        }
        svg {
            margin-left: 10px;
            color: red;
            cursor: pointer;
        }
    }
}
</style>
