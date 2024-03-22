```html
<template>
  <view class="user-container">
    <view class="user-head">
      <view class="text">
        <u-avatar v-if="user" :src="src" size="70" class="avatar"></u-avatar>
        <u-avatar v-if="!user" size="70" class="avatar"></u-avatar>
        <text v-if="!user" class="user-text">未登陆，请登陆</text>
        <text v-if="user" class="user-text">已登录，用户名: {{ user.username }}</text>
      </view>
    </view>
    <view class="user">
      <view class="goodstatus">
        <view @tap="navToOrderList2"><text>待支付</text></view>
        <view @tap="navToOrderList2"><text>待发货</text></view>
        <view @tap="navToOrderList2"><text>已完成</text></view>
      </view>

      <view class="login-container">
        <button @tap="login" class="login-button">{{ user ? '切换账号' : '用户登录' }}</button>
      </view>
      
      <carbon-emissionStats></carbon-emissionStats>

      <view class="button-row">
        <view class="manage">
          <navigator url="../order/order" class="navigator">
            <u-icon name="order" color="$brand-theme-color-aux" size="24"></u-icon>
            我的订单
          </navigator>
        </view>
        <view class="manage">
          <navigator @tap="navToAsk" class="navigator">
            <u-icon name="bag-fill" color="$brand-theme-color-aux" size="24"></u-icon>
            我的求购
          </navigator>
        </view>
      </view>

      <view class="button-row">
        <view class="manage">
          <navigator url="../user/container/container" class="navigator">
            <u-icon name="file-text-fill" color="$brand-theme-color-aux" size="24"></u-icon>
            我的发布
          </navigator>
        </view>
        <view class="manage">
          <navigator url="../user/donation/donation" class="navigator">
            <u-icon name="gift-fill" color="$brand-theme-color-aux" size="24"></u-icon>
            我的捐赠
          </navigator>
        </view>
      </view>

      <view class="button-row">
        <view class="manage">
          <navigator url="../user/apply/apply" class="navigator">
            <u-icon name="edit-pen-fill" color="$brand-theme-color-aux" size="24"></u-icon>
            我的申领
          </navigator>
        </view>
        <view class="manage" v-if="user">
          <navigator url="/pages_manage/index/index" class="navigator">
            <u-icon name="setting" color="$brand-theme-color-aux" size="24"></u-icon>
            后台管理
          </navigator>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import store from '@/store';
  export default {
    data() {
      return {
        src: '/static/images/logo2.png',
      }
    },
    computed: {
      user() {
        return store.state.user;
      },
    },
    methods: {
      login() {
        uni.navigateTo({
          url: '../user/login/login',
        });
      },
      navToAsk: function() {
        uni.navigateTo({
          url: '/pages/user/comment/comment'
        });
      },
      navToOrderList2: function() {
        uni.navigateTo({
          url: '../../pages_manage/list/list'
        });
      }
    },
  };
</script>

<style lang="scss" scoped>
  .user-container {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .user-head {
      background: linear-gradient(90deg, #162b40, #1d3349, #21496d);
      height: 550rpx;
      display: flex;
      justify-content: center; // 在水平方向上居中
      align-items: center; // 在垂直方向上居中

      .text {
          color: #fff;
          padding-top: 40rpx;
          display: flex;
          flex-direction: column;
          align-items: center; 
          .avatar {
            margin-top: 10rpx; 
          }
      
          .user-text {
            padding-top: 20rpx;
            text-align: center;
            font-size: 20px;
          }
        }
    }

    .user {
      height: 100%;
      overflow: hidden;
      border-radius: 10px 10px 0 0;
      margin-top: -10px;
      padding: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;

      .goodstatus {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 80rpx;
        align-items: center;
        background: rgb(247, 247, 247);

        view {
          text {
            display: block;
            text-align: center;
            font-size: 16px;
            cursor: pointer;
            padding: 10rpx;
            border-radius: 20rpx;
            transition: background-color 0.3s;

            &:hover {
              background-color: #f0f0f0;
            }

            &:active {
              background-color: #e0e0e0;
            }
          }
        }
      }

      .login-container {
        padding-top: 20rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .login-button {
        margin-top: 5px;
        padding: 8px 60px;
        background: linear-gradient(90deg, #1b344e, #1d3349, #21496d);
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
      }

      .button-row {
        display: flex;
        justify-content: center;
        margin-top: 20px;

        .manage {
          margin: 0 10px;
        }
      }

      .manage {
        .navigator {
          border-radius: 5px;
          border: none;
          padding: 10px 20px;
          background: linear-gradient(90deg, #1b344e, #1d3349, #21496d);
          @include flex-box();
          color: #fff;
          font-size: 20px;
        }
        .navigator:hover {
          background: linear-gradient(90deg, #4080bb, #4c8bc5, #3c86c7);
        }
      }
    }
  }
</style>