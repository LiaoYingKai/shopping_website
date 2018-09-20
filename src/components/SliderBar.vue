<template>
<div class="sliderBar">
  <div class="" v-for="slide in slides">
    <Slide :slide="slide" />
  </div>
</div>
</template>

<script>
import Slide from "@/components/Slide"
export default {
  data() {
    return {
      slides: [{
          src: "static/image/slider1.jpg"
        },
        // {
        //   src: "static/image/slider2.jpg"
        // }, {
        //   src: "static/image/slider3.jpg"
        // }, {
        //   src: "static/image/slider4.jpg"
        // }
      ]
    }
  },
  components: {
    Slide
  }
}
</script>

<style lang="scss" scoped>
</style>
