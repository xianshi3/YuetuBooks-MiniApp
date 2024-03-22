<template>
  <view class="selfAddress">
    <view class="headTop">
      <view class="title">地址簿</view>
      <navigator class="addressBtn" url="/pages/address/edit">
        + 添加地址
      </navigator>
    </view>

    <view class="list">
      <view class="item" v-for="item in 3">
        <view class="head">
          <view class="user">张三,18066668888</view>
          <view class="select">
            <u-button v-if="false" color="#EC544F" plain size="mini" text="默认地址"></u-button>
            <u-button color="#666" v-else plain size="mini" text="设为默认"></u-button>
          </view>
        </view>
        <view class="more">
          山东省济南市高新区XXX楼
        </view>
      </view>
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

  .selfAddress {
    padding: 30rpx;

    .headTop {
      @include flex-box();
      font-size: 30rpx;
      font-weight: bold;

      .addressBtn {
        border: 1px solid #000;
        border-radius: 50rpx;
        padding: 6rpx 15rpx;
      }
    }

    .list {
      padding-top: 30rpx;

      .item {
        background: #fff;
        padding: 40rpx 20rpx;
        margin-bottom: 30rpx;
        border-radius: 15rpx;

        .head {
          @include flex-box();
          font-weight: bold;
        }

        .more {
          font-size: 28rpx;
          color: $text-font-color-3;
          padding-top: 10rpx;
        }
      }
    }
  }
</style>