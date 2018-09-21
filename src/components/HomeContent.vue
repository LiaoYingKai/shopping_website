<template>
<div class="homeContent">
  <div class="sliderStyle">
    <SliderBar class="container" />
  </div>
  <div class="productList">
    全部類別
    <ul>
      <li v-for="product in productList">
        <router-link :to="`/Home/${product}`">
          <div class="title">
            {{product}}
          </div>
          <div class="button">
            按我前往
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import SliderBar from '@/components/SliderBar'
export default {
  data() {
    return {
      productList: ["apple", "asus", "htc", "化妝品", "男生用品", "生活用品", "3C產品", "女生用品"]
    }
  },
  components: {
    SliderBar,
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('resetData')
    next()
  },
}
</script>

<style lang="scss" scoped>
@import 'mixin';
.homeContent {}
.sliderStyle {
    padding: 20px 0;
    background-color: #fff;
}
.container {
    @include containerCenter;
}
.productList {
    @include containerCenter;
    margin-top: 20px;
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        li {
            background-color: #fff;
            border-radius: 2px;
            padding: 10px;
            &:hover {
                box-shadow: 0 0 1px 1px rgba(0,0,0,0.25);
                z-index: 2;
            }
            a {
                display: inline-block;
                color: #000;
                text-decoration: none;
            }
            .title {
                text-align: center;
            }
            .button {
                margin-top: 100px;
                padding: 5px 10px;
                border-radius: 3px;
                color: #fff;
                background-color: red;
            }
        }
    }
}
</style>
