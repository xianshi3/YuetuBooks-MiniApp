<template>
  <view class="goods-detail">
    <view class="page-header" :style="{ backgroundImage: 'url(' + goodsDetail.imageUrl + ')' }"></view>
    <view class="page-content">
      <text class="book-title">{{ goodsDetail.title }}</text>
      <text class="book-author">{{ goodsDetail.author }}</text>
      <view v-if="goodsDetailList.length">
        价格:
        <text class="book-price"> {{ goodsDetail.price }}</text>
        <commodity v-for="(item, index) in goodsDetailList" :key="index" :data="item" />
      </view>
      <view class="introduction">
        <text class="introduction-text">
          这本书是一本非常有趣的书籍，提供了关于 {{ goodsDetail.title }} {{ goodsDetail.author }}。
          本书涵盖了多个主题，包括......（添加更多介绍内容）。
        </text>
      </view>
      <view class="button-container">
        <button class="buy-button" @click="goPay">添加购物车</button>
        <button class="pay-button" @click="confirmPay">立刻购买</button>
      </view>
    </view>
  </view>
</template>

<script>
  import Commodity from '@/components/commodity/commodity.vue';

  export default {
    data() {
      return {
        goodsDetail: {
          title: 'Java In A Nutshell桌面快速参考',
          author: '品质:全新',
          price: '¥29.99',
          imageUrl: ('https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/01.jpg'),
        },
        goodsDetailList: [{
            name: 'Product 1',
            price: 19.99
          },
          {
            name: 'Product 2',
            price: 29.99
          },
          // 其他商品列表数据
        ],
      };
    },
    methods: {
      confirmPay() {
        console.log("点击了确认支付");
      },
      // 跳转至确认订单页面
      goPay() {
        uni.navigateTo({
          url: "../../pages/paypage/paypage"
        });
      },
    },
    // 省略其余代码
  };
</script>

<style lang="scss" scoped>
.goods-detail {
  .page-header {
    background-size: 100% 100%;
    height: 530px;
  }

  .page-content {
    padding: 20px;

    .book-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .book-author {
      color: #666;
      margin-bottom: 10px;
      font-style: italic;
    }

    .book-price {
      color:#FF4500;
      font-size: 18px;
      margin-bottom: 10px;
    }

    .buy-button,
    .pay-button {
      background-color: #21496d;
      color: white;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 20px;
    }

    .pay-button {
      background-color: #FF4500;
    }
    .introduction {
      margin-top: 20px;
    }

    .introduction-text {
      font-size: 16px;
      line-height: 1.5;
      color: #333;
    }
  }
}
</style>