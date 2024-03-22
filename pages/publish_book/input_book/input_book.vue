<template>
  <view>
    <view class="planA">
      <view class="search">
        <input type="text" placeholder="输入ISBN码" confirm-type="search" value="请输入ISBN码搜索书籍信息" @input="getISBN"
          @confirm="getbook" />
        <view class="sao" @tap="getScanisbn">
          <image class="green_sao" src="/static/images/scan.png" mode="asceptFit"></image>
        </view>
      </view>
    </view>
    <view class="planC">
      <view class="c_header">
        <view class="pen_write">基本信息</view>
      </view>
      <view class="form_footer">
        <view class="page__bd">
          <view class="weui-btn-area">
            <picker class="weui-btn" mode="multiSelector" @change="bindMultiPickerChange"
              @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray">
              <button type="default">类型选择</button>
            </picker>
          </view>
        </view>

        <view class="content">
          <view class="content_input">
            <label>书名</label>
            <input type="text" placeholder="请输入书名" @input="get_book_name" />
          </view>
          <view class="content_input">
            <label>作者</label>
            <input type="text" placeholder="请输入作者" @input="get_book_author" />
          </view>
          <view class="content_input">
            <label>原价</label>
            <input type="text" placeholder="请输入本书原价" @input="get_ori_price" />
          </view>
          <view class="content_input">
            <label>售价</label>
            <input type="text" placeholder="请输入出手价" @input="get_pre_price" />
          </view>
          <view class="content_input">
            <label>描述</label>
            <input type="text" placeholder="请输入书籍详情" @input="get_description" />
          </view>
          <picker class="weui-btn" mode="selector" @change="pickChange" :value="book.means" :range="array">
            <button type="deflault">取货方式选择</button>
          </picker>
        </view>
        <label>上传图片</label>
        <view class="image_uploader">
          <view class="weui-cell">
            <view class="weui-cell__bd">
              <view class="weui-uploader">
                <view class="weui-uploader__hd">
                  <view class="weui-uploader__info">{{ imn }}/2</view>
                </view>
                <view class="weui-uploader__bd">
                  <view class="weui-uploader__files" id="uploaderFiles">
                    <block v-for="(item, index) in book.pics" :key="index">
                      <view class="weui-uploader__file" @tap="previewImage" :id="item">
                        <image class="weui-uploader__img" :src="item" mode="aspectFill" :data-in="index"
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
        <view class="form_button">
          <view class="reset_button">
            <view class="button_detial">
              <text>重置</text>
            </view>
          </view>
          <view class="submit_button">
            <view class="button_detial" @tap="post_book">
              <text>提交</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  var app = getApp();
  export default {
    data() {
      return {
        isbn: '9787111128069',
        multiArray: [
          ['测试1', '测试2'],
          ['测试1.2', '测试1.3']
        ],
        array: ['上门取货', '送货上门', '皆可满足'],
        imn: 0,
        multiIndex: [0, 0],
        book: {
          type1: '',
          type2: '',
          name: '',
          author: '',
          ori_price: '',
          pre_price: '',
          pics: [],
          //http
          imgs: [],
          //220190518/..
          description: '',
          means: 0
        }
      };
    },
    onLoad: function(options) {},
    onReady: function() {},
    onShow: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    methods: {
      getISBN: function(e) {
        this.setData({
          isbn: e.detail.value
        });
      },

      get_book_name: function(e) {
        this.setData({
          'book.name': e.detail.value
        });
      },

      get_book_author: function(e) {
        this.setData({
          'book.author': e.detail.value
        });
      },

      get_ori_price: function(e) {
        this.setData({
          'book.ori_price': e.detail.value
        });
      },

      get_pre_price: function(e) {
        this.setData({
          'book.pre_price': e.detail.value
        });
      },

      get_description: function(e) {
        this.setData({
          'book.description': e.detail.value
        });
      },

      pickChange: function(e) {
        this.setData({
          'book.means': e.detail.value
        });
      },

      getScanisbn: function() {
        var that = this;
        uni.scanCode({
          success(res) {
            var str = res.data;
            str = str.trim();
            that.setData({
              'book.imgs': that.book.imgs.concat(str)
            });
            that.getbook();
          }
        });
      },

      chooseImage: function(e) {
        var that = this;
        let maxLength = 2;
        uni.chooseImage({
          count: 2,
          //最多上传两张照片
          sizeType: ['original', 'compressed'],
          // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'],
          // 可以指定来源是相册还是相机，默认二者都有
          success: function(res) {
            if (that.book.pics.length >= maxLength) {
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
                'book.pics': that.book.pics.concat(res.tempFilePaths)
              });
              var le = res.tempFilePaths.length;
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
                      'book.imgs': that.book.imgs.concat(str),
                      imn: Number(that.book.imgs.length) + le
                    });
                  }
                });
              }
            }
          }
        });
      },

      bindMultiPickerChange(e) {
        var that = this;
        that.setData({
          multiIndex: e.detail.value,
          'book.type1': e.detail.value[0] + 1,
          'book.type2': e.detail.value[1] + 20
        });
      },

      bindMultiPickerColumnChange(e) {},

      dimage: function(e) {
        var that = this;
        var images = that.book.pics;
        var imn = that.imn;
        uni.showModal({
          title: '提示',
          content: '确认删除图片吗',
          success: function(res) {
            if (res.confirm) {
              images.splice(e.currentTarget.dataset.in, 1);
              that.setData({
                'book.pics': images,
                'book.imgs': images,
                imn: imn - 1
              });
            } else if (res.cancel) {}
          }
        });
      },

      getType: function() {
        uni.request({
          url: app.globalData.domain + 'Goods/getType',
          method: 'POST',
          data: {
            openid: app.globalData.openid
          },
          success: function(res) {
            console.log(res.data);
          }
        });
      },

      post_book: function() {
        console.log(this.book);
        uni.request({
          url: app.globalData.domain + 'Goods/post_book',
          method: 'POST',
          data: {
            openid: app.globalData.openid,
            type1: this.book.type1,
            type2: this.book.type2,
            name: this.book.name,
            author: this.book.author,
            ori_price: this.book.ori_price,
            pre_price: this.book.pre_price,
            imgs: this.book.imgs,
            description: this.book.description,
            means: this.book.means
          },
          success: function(res) {
            console.log(res);
            if (res.data.status == 200) {
              uni.showToast({
                title: res.data.msg,
                icon: 'success'
              });
              uni.switchTab({
                url: '/pages/index/index'
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
  $primary-color: rgba(105, 73, 26, 0.904);
  $border-color: #e4e4e4;
  $text-font-color-1: #333;
  $text-font-color-3: #fff;

  .planA {
    padding-top: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .search {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      background-color: $border-color;
      width: 95%;
      border-radius: 10rpx;
      padding: 10rpx;

      input {
        width: 85%;
        border: 2rpx solid $border-color;
        border-radius: 10rpx;
        margin: 5rpx;
        font-size: 30rpx;
        font-weight: 200;
        color: $text-font-color-1;
      }

      .sao {
        width: 60rpx;
        height: 60rpx;
        margin: 0;
        padding: 5rpx;

        .pink_search,
        .green_sao {
          width: 50rpx;
          height: 50rpx;
        }
      }
    }
  }

  .planC {
    background-color: $text-font-color-3;
    margin: 5rpx;
    padding: 0 5rpx;
    border-radius: 10rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .c_header {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 100%;

      .pen_write {
        font-size: 24rpx;
        font-weight: 300;
        margin: 10rpx;
        width: 90%;
        text-align: left;
        color: $text-font-color-1;
      }
    }

    .form_footer {
      width: 95%;
      background-color: #fff;
      border-radius: 10rpx;

      label {
        font-size: 32rpx;
        font-weight: 50;
        color: $text-font-color-1;
      }

      input {
        font-size: 30rpx;
        font-weight: 100;
        margin-left: 20rpx;
        background-color: $border-color;
        width: 85%;
        border-radius: 10rpx;
        color: $text-font-color-1;
        padding: 10rpx;
      }
    }

    .type_choices label {
      margin: 10rpx;
    }

    .title {
      font-size: 34rpx;
      color: $primary-color;
      text-align: center;
      margin: 10rpx;
    }

    .item {
      width: 18%;
      border: 1rpx solid $primary-color;
      text-align: center;
      font-size: 28rpx;
      margin: 10rpx;
      color: $text-font-color-1;
      border-radius: 10rpx;
    }

    .content_input {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 10rpx;
    }

    .reset_button,
    .submit_button {
      width: 100rpx;
      height: 150rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .form_button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: linear-gradient(90deg, #1b344e, #1d3349, #21496d);
      
      .button_detial {
        font-size: 30rpx;
        color: #fff;
      }
    }
  }
</style>
