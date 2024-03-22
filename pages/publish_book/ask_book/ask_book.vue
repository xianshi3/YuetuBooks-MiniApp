<template>
  <view class="by">
    <view class="title">
      <input type="text" placeholder="输入标题.." @input="get_title" />
    </view>
    <view class="sccv">
      <textarea placeholder="输入内容.." :minlength="min" :maxlength="max" class="scct" @input="inp"></textarea>
      <text class="scm">{{ texts }}</text>
      <text class="ctn">{{ currentWordNumber }}/{{ max }}</text>
    </view>
    <view class="ctit">
      上传图片
      <text>（长按图片删除）</text>
    </view>
    <view class="image_uploader">
      <view class="weui-cell">
        <view class="weui-cell__bd">
          <view class="weui-uploader">
            <view class="weui-uploader__hd">
              <view class="weui-uploader__info">
                <text>{{ imn }}/{{ immax }}</text>
              </view>
            </view>
            <view class="weui-uploader__bd">
              <view class="weui-uploader__files" id="uploaderFiles">
                <block v-for="(item, index) in ask.pics" :key="index">
                  <view class="weui-uploader__file" :id="item" @tap="previewImage">
                    <image class="weui-uploader__img" :data-in="index" :src="item" mode="widthFix"
                      @longpress="dimage" />
                  </view>
                </block>
              </view>
              <view class="weui-uploader__input-box">
                <view class="weui-uploader__input" @tap="chooseImage"></view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view style="background: white; font-size: 30rpx; color: #03bc03; padding: 0 0 0 2%">{{ em }}</view>
    <view class="view_buttons">
      <button class="button button-highlight button-box button-giant button-longshadow-right button-longshadow-expand"
        @tap="publish">发布</button>
    </view>
  </view>
</template>

<script>
  var app = getApp();
  export default {
    data() {
      return {
        immax: 7,
        min: 3,
        index: '',
        max: 300,
        imn: 0,
        currentWordNumber: 0,

        ask: {
          ask_title: '',
          ask_desc: '',
          pics: [],
          //http
          imgs: [] //220190518/..
        },
        value: '',
        texts: '',
        em: ''
      };
    },
    onLoad: function(options) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    methods: {
      get_title: function(e) {
        this.setData({
          'ask.ask_title': e.detail.value
        });
      },

      inp: function(e) {
        var that = this;
        var value = e.detail.value;
        that.setData({
          value: value
        });
        var len = parseInt(value.length);
        if (len <= this.min)
          this.setData({
            texts: '加油，3个字不是很多'
          });
        else if (len > this.min) {
          this.setData({
            'ask.ask_desc': e.detail.value
          });
        }
        if (len > this.max) {
          return;
        }
        this.setData({
          currentWordNumber: len //当前字数
        });
      },

      chooseImage: function(e) {
        var that = this;
        let maxLength = 7;
        uni.chooseImage({
          count: 7,
          //最多上传两张照片
          sizeType: ['original', 'compressed'],
          // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'],
          // 可以指定来源是相册还是相机，默认二者都有
          success: function(res) {
            if (that.ask.pics.length >= maxLength) {
              uni.showModal({
                content: '最多能上传' + maxLength + '张图片',
                showCancel: false,
                success: function(res) {
                  if (res.confirm) {}
                }
              });
            } else {
              const tempFilePaths = res.tempFilePaths;
              // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
              console.log(res);
              that.setData({
                'ask.pics': that.ask.pics.concat(res.tempFilePaths)
              });
              var le = Number(res.tempFilePaths.length);
              for (let i = 0; i < res.tempFilePaths.length; i++) {
                uni.uploadFile({
                  url: app.globalData.domain + 'Goods/upload',
                  // 仅为示例，非真实的接口地址
                  filePath: tempFilePaths[i],
                  name: 'pic',
                  success: function(res) {
                    console.log(res);
                    var str = res.data;
                    str = str.trim();
                    that.setData({
                      'ask.imgs': that.ask.imgs.concat(str),
                      imn: Number(that.ask.imgs.length) + le
                    });
                  }
                });
              }
            }
          }
        });
      },

      dimage: function(e) {
        var that = this;
        var images = that.ask.pics;
        var imn = that.imn;
        uni.showModal({
          title: '提示',
          content: '确认删除图片吗',
          success: function(res) {
            if (res.confirm) {
              images.splice(e.currentTarget.dataset.in, 1);
              that.setData({
                'ask.pics': images,
                'ask.imgs': images,
                imn: imn - 1
              });
            } else if (res.cancel) {}
          }
        });
      },

      previewImage: function(e) {
        uni.previewImage({
          current: e.currentTarget.id,
          // 当前显示图片的http链接
          urls: this.ask.pics // 需要预览的图片http链接列表
        });
      },

      publish: function() {
        uni.request({
          url: app.globalData.domain + 'Goods/ask_book',
          method: 'POST',
          data: {
            openid: app.globalData.openid,
            ask_title: this.ask.ask_title,
            ask_desc: this.ask.ask_desc,
            imgs: this.ask.imgs
          },
          success: function(res) {
            console.log(res);
            if (res.data.status == 200) {
              uni.showToast({
                title: res.data.msg,
                icon: 'success'
              });
              uni.switchTab({
                url: '/pages/home/home'
              });
            } else {
              uni.showToast({
                title: '提交失败',
                icon: 'success'
              });
            }
          }
        });
      }
    }
  };
