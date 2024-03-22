<template>
  <view class="searchLayout"  @click="search">
    <u-search placeholder="请输入搜索内容" v-model="keyword" :show-action="false"></u-search>

    <view class="historyList">
      <view class="item" v-for="(item,index) in historyList" :key="item">
        <view class="text">{{item}}</view>
        <view class="close" @click="onClose(index)">
          <u-icon name="close" size="16" color="#999"></u-icon>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
  export default {
    name: "car-search",
    data() {
      return {
        keyword: ''
      };
    },
    methods: {
      performSearch() {
        // 在这里执行搜索操作
        console.log("Performing search...");
      },
      search() {
        // 导航到搜索结果页面，并传递搜索关键字
        uni.navigateTo({
          url: `/pages/search_result/search_result?keyword=${this.keyword}`
        });
      }
    },
  };
</script>

<style lang="scss" scoped>
  .search {
    @include flex-box();

    .right {
      float: left;
      width: 60rpx;
      margin-left: 18rpx;
      height: 60rpx;
      border-radius: 15rpx;
      background-color: #EEEFEE;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #c5c5c5;
    }

    .right u-icon {
      /* 修改图标颜色为白色 */
      color: white;
    }
  }
</style>