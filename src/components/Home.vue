<template >
<div class="">
  <Header/>
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
  components: {
    Header,
    Footer,
    Login,
    Register
  },
  computed: {
    isLogin: function() {
      return this.$store.getters.getIsLogin
    },
    isRegistered: function() {
      return this.$store.getters.getIsRegistered
    }
  }
}
</script>

<style lang="scss" scoped>
.footerSeat {
    position: fixed;
    bottom: 0;
    z-index: 2;
}
</style>
