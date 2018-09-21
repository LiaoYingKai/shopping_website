<template>
<div class="scrollContent" @scroll="isBottom">
  <div class="" v-if="loading" v-loading="loading">
    <!-- 加載中 -->
  </div>
  <div class="productList" v-else>
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
</div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      text: this.$route.params.name,
      number: 1,
    }
  },
  mounted: function() {
    if (this.$store.getters.getData.length === 0) {
      this.$store.dispatch('getApi', this.text)
    }
  },
  computed: {
    product: function() {
      return this.$store.getters.getData
    },
    loading: function() {
      return this.$store.getters.getData.length === 0
    }
  },
  methods: {
    isBottom: function() {
      let pageHeight = $(".scrollContent").height();
      let scrollTop = $(".scrollContent").scrollTop();
      let scrollHeight = $(".scrollContent").prop('scrollHeight')
      if (Math.ceil((pageHeight + scrollTop)) === scrollHeight) {
        this.number++;
        this.$store.dispatch('getApi', this.text, this.number)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import "mixin";
.scrollContent {
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 87vh;
}
.productList {
    width: 1024px;
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
