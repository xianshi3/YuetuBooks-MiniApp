<template>
  <view class="pro-item">
    <view class="pic">
      <image class="img" :src="item.thumb" mode="aspectFill"></image>
    </view>
    <view class="text">
      <view class="title">{{item.name}}</view>

      <view class="price">
        <view class="big">￥{{item.price}}</view>
        <view class="small">￥{{item.before_price}}</view>
      </view>

      <view class="discount">3折</view>
      <view class="numbox">
        <view class="skuSelect" v-if="false">选品相</view>

        <view class="uNum" v-else>
          <pro-num-box :item="item"></pro-num-box>
        </view>

      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "product-item",
    data() {
      return {
        value: 0
      }
    },
    props:{
      item:{
        type:Object,
        defaultValue() {
          return {
            
          }
        }
      }
    },
    methods: {
    
    }
  }
</script>

<style lang="scss">
  .pro-item {
    width: 100%;
    @include flex-box();
    padding: 25rpx;

    .pic {
      width: 180rpx;
      height: 180rpx;
      border-radius: 20rpx;
      overflow: hidden;

      .img {
        width: 100%;
        height: 100%;
      }
    }

    .text {
      flex: 1;
      padding-left: 20rpx;
      position: relative;

      .title {
        font-size: 34rpx;
        font-weight: bold;
        @include ellipsis();
      }

      .price {
        @include flex-box-set(start, end);
        font-weight: bold;
        padding: 25rpx 0;

        .big {
          font-size: 34rpx;
          color: #EC544F;
        }

        .small {
          font-size: 26rpx;
          opacity: 0.4;
          text-decoration: line-through;
          padding-left: 10rpx;
        }
      }

      .discount {
        font-size: 22rpx;
        color: brand-theme-color;
        padding: 3rpx 8rpx;
        border: 1rpx solid $brand-theme-color;
        display: inline-block;
        border-radius: 6rpx;
      }

      .numbox {
        position: absolute;
        right: 0;
        bottom: 0;

        .skuSelect {
          height: 40rpx;
          padding: 0 15rpx;
          background: $brand-theme-color;
          font-size: 28rpx;
          color: #fff;
        }


      }
    }
  }
</style>