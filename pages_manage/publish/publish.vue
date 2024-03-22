<template>
  <view>
    <text class="page-title">用户求购管理</text>
    <view class="request-list">
      <view v-for="(request, index) in userRequests" :key="index" class="request-row">
        <text>{{ request.id }}</text>
        <text>{{ request.title }}</text>
        <text>{{ request.author }}</text>
        <text>{{ request.maxPrice }}</text>
        <view class="actions">
          <button @tap="editRequest(request.id)">编辑</button>
          <button @tap="deleteRequest(request.id)">删除</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userRequests: [
        { id: 1, title: '书籍 1', author: '作者 1', maxPrice: '￥50.00' },
        { id: 2, title: '书籍 2', author: '作者 2', maxPrice: '￥80.00' },
      ],
    };
  },
  methods: {
    editRequest(id) {
      console.log(`编辑用户求购，ID：${id}`);

    },
    deleteRequest(id) {
      console.log(`删除用户求购，ID：${id}`);

    },
  },
};
</script>

<style scoped lang="scss">
.page-title {
  font-size: 24rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
}

.request-list {
  margin-top: 20rpx;

  .request-row {
    display: flex;
    justify-content: space-between;
    padding: 10rpx;
    border-bottom: 1px solid #ddd;

    .actions {
      display: flex;
      gap: 10rpx;

      button {
        background-color: #f3f3f3;
        padding: 5rpx 10rpx;
        border: none;
        border-radius: 5rpx;
      }
    }
  }
}
</style>
