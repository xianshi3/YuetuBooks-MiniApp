<template>
  <view class="swioer">
    <!-- 启动关闭自动轮播 autoplay="true/false"-->
    <u-swiper :list="list" keyName="image" previousMargin="30" height='200' nextMargin="30" indicator
      indicatorMode="line" circular :autoplay="true"></u-swiper>
  </view>
</template>

<script>
  export default {
    name: "car-swiper",
    data() {
      return {
        list: [{
            image: 'https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/pexels-2.jpg',
          },{
            image: 'https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/publish.jpg',
          }, {
            image: 'https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/pexels-1.jpg',
          }],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swioer {}
</style>