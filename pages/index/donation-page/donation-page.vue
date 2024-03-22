<template>
  <view class="donation">
    <!-- 捐赠页面 -->
    <view class="donation-page">
      <view class="logo-container">
        <image src="/static/images/logo2.png" class="logo"></image>
        <view class="logo-text">阅途</view>
      </view>
      <view class="title">闲置书籍捐赠不发达地区</view>
      <view class="description">您的爱心传递温暖，捐赠书籍给不发达地区的孩子吧！</view>
      <view class="image-container">
        <image src="https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/pexels-0.jpg" mode="aspectFill">
        </image>
      </view>
      <u-popup :show="show" @close="close" @open="open">
        <view>
          <text class="popup-container">书籍类型</text>
          <view v-for="(type, index) in bookTypes" :key="index" class="popup-option" @click="selectBookType(type)">
            {{ type }}
          </view>
        </view>
      </u-popup>
      <button class="reset-button" @click="show = true">点击捐赠</button>

      <view class="apply-module">
        <view class="apply-content">
          <image src="/static/images/apply_for.png" mode="aspectFill" class="apply-image"></image>
          <view class="apply-text">
            <view class="apply-title">申领书籍</view>
            <view class="apply-description">欢迎申领您需要的书籍，填写申请后我们将尽快安排发放。</view>
            <button class="reset-button2" @tap="apply"  @click="applyBooks">点击申领</button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        bookTypes: ['小说', '散文', '诗歌', '科普', '教材'],
        selectedBookType: ''
      };
    },
    methods: {
      apply() {
        uni.navigateTo({
          url: '/pages/index/donation-page/apply-for',
        });
      },
      open() {
        // 弹窗打开时的逻辑
      },
      close() {
        this.show = false;
        // 弹窗关闭时的逻辑
      },
      selectBookType(type) {
        this.selectedBookType = type;
        this.show = false;

        uni.navigateTo({
          url: '/pages/index/donation-page/Book-info' 
        });
      },
      applyBooks() {
        // 处理申领书籍的逻辑
      }
    }
  };
</script>

<style lang="scss" scoped>
  .donation {
    background: linear-gradient(90deg, #1b344e, #233f5a, #21496d);
    height: 100vh;
    display: flex;
    justify-content: center;

    .logo-container {
      display: flex;
      align-items: center;
    }

    .logo {
      padding: 5px;
      width: 50px;
      height: 50px;
    }

    .logo-text {
      font-size: 20px;
      color: #fff;
    }

    .donation-page {
      padding: 20px;

      .title {
        padding-top: 5px;
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      .description {
        margin-bottom: 20px;
        color: #e4e4e4;
      }

      .image-container {
        width: 100%;
      }

      .image-container image {
        width: 100%;
      }
      .popup-container {
        display: flex;
        justify-content: center;
      }
      .popup-option {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        border-bottom: 1px solid #ccc; 
        margin-bottom: 5px; 
      }

      .popup-option:hover {
        background-color: #f0f0f0;
      }
    }
    

    .apply-module {
      margin-top: 20px;
      background-color: #f8f8f8;
      padding: 20px;
      border-radius: 8px;
    }

    .apply-content {
      display: flex;
      align-items: center;
    }

    .apply-image {
      width: 100px;
      height: 100px;
    }

    .apply-text {
      flex: 1;
    }

    .apply-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .apply-description {
      margin-bottom: 10px;
    }
    .reset-button {
      color: #ffffff;
      background: linear-gradient(45deg, #ffb8c6, #f7417b, #f7417b, #ffb8c6);
      font-weight: bold;
    }
    .reset-button:hover {
      background: linear-gradient(90deg, #ffb8c6, #ffb8c6, #ffb8c6);
    }

    .reset-button2 {
      color: #ffffff;
      font-weight: bold;
      background: linear-gradient(90deg, #162b40, #1d3349, #21496d);
    }
    .reset-button2:hover {
      background: linear-gradient(90deg, #4080bb, #4c8bc5, #3c86c7);
    }
  }
</style>