</script>
<style lang="scss" scoped>
  .by {
    padding-top: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    height: 100vh;

    .title {
      width: 80%;
      margin: 20rpx;
      font-size: 32rpx;
      font-weight: bold;
      text-align: center;
      background-color: rgba(131, 130, 127, 0.21);
      padding: 10rpx;

      input {
        width: 100%;
        margin: 5rpx;
        font-size: 30rpx;
        font-weight: 200;
      }
    }

    .sccv {
      width: 80%;
      margin: 20rpx;

      .scct {
        width: 100%;
        padding: 10rpx;
        font-size: 28rpx;
        border: 1rpx solid #ccc;
        border-radius: 5rpx;
        margin-bottom: 10rpx;
        resize: vertical;
      }

      .scm {
        font-size: 28rpx;
      }

      .ctn {
        font-size: 28rpx;
      }
    }

    .ctit {
      width: 80%;
      margin: 20rpx;

      span {
        font-size: 30rpx;
        color: #03bc03;
        padding: 0 0 0 2%;
        background: white;
      }
    }

    .image_uploader {
      width: 80%;
      margin: 20rpx;

      .weui-cell {
        .weui-uploader {
          .weui-uploader__hd {
            .weui-uploader__info {
              text {
                font-size: 28rpx;
              }
            }
          }

          .weui-uploader__bd {
            .weui-uploader__files {
              .weui-uploader__file {
                image {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  border-radius: 5rpx;
                }

                .delete-icon {
                  position: absolute;
                  top: 5rpx;
                  right: 5rpx;
                  font-size: 24rpx;
                  color: #fff;
                  background-color: #ff4500;
                  border-radius: 50%;
                  padding: 5rpx;
                  cursor: pointer;
                }
              }
            }

            .weui-uploader__input-box {
              .weui-uploader__input {
                width: 120rpx;
                height: 120rpx;
                border: 1rpx dashed #ccc;
                border-radius: 5rpx;
                margin-top: 10rpx;
                cursor: pointer;

                i {
                  font-size: 36rpx;
                  color: #ccc;
                }
              }
            }
          }
        }
      }
    }

    .view_buttons {
      width: 80%;
      margin: 20rpx;

      button {
        width: 100%;
        padding: 15rpx;
        font-size: 28rpx;
        color: #fff;
        background: linear-gradient(90deg, #1b344e, #1d3349, #21496d);
        border: none;
        border-radius: 5rpx;
        cursor: pointer;
      }
    }
  }
</style>