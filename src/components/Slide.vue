<template >
<div class="slide">
  <img :src="`${slide.src}`" alt="">
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['slide']
}
</script>

<style lang="scss" scoped>
.slide {
    img {
        width: 1024px;
        height: 400px;
    }
}
</style>
