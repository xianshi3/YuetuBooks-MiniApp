<template>
  <view class="goodsLayout">
    <view class="wrapper">
      <view class="title">共{{ goods.length }}件商品</view>
      <view class="list">
        <view class="row" v-for="(item, index) in goods" :key="index">
          <view class="left">
            <image :src="item.image" mode="aspectFill" class="img"></image>
            <view class="name">{{ item.name }}</view>
          </view>
          <view class="center">×{{ item.quantity }}</view>
          <view class="right">
            <view class="big">￥{{ item.price }}</view>
            <view class="small">￥{{ item.originalPrice }}</view>
            <view class="delete-btn" @click="removeItem(index)">删除</view> <!-- Add delete button -->
          </view>
        </view>
      </view>

      <view class="total">
        <text>
          已优惠￥{{ totalDiscount }}，
        </text>
        合计 <text class="big">￥{{ totalPrice }}</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "goods-list",
    data() {
      return {
        goods: [
          {
            name: "Java In A Nutshell桌面快速参考",
            quantity: 1,
            price: 30,
            originalPrice: 189,
            image: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/01.jpg",
          },
          {
            name: "通往夏天的隧道",
            quantity: 1,
            price: 45,
            originalPrice: 125,
            image: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/02.jpg",
          },
          {
            name: "置身事内",
            quantity: 1,
            price: 18,
            originalPrice: 35,
            image: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/07.jpg",
          },
        ],
      };
    },
    computed: {
      totalDiscount() {
        let totalOriginalPrice = this.goods.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
        let totalPrice = this.goods.reduce((total, item) => total + item.price * item.quantity, 0);
        return totalOriginalPrice - totalPrice;
      },
      totalPrice() {
        return this.goods.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    },
    methods: {
      removeItem(index) {
        this.goods.splice(index, 1);
      },
    },
  };
</script>

<style lang="scss">
.goodsLayout {
  .wrapper {
    background: linear-gradient(90deg, #11283b,#1e3f55, #27506c,#284e75);
    padding: 30rpx;
    margin-bottom: 15rpx;
    border-radius: 15rpx;

    .title {
      font-size: 38rpx;
      color: #ffffff;
      font-weight: bold;
    }

    .list {
      .row {
        @include flex-box();
        padding: 25rpx 0;
        border-bottom: 1px solid #ccc;

        .left {
          @include flex-box();
          width: 400rpx;

          .img {
            width: 64rpx;
            height: 64rpx;
            border-radius: 10rpx;
          }

          .name {

            padding-left: 15rpx;
            flex: 1;
            font-size: 30rpx;
            color: #ededed;
          }
        }

        .center {
          width: 100rpx;
          text-align: center;
          color: #efefef; 
        }

        .right {
          flex: 1;
          text-align: right;
          font-weight: bold;

          .big {
            font-size: 34rpx;
            color: rgb(255, 88, 85);;
            font-weight: bold;
          }

          .small {
            font-size: 22rpx;
            color: #ccc; 
            text-decoration: line-through;
            font-weight: bold;
          }

          .delete-btn {
            font-size: 24rpx;
            color: #ccc;
            cursor: pointer;
            margin-top: 10rpx;
            font-weight: bold;
          }
        }
      }
    }

    .total {
      padding: 30rpx 0;
      text-align: right;
      font-size: 30rpx;
      color: #dadada; 
      font-weight: bold;

      .big {
        font-size: 36rpx;
        font-weight: bold;
        color: rgb(236, 84, 79);; 
      }
    }
  }
}
</style>
