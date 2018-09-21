<template >
<div class="">
  <Header/>
  <router-view />
  <Footer class="footerSeat" />
</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
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
