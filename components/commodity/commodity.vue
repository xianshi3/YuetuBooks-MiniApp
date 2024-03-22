<template>
  <view class="commodity">
    <view class="commodity-item" @tap="goToDetail(item.id)" v-for="(item,index) in dataList" :key='index'>
      <image class="commodity-img" :src="item.imgUrl" mode=""></image>
      <view class="commodity-content">
        <text class='commodity-name'>{{item.name}}</text>
        <view>
          <text class='pprice'>￥{{item.pprice}}</text>
          <text class='oprice'>￥{{item.oprice}}</text>
        </view>
        <text class='discount'>{{item.discount}}折</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "commodity",
    data() {
      return {

      };
    },
    props: {
      dataList: Array
    },
    methods: {
      goToDetail(id) {
        // 点击商品项时跳转到商品详情页，传递商品 id
        wx.navigateTo({
          url: '../../pages/goods-detail/goods-detail?id=${id}',
        });
      },
    },
  }
</script>

<style lang="scss" scoped>
  .commodity {
    column-count: 3;
    column-gap: 20px;

    .commodity-item {
      margin-bottom: 20px;
      break-inside: avoid-column;

      .commodity-img {
        width: 100%;
        height: 300rpx;
        object-fit: cover;
      }

      .commodity-content {
        text-align: center;

        .commodity-name {
          font-weight: bold;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          color: #000;
          font-size: 25rpx;
          padding: 10rpx 20rpx;
        }
        .pprice {
          font-weight: bold;
          color: rgb(236, 84, 79);
        }
        .oprice {
          text-decoration: line-through;
          font-size: 24rpx;
          color: #999999;
        }

        .discount {
          border-radius: 4rpx;
          border: 1px solid rgb(236, 84, 79);;
          padding: 2rpx 10rpx;
          font-size: 20rpx;
          color: #FF3333;
        }
      }
    }
  }
</style>