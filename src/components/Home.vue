<template >
<div class="">
  <Header/>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumbStyle">
    <el-breadcrumb-item v-for="item in 4" :key="item">{{item}}</el-breadcrumb-item>
  </el-breadcrumb>
  <Login v-if="isLogin" />
  <Register v-if="isRegistered" />
  <router-view />
  <Footer class="footerSeat" />
</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Login from '@/components/Login'
import Register from '@/components/Register'

export default {
  data() {
    return {
      url: this.urlLoction
    }
  },
  components: {
    Header,
    Footer,
    Login,
    Register
  },
  // mounted() {
  //   console.log(this.$location.url())
  // },
  computed: {
    isLogin: function() {
      return this.$store.getters.getIsLogin
    },
    isRegistered: function() {
      return this.$store.getters.getIsRegistered
    },
    urlLoction: function() {
      return this.$location.url()
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'mixin';
.footerSeat {
    position: fixed;
    bottom: 0;
    z-index: 2;
}
.breadcrumbStyle {
    @include containerCenter;
    padding: 10px 0;
}
</style>
