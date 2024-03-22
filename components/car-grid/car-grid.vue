<template>
  <view class="grid">
    <u-grid :col="4">
      <u-grid-item>
        <u-icon @tap="update" name="hourglass-half-fill" :size="40" color="#d1d7dd"></u-icon>
        <view class="grid-text">最新</view>
      </u-grid-item>
      <u-grid-item>
        <u-icon @tap="pref" name="coupon-fill" :size="40" color="#d1d7dd"></u-icon>
        <view class="grid-text">优惠</view>
      </u-grid-item>
      <u-grid-item>
        <u-icon @tap="show" name="bag-fill" :size="40" color="#d1d7dd"></u-icon>
        <view class="grid-text">求购</view>
      </u-grid-item>
      <u-grid-item>
        <u-icon @tap="donate" name="gift" :size="40" color="#d1d7dd"></u-icon>
        <view class="grid-text">捐赠</view>
      </u-grid-item>
    </u-grid>
  </view>
</template>

<script>
  export default {
    name: "car-grid",
    data() {
      return {

      };
    },
    methods: {
      update() {
        uni.navigateTo({
          url: '../../pages/index/up-to-date/up-to-date',
        });
      },
      pref() {
        uni.navigateTo({
          url: '../../pages/index/preferential/preferential',
        });
      },
      show() {
        uni.navigateTo({
          url:'../../pages/index/show-bookInfo/show-bookInfo',
        })
      },
      donate() {
        uni.navigateTo({
          url:'../../pages/index/donation-page/donation-page',
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .grid {
    margin: 15rpx;
    padding: 20rpx 10rpx;
    border-radius: 10px 10px 10px 10px;
    padding: relative;
    background: linear-gradient(90deg, #1b344e, #152535, #21496d);

    .grid-text {
      font-size: 25rpx;
      margin-top: 4rpx;
      color: #dfe6ec;
    }
  }
</style>