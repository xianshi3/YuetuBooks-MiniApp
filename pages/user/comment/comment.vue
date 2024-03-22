<template>
  <view>
    <!-- Page Header -->
    <view class="page-header">
      <text class="header-title">我的求购书籍</text>
    </view>

    <!-- Purchase Requests List -->
    <view class="purchase-list">
      <view v-for="(request, index) in purchaseRequests" :key="index" class="purchase-item">
        <image :src="request.imageUrl" class="item-image" mode="aspectFill" />
        <view class="item-info">
          <text class="item-title">{{ request.bookName }}</text>
          <text class="item-price">期望价格：¥{{ request.expectedPrice }}</text>
        </view>
        <view class="item-actions">
          <text class="action-view" @tap="viewDetails(index)">查看</text>
          <text class="action-edit" @tap="editRequest(index)">编辑</text>
          <text class="action-delete" @tap="deleteRequest(index)">删除</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      purchaseRequests: [
        { id: 1, bookName: '通往夏天的隧道', expectedPrice: 45, imageUrl: 'https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/02.jpg' },
        { id: 2, bookName: 'Goodbye, Eri', expectedPrice: 35, imageUrl: 'https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/03.jpg' },
      ],
    };
  },
  methods: {
    viewDetails(index) {
      const selectedRequest = this.purchaseRequests[index];
      uni.navigateTo({
        url: `/pages/purchaseDetails/purchaseDetails?id=${selectedRequest.id}`,
      });
    },
    editRequest(index) {
      // Implement edit functionality
      console.log('Edit request:', this.purchaseRequests[index]);
    },
    deleteRequest(index) {
      const deletedRequest = this.purchaseRequests.splice(index, 1)[0];
      this.$http.delete(`/api/purchaseRequests/${deletedRequest.id}`)
        .then(response => {
          console.log('Purchase request deleted:', response.data);
        })
        .catch(error => {
          console.error('Failed to delete purchase request:', error);
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

.purchase-list {
  padding: 30rpx;

  .purchase-item {
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5rpx;
    padding: 20rpx;
    margin-bottom: 20rpx;

    .item-image {
      width: 120rpx;
      height: 120rpx;
      margin-right: 20rpx;
      border-radius: 5rpx;
    }

    .item-info {
      flex: 1;

      .item-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5rpx;
      }

      .item-author {
        color: #666;
        margin-bottom: 5rpx;
      }

      .item-price {
        color: #007aff;
        font-weight: bold;
      }
    }

    .item-actions {
      display: flex;

      .action-view,
      .action-edit,
      .action-delete {
        margin-right: 10rpx;
        padding: 5rpx 10rpx;
        border: 1px solid #007aff;
        border-radius: 5rpx;
        color: #007aff;
        cursor: pointer;
      }
    }
  }
}
</style>
