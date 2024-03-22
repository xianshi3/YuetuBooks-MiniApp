<template>
  <view>
    <!-- Header Section -->
    <view class="page-header">
      <text class="header-title">我的订单</text>
    </view>

    <!-- Order Sections -->
    <view class="order-sections">
      <view class="order-section" @tap="goToOrderList('待付款')">
        <text class="section-title">待付款</text>
        <text class="section-count">{{ pendingPaymentCount }}</text>
      </view>
      <view class="order-section" @tap="goToOrderList('待发货')">
        <text class="section-title">待发货</text>
        <text class="section-count">{{ pendingShipmentCount }}</text>
      </view>
      <view class="order-section" @tap="goToOrderList('待收货')">
        <text class="section-title">待收货</text>
        <text class="section-count">{{ pendingReceiptCount }}</text>
      </view>
      <view class="order-section" @tap="goToOrderList('全部')">
        <text class="section-title">全部</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      pendingPaymentCount: 0,
      pendingShipmentCount: 0,
      pendingReceiptCount: 0,
    };
  },
  methods: {
    goToOrderList(status) {

      uni.navigateTo({
        url: `/pages/orderList/orderList?status=${status}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page-header {
  text-align: center;
  padding: 20rpx;
  background-color: #f0f0f0;
}

.header-title {
  font-size: 18px;
  font-weight: bold;
}

.order-sections {
  display: flex;
  justify-content: space-between;
  padding: 20rpx;

  .order-section {
    flex: 1;
    background-color: #fff;
    border: 1rpx solid #ccc;
    border-radius: 5rpx;
    padding: 20rpx;
    text-align: center;
    cursor: pointer;

    .section-title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10rpx;
    }

    .section-count {
      color: #007aff;
      font-weight: bold;
    }
  }
}
</style>
