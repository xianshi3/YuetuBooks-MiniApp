<template>
  <view class="customHead" :style="{height:totalHeight+'px'}">
    <view class="bg">
      
    </view>
    <view class="container">
      <view class="statusBar" :style="{height:statusBarHeight + 'px'}"></view>
      <view class="service" :style="{height:titleBarHeight +'px'}" v-if="!foldState">
        <view class="kefu">
          <u-icon name="server-fill" size="22" color="#fff"></u-icon>
        </view>
        <navigator v-if="user" url="/pages_manage/index/index" class="manage">
        	<u-icon name="bag-fill" size="22" color="#fff"></u-icon>
        	后台管理 
        </navigator>
      </view>
      <view class="body" :class="foldState?'fold':''" :style="{height:bodyBarHeight + 'px'}">
        <view class="brand">
          <view class="pic">
            <image class="img" src="../../static/images/logo2.png" mode="aspectFill"></image>
          </view>
          <view class="text">
            <view class="title">
              <text class="font">阅途</text>
              <u-icon class="icon" name="more-circle" size="22" color="#fff"></u-icon>
            </view>
            <view class="des">二手书交易小程序</view>
          </view>
        </view>
        <view class="code">
          <view class="pic">
            <image class="img" src="../../static/images/scan.png" mode="aspectFill"></image>
          </view>
          <text class="scan">ISBN</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import store from '@/store';
  import {
    mapState,
    mapGetters
  } from "vuex"
  export default {
    name: "custom-head-bar",
    data() {
      return {
        // statusBarHeight: 0,
        // titleBarHeight: 0
      };
    },
    props: {

    },
    computed: {
      ...mapGetters(["statusBarHeight", "titleBarHeight",
        "bodyBarHeight", "totalHeight", "foldState"
      ]),
      user() {
        return store.state.user;
      },
      // totalHeight() {
      //   if (this.foldState) return this.statusBarHeight + this.titleBarHeight + 10
      //   return this.statusBarHeight + this.titleBarHeight + 100 + 10
      // },
      // bodyBarHeight() {
      //   if (this.foldState) return this.titleBarHeight
      //   return 100
      // }
    },
    mounted() {
      // let systemInfo = uni.getSystemInfoSync();
      // this.statusBarHeight = systemInfo.statusBarHeight || 20;

      // // #ifdef MP-WEIXIN
      // let menuBtnInfo = uni.getMenuButtonBoundingClientRect();
      // this.titleBarHeight = menuBtnInfo.height + (menuBtnInfo.top - this.statusBarHeight) * 2
      // // #endif

      // // #ifndef MP-WEIXIN
      // this.titleBarHeight = 40
      // // #endif
    }
  }
</script>

<style lang="scss">
  .customHead {
    z-index: 1;
    height: 400rpx;
    overflow: hidden;
    position: relative;

    .bg {
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #1b344e, #152535, #153149);
    }

    .container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      .service {
        padding-left: 30rpx;
        @include flex-box-set(start);
        color: #fff;

        .manage {
          padding-left: 20rpx;
          @include flex-box-set(start);
        }
      }

      .body {
        @include flex-box();
        padding: 0 45rpx;
        height: 100px;
        transition: 0.3s;

        .brand {
          width: 580rpx;
          @include flex-box-set(start);

          .pic {
            width: 110rpx;
            height: 110rpx;
            overflow: hidden;
            transition: 0.3s;

            .img {
              width: 100%;
              height: 100%;
            }
          }


          .text {
            flex: 1;
            padding: 0 30rpx;
            color: #fff;

            .title {
              font-size: 36rpx;
              font-weight: 800;
              display: flex;
              align-items: center;

              .font {
                margin-right: 10rpx;
              }
            }

            .des {
              font-size: 26rpx;
              width: 100%;
              opacity: 0.8;
              padding-top: 5rpx;
              @include ellipsis();
            }
          }
        }

        .code {
          width: 80rpx;
          border-left: 1px solid rgba(255, 255, 255, 0.6);
          @include flex-box-set(between);
          flex-direction: column;

          .pic {
            width: 40rpx;
            height: 40rpx;

            .img {
              width: 100%;
              height: 100%;
            }
          }

          .scan {
            font-size: 15rpx;
            color: #fff;
            text-align: center;
          }
        }

        &.fold {
          padding: 0 30rpx;

          .brand {
            .pic {
              width: 60rpx;
              height: 60rpx;
            }

            .text {
              padding-left: 15rpx;

              .title {
                font-size: 28rpx;

                .icon {
                  transform: scale(0.8);
                }
              }
            }

            .des {
              display: none;
            }
          }

          .code {
            display: none;
          }
        }

      }
    }
  }
</style>