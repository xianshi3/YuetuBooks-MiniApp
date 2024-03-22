<template>
  <view class="searchLayout">
    <u-search placeholder="请输入搜索内容" v-model="keyword" clearabled showAction actionText="搜索" animation @search="onSearch"
      @custom="onSearch"></u-search>

    <view class="historyList">
      <view class="item" v-for="(item,index) in historyList" :key="item">
        <view class="text">{{item}}</view>
        <view class="close" @click="onClose(index)">
          <u-icon name="close" size="16" color="#999"></u-icon>
        </view>
      </view>
    </view>

    <!-- 显示搜索结果 -->
    <view v-if="searchResults.length > 0" class="searchResults">
      <view class="resultItem" v-for="(result, index) in searchResults" :key="index" @click="goToBookDetail(result)">
        <image :src="result.image" class="resultImage" mode="aspectFit" />
        <view class="resultInfo">
          <text class="title">{{ result.title }}</text>
          <text class="price">¥{{ result.price }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        keyword: "",
        historyList: [],
        searchResults: [], // 存储搜索结果
      };
    },
    onLoad() {
      let historyList = uni.getStorageSync("historyList") || []
      this.historyList = historyList
    },
    methods: {
      // 搜索事件
      onSearch() {
        this.historyList.unshift(this.keyword)
        this.historyList = [...new Set(this.historyList)];
        uni.setStorageSync("historyList", this.historyList)

        // 模拟搜索结果，实际中应调用接口获取相关书籍信息
        if (this.keyword.toLowerCase() === "java") {
          this.searchResults = [{
              title: "Java In A Nutshell桌面快速参考",
              price: 200,
              image: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/01.jpg"
            },
            {
              title: "Java网络编程",
              price: 300,
              image: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/11.jpg"
            },
          ];
        } else {
          this.searchResults = [];
        }
      },
      // 删除历史
      onClose(index) {
        console.log(index);
        this.historyList.splice(index, 1);
        uni.setStorageSync("historyList", this.historyList)
      },
      // 点击书籍信息进入书籍详情页
      goToBookDetail(book) {
        console.log("跳转至书籍详情页", book);
        uni.navigateTo({
          url: '/pages/goods-detail/goods-detail'
        });
      }
    }
  }
</script>

<style lang="scss">
  .searchLayout {
    padding: 30rpx;

    .historyList {
      margin-top: 30rpx;

      .item {
        @include flex-box();
        font-size: 32rpx;
        padding: 30rpx 0;
        color: #333;
        border-bottom: 1px solid $border-color-light;
      }
    }

    .searchResults {
      margin-top: 20px;

      .resultItem {
        @include flex-box();
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ccc;
        cursor: pointer;

        .resultImage {
          width: 120rpx;
          height: 160rpx;
          margin-right: 20rpx;
        }

        .resultInfo {
          flex: 1;

          .title {
            font-size: 28rpx;
            margin-bottom: 10rpx;
          }

          .price {
            color: #f00;
          }
        }
      }
    }
  }
</style>