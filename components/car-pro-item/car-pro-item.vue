<template>
  <view class="carProItem">
    <view class="left">
      <view class="pic">
        <image class="img" :src="item.thumb" mode="aspectFill"></image>
      </view>
      <view class="text">
        <view class="tetle">{{item.name}}</view>
        <view class="sku" v-if="false">良好</view>
        <view class="price">
          <view class="big">￥{{item.price}}</view>
          <view class="small">￥{{item.before_price}}</view>
        </view>
      </view>
    </view>
    <view class="right">
      <pro-num-box :item="item"></pro-num-box>
    </view>
  </view>
</template>

<script>
  export default {
    name: "car-pro-item",
    data() {
      return {

      };
    },
    props: {
      item: {
        type: Object,
        defaultValue(){
          return {}
        }
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .carProItem {
    padding: 20rpx 0;
    border-bottom: 1px solid $border-color-light;
    position: relative;

    .left {
      width: 500rpx;
      @include flex-box();

      .pic {
        width: 110rpx;
        height: 110rpx;

        .img {
          width: 100%;
          height: 100%;
        }
      }

      .text {
        flex: 1;
        padding-left: 20rpx;

        .tetle {
          font-size: 28rpx;
          @include ellipsis(2);
        }

        .sku {
          font-size: 22rpx;
          color: #999;
          padding: 5rpx 0;
        }

        .price {
          @include flex-box-set(start);

          .big {
            font-weight: bold;
            font-size: 28rpx;
            color: #EC544F;
          }

          .small {
            font-size: 26rpx;
            color: $text-font-color-3;
          }
        }
      }
    }

    .right {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
</style>