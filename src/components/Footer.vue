<template >
<div class="footer">
  <div class="footerContent">
    <div class="author">
      作者：Kai
    </div>
    <div class="technology">
      使用技術：HTML CSS JavaScript jQuery Vue-cli vuex
    </div>
    <div class="callMe">
      聯絡我：b10223052@yuntech.org.tw
    </div>
  </div>
</div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
@import "mixin";

.footer {
    width: 100%;
    background-color: #f74d18;
}
.footerContent {
    @include containerCenter;
    justify-content: space-between;
    align-items: center;
    display: flex;
    color: #fff;
    padding: 5px 0;
}
</style>
