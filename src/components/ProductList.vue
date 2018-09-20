<template>
<div class="productList">
  <div class="productArrangement">
    <div class="productShow" v-for="item in product">
      <router-link :to="`/Home/${text}/${item.Id}`">
        <div class="title">
          {{item.name}}
        </div>
        <img :src="`https://f.ecimg.tw${item.picB}`" alt="">
        <div class="price">
          <span>價格：</span>{{item.price}}
        </div>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      text: this.$route.params.name,
    }
  },
  mounted: function() {
    this.$store.dispatch('getApi', this.text)
  },
  computed: {
    product: function() {
      return this.$store.getters.getData
    }
  },
}
</script>

<style lang="scss" scoped>
@import "mixin";
.productList {
    @include containerCenter;
}
.productArrangement {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.productShow {
    margin-bottom: 10px;
    width: 180px;
    padding: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    img {
        margin-top: 10px;
        width: 100%;
    }
    a {
        display: inline-block;
        color: #000;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        height: 100%;
    }
}
.price {
    margin-top: 10px;
    span {
        line-height: 2;
    }
}
</style>
