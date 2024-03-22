<template>
  <view class="publish">
    <view class="pages-head">
      <view class="text">
        <text>发布页面</text>
      </view>
    </view>
    <view class="wrapper">
      <view class="image-box">
        <image src="https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/pexels-3.jpg"></image>
      </view>
      <view class="header">
        <view class="process">
          <view class="process_header">
            <view class="process_cell">
              <view class="process_icon">
                <image src="/static/images/Products-to-be-listed.png"></image>
                <view class="process_text">书籍上传</view>
              </view>
            </view>
            <view class="arrow">
              <image src="/static/images/in-progress.png"></image>
            </view>
            <view class="process_cell">
              <view class="process_icon">
                <image src="/static/images/send-out-goods.png"></image>
                <view class="process_text2">下单发货</view>
              </view>
            </view>
            <view class="arrow">
              <image src="/static/images/in-progress.png"></image>
            </view>
            <view class="process_cell">
              <view class="process_icon">
                <image src="/static/images/Transaction-successful.png"></image>
                <view class="process_text3">交易成功</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="footer">
        <view class="process_footer">
          <button class="more">更多交易规则></button>
        </view>
        <view class="view_buttons">
          <button class="button button-action button-box button-giant button-longshadow-left" @tap="ask">发布求购</button>
          <button
            class="button button-highlight button-box button-giant button-longshadow-right button-longshadow-expand donate"
            @tap="donate">发布闲置书籍</button>
        </view>
      </view>
      <view class="donate">
        <view class="card">
          <text class="card-title">闲置书籍捐赠</text>
          <text class="card-description">
           将不需要的书籍捐赠给我们，您的捐赠将有助于帮助不发达地区的学生获得更多的学习资源，共同助力教育事业发展
          </text>
          <u-popup :show="show" @close="close" @open="open">
            <view>
              <text>书籍类型</text>
              <view v-for="(type, index) in bookTypes" :key="index" class="popup-option" @click="selectBookType(type)">
                {{ type }}
              </view>
            </view>
          </u-popup>
          <button class="card-button" @click="show = true">点击捐赠</button>
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
      },
      ask() {
        uni.navigateTo({
          url: '../publish_book/ask_book/ask_book',
        });
      },
      donate() {
        uni.navigateTo({
          url: '../publish_book/input_book/input_book'
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .publish {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .pages-head {
      background: linear-gradient(90deg, #162b40, #1d3349, #21496d);
      height: 340rpx;
      display: flex;
      justify-content: center;
      align-items: center;

      .text {
        color: #fff;
        font-size: 30rpx;
      }
    }

    .wrapper {
      height: 100%;
      overflow: hidden;
      background: #fff;
      border-radius: 12px 12px 0 0;
      margin-top: -50px;
      padding: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;

      .image-box {
        image {
          height: 400rpx;
          width: 100%;
        }
      }

      .header {
        overflow: hidden;
        border-radius: 10px 10px 0 0;
        margin-top: -35px;
        padding: relative;
        z-index: 1;
        padding-top: 10rpx;
        background: #fff;

        .process {
          background: #fff;
          margin: 20rpx;
          border-collapse: 40rpx;
          border-radius: 10px;

          .process_header {
            margin: 0rpx;
            padding: 35rpx;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;
            align-items: center;

            .process_cell {
              padding-left: 20rpx;
              width: 180rpx;
              text-align: center;
            }

            .arrow {
              width: 70rpx;
              height: 70rpx;
              padding-right: 10rpx;
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              justify-content: space-around;
              align-items: center;

              image {
                width: 24rpx;
                height: 24rpx;
              }
            }

            .process_icon {
              width: 150rpx;
              height: 160rpx;

              image {
                width: 140rpx;
                height: 140rpx;
              }

              .process_text2 {
                padding-right: 18rpx;
              }

              .process_text3 {
                padding-right: 22rpx;
              }
            }
          }
        }
      }

      .footer {
        padding-top: 30rpx;

        .view_buttons {
          padding-top: 30rpx;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-around;

          .button-longshadow-left,
          .button-longshadow-right {
            border-radius: 10px;
            background: linear-gradient(90deg, #1b344e, #1d3349, #21496d);
          }

          .button-giant {
            font-size: 20px;
            height: 70px;
            width: 50%;
            line-height: 70px;
          }

          .button {
            color: #fff;
            font-weight: 300;
            font-family: 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
            text-decoration: none;
            text-align: center;
            margin: 5px;
            border: none;
          }

          .button-longshadow-left:hover,
          .button-longshadow-right:hover {
            background: linear-gradient(90deg, #4080bb, #4c8bc5, #3c86c7);
          }
        }
      }

      .donate {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 430rpx;

        .card {
          background: linear-gradient(90deg, #1b344e, #1d3349, #21496d);
          border-radius: rpx;
          padding: 50rpx;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 640rpx;
          width: 100%;
        }


        .card-title {
          color: #ffffff;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .card-description {
          font-size: 15px;
          color: #c8c8c8;
          margin-bottom: 20px;
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

        .card-button {
          background: linear-gradient(45deg, #ffb8c6, #f7417b, #f7417b, #ffb8c6);
          color: #ffffff;
          padding: 2px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          border: none;
          font-weight: bold;
          margin-top: 20px;
        }

        .card-button:hover {
          background: linear-gradient(90deg, #ffb8c6, #ffb8c6, #ffb8c6);
        }
      }

    }
  }
</style>