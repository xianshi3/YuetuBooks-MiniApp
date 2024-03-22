<template>
  <view class="orderDetail">

    <view class="payment">
      <icon type="error" color="#EC544F" size="50" v-if="false"></icon>
      <icon type="success" color="#19BE6B" size="50" v-else></icon>
      <view class="text">
        <view class="big">
          实付款￥33.6
          <text v-if="false">应付款￥55.8</text>
        </view>
        <view class="small">请等待商家配送</view>
      </view>
      <view class="complete" v-if="false">已完成</view>
    </view>


    <view class="info" v-if="false">
      <view class="delivery">
        <view class="btn">
          <u-icon name="bag" color="#fff" size="26"></u-icon>
          <text>商家外送</text>
        </view>
      </view>

      <view class="viewOut">
        <view class="title">订单信息</view>
        <view class="body">
          <view class="row">订单编号 123456</view>
          <view class="row">下单时间 2023-06-10 19:22:33</view>
          <view class="row">支付方式 支付宝支付</view>
        </view>
      </view>

      <view class="viewOut">
        <view class="title">收货地址</view>
        <view class="body">
          <view class="row">山东省济南市高新区XXX路XX号</view>
          <view class="row">张三-18566668888</view>
        </view>
      </view>
    </view>


    <view class="info" v-else>
      <view class="delivery other">
        <view class="btn">
          <u-icon name="map" color="#fff" size="22"></u-icon>
          <text>卖家发货</text>
        </view>
        <view class="time">
          6月10日
        </view>
      </view>

      <view class="viewOut">
        <view class="title">订单信息</view>
        <view class="body">
          <view class="row">订单编号 123456</view>
          <view class="row">下单时间 2023-06-05 15:30</view>
          <view class="row">支付方式 微信支付</view>
        </view>
      </view>

      <view class="viewOut">
        <view class="title">自提地址</view>
        <view class="body">
          <view class="row">
            山东省济南市历下区XX路XX号
            <text class="like"><u-icon name="arrow-right"></u-icon></text>
          </view>
          <view class="row">商家电话 13099998888</view>
        </view>
      </view>
    </view>

    <view class="goodsList">
      <goods-list></goods-list>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  page {
    background: $page-bg-color;
  }

  .orderDetail {
    .payment {
      @include flex-box-set(start);
      padding: 50rpx 30rpx;
      position: relative;

      .text {
        padding-left: 20rpx;
        color: $text-font-color-1;

        .big {
          font-size: 44rpx;
          font-weight: bold;
        }

        .small {
          font-size: 28rpx;
          color: $text-font-color-3;
        }
      }

      .complete {
        font-size: 32rpx;
        color: $text-font-color-3;
        font-weight: bold;
        border: 6rpx solid $text-font-color-3;
        width: 150rpx;
        height: 150rpx;
        border-radius: 50%;
        @include flex-box-set();
        transform: rotate(-20deg);
        position: absolute;
        right: 100rpx;
        top: 80rpx;

        &::after {
          display: block;
          content: "";
          border: 2rpx solid $text-font-color-3;
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform: scale(0.89);
          top: 0;
          left: 0;
          box-sizing: border-box;
        }
      }
    }

    .info {
      background: #fff;
      padding: 30rpx;
      border-radius: 30rpx 30rpx 0 0;

      .delivery {
        @include flex-box();

        .btn {
          @include flex-box-set();
          width: 250rpx;
          height: 60rpx;
          border-radius: 80rpx;
          background: #19BE6B;
          color: #fff;

          text {
            font-size: 34rpx;
          }
        }

        &.other {
          .btn {
            background: #FF9100;
          }

          .time {
            font-size: 32rpx;
            color: $brand-theme-color-aux;
          }
        }
      }

      .viewOut {
        padding: 30rpx 0;

        .title {
          font-size: 40rpx;
          padding-bottom: 15rpx;
        }

        .row {
          font-size: 30rpx;
          padding: 15rpx 0;
          color: $text-font-color-2;
          @include flex-box();
        }
      }
    }

    .goodsList {
      margin-top: 30rpx;
    }


  }
</style>