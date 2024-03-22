<template>
  <view class="up-to-date">
    <view class="book" v-for="(book, index) in books" :key="index">
      <image :src="book.imgUrl" class="book-cover"></image>
      <view class="book-details">
        <text class="book-title">{{ book.name }}</text>
        <text class="book-price">
          <text class="original-price">原价: ¥{{ book.oprice }}</text>
          现价: ¥{{ book.pprice }}
        </text>
        <text class="discount">折扣: {{ book.discount }}折</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          id: 1,
          imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/01.jpg",
          name: "Java In A Nutshell桌面快速参考",
          pprice: "40",
          oprice: "189",
          discount: "5.2"
        },
        {
          id: 2,
          imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/02.jpg",
          name: "通往夏天的隧道",
          pprice: "45",
          oprice: "125",
          discount: "5.2"
        },
        {
          id: 3,
          imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/12.png",
          name: "前端开发实战",
          pprice: "20",
          oprice: "50",
          discount: "5.2"
        },
        {
          id: 4,
          imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/11.jpg",
          name: "Java网络编程",
          pprice: "49",
          oprice: "149",
          discount: "5.2"
        },
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.up-to-date {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  padding: 20rpx;
}

.book {
  width: 45%;
  margin-bottom: 20rpx; 
  margin-right: 5%; 
  background-color: #fff;
  border-radius: 10rpx;
  overflow: hidden;
  box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
}


.book-cover {
  width: 100%;
  height: 430rpx;
  object-fit: cover;
}

.book-details {
  padding: 20rpx;
}

.book-title {
  font-size: 30rpx; 
  font-weight: bold;
  color: #333;
  margin-bottom: 10rpx;
}

.book-price {
  font-size: 28rpx; 
  font-weight: bold;
  color: #e44d26;

  .original-price {
    text-decoration: line-through;
    margin-right: 5rpx;
    color: #999;
  }
}

.discount {
  font-size: 24rpx; 
  color: #00bcd4;
}
</style>
