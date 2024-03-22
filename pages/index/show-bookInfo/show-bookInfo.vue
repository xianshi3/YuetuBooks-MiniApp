<template>
  <view class="show-book-info">
    <view v-for="(book, index) in books" :key="index" class="book">
      <view class="book-content">
        <image :src="book.imgs[0]" class="book-cover"></image>
        <view class="book-details">
          <text class="book-title">{{ book.name }}</text>
          <text class="book-author">发布者：{{ book.author }}</text>
          价格:
          <text class="book-price">{{ book.pre_price }}</text>
          <text class="book-means">取货方式：{{ meansArray[book.means] }}</text>
        </view>
      </view>
      <button class="post-request-button" @tap="input_book">上架</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          name: '求小说通往夏天的隧道_(:з」∠)_',
          author: '用户名2',
          pre_price: '¥45',
          means: 1, 
          imgs: ['https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/02.jpg'] 
        },
        {
          name: '求一本研究生高分论文写作(*^▽^*)',
          author: '用户名1',
          pre_price: '¥35',
          means: 1, 
          imgs: ['https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/10.jpg'] 
        },
      ],
      meansArray: {
        1: '自取',
        2: '邮寄',
      },
    };
  },
  methods: {
    input_book() {
      uni.navigateTo({
        url: '/pages/publish_book/input_book/input_book',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.show-book-info {
  justify-content: center;
  padding: 20rpx;

  .book {
    width: 100%;
    background-color: #fff;
    border-radius: 10rpx;
    overflow: hidden;
    box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
    margin-top: 20rpx;
    padding: 10rpx;

    .book-content {
      display: flex;
      align-items: center;

      .book-cover {
        width: 200rpx;
        height: 280rpx; 
        object-fit: cover;
        margin-right: 20rpx;
      }

      .book-details {
        flex: 1;

        .book-title {
          font-size: 30rpx; 
          font-weight: bold;
          margin-bottom: 10rpx;
        }

        .book-author,
        .book-means,
        .book-price {
          font-size: 25rpx; 
          color: #555;
          margin-bottom: 10rpx;
        }

        .book-price {
          color: #FF4500;
        }
      }
    }

    .post-request-button {
      margin-top: 10rpx;
      padding: 10rpx 20rpx;
      font-size: 20rpx;
      background: linear-gradient(90deg, #1b344e, #233f5a, #21496d);
      color: #fff;
      border: none;
      border-radius: 5rpx;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background: linear-gradient(90deg, #4080bb, #4c8bc5, #3c86c7);
      }
    }
  }
}
</style>
