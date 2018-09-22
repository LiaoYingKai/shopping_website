<template>
<div class="sliderBar">
  <el-carousel height="400px">
    <el-carousel-item v-for="(item,index) in slides" :key="index">
      <img :src="`${item.src}`" alt="">
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
  data() {
    return {
      slides: [{
          src: "static/image/slider1.jpg"
        },
        {
          src: "static/image/slider2.jpg"
        }, {
          src: "static/image/slider3.jpg"
        }, {
          src: "static/image/slider4.jpg"
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
