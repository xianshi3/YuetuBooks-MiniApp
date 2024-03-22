<template>
  <view>
    <!-- Page Header -->
    <view class="page-header">
      <text class="header-title">我的捐赠的信息</text>
    </view>

    <!-- Donation List -->
    <view class="donation-list">
      <view v-for="(donation, index) in donations" :key="index" class="donation-item">
        <image :src="donation.imageUrl" class="item-image" mode="aspectFill" />
        <view class="item-info">
          <text class="item-title">{{ donation.bookName }}</text>
          <text class="item-quantity">捐赠数量：{{ donation.donationQuantity }}</text>
        </view>
        <view class="item-actions">
          <text class="action-view" @tap="viewDetails(index)">查看</text>
          <text class="action-edit" @tap="editDonation(index)">编辑</text>
          <text class="action-delete" @tap="deleteDonation(index)">删除</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      donations: [
        { id: 1, bookName: 'C程序设计语言', donationQuantity: 10,  imageUrl: 'https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/05.jpg' },
        { id: 2, bookName: 'Sql用于数据分析', donationQuantity: 15,  imageUrl: 'https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/06.jpg' },
      ],
    };
  },
  methods: {
    viewDetails(index) {
      const selectedDonation = this.donations[index];
      uni.navigateTo({
        url: `/pages/donationDetails/donationDetails?id=${selectedDonation.id}`,
      });
    },
    editDonation(index) {
      // Implement edit functionality
      console.log('Edit donation:', this.donations[index]);
    },
    deleteDonation(index) {
      const deletedDonation = this.donations.splice(index, 1)[0];
      this.$http.delete(`/api/donations/${deletedDonation.id}`)
        .then(response => {
          console.log('Donation deleted:', response.data);
        })
        .catch(error => {
          console.error('Failed to delete donation:', error);
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

.donation-list {
  padding: 30rpx;

  .donation-item {
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

      .item-quantity {
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
