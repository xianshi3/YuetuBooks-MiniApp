<template>
  <view class="page-container">
    <!-- 成功申领的书籍信息 -->
    <view v-if="successClaims.length > 0" class="section">
      <text class="subtitle">成功申领的书籍</text>
      <view class="claimItem card" v-for="(claim, index) in successClaims" :key="index">
        <text class="claimText">申领书籍：{{ claim.bookTitle }}</text>
        <text class="claimText">申领时间：{{ formatTime(claim.claimTime) }}</text>
        <view class="action-buttons">
          <text class="action-delete" @tap="deleteClaim('success', index)">删除</text>
          <text class="action-edit" @tap="editClaim('success', index)">申请修改</text>
        </view>
      </view>
    </view>

    <!-- 失败申领的信息 -->
    <view v-if="failedClaims.length > 0" class="section">
      <text class="subtitle">申请失败的信息</text>
      <view class="claimItem card" v-for="(claim, index) in failedClaims" :key="index">
        <text class="claimText">失败原因：{{ claim.failureReason }}</text>
        <text class="claimText">申领时间：{{ formatTime(claim.claimTime) }}</text>
        <view class="action-buttons">
          <text class="action-delete" @tap="deleteClaim('failed', index)">删除</text>
          <text class="action-edit" @tap="editClaim('failed', index)">申请修改</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      successClaims: [
        { bookTitle: 'Java Programming', claimTime: new Date() },
        { bookTitle: 'Python for Beginners', claimTime: new Date() },
      ],
      failedClaims: [
        { failureReason: '库存不足', claimTime: new Date() },
        { failureReason: '申请超时', claimTime: new Date() },
      ],
    };
  },
  methods: {
    formatTime(time) {
      // 格式化时间，这里可以根据需要自定义时间格式
      return time.toLocaleString();
    },
    deleteClaim(type, index) {
      if (type === 'success') {
        this.successClaims.splice(index, 1);
      } else if (type === 'failed') {
        this.failedClaims.splice(index, 1);
      }
    },
    editClaim(type, index) {
      // Implement edit functionality
      console.log('Edit claim:', type, this[type + 'Claims'][index]);
    },
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.section {
  width: 100%;
  max-width: 400px;
}

.subtitle {
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
}

.claimItem {
  margin-bottom: 10px;
}

.claimText {
  font-size: 16px;
  color: #ffffff;
}

.card {
  background: linear-gradient(90deg, #162b40, #1d3349, #21496d);
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.action-delete,
.action-edit {
  margin-left: 10px;
  padding: 5px 10px;
  border: 1px solid #007aff;
  border-radius: 5px;
  color: #007aff;
  cursor: pointer;
}
</style>
