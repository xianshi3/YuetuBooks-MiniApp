<template>
  <view class="up-to-date">
    <view class="timeline">
      <view class="timeline-dot"></view>
      <view class="timeline-line"></view>
    </view>
    <view class="book-container">
      <view v-for="(bookGroup, groupIndex) in groupedBooks" :key="groupIndex">
        <text class="shelf-time">{{ bookGroup.time }}</text>
        <view class="books-in-group">
          <view class="book" v-for="(book, index) in bookGroup.books" :key="index">
            <image :src="book.cover" class="book-cover"></image>
            <view class="book-details">
              <text class="book-title">{{ book.title }}</text>
              <text class="book-price">{{ book.price }}</text>
              <text class="shelf-time">上架时间：{{ book.shelfTime }}</text>
            </view>
          </view>
        </view>
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
          title: 'Java In A Nutshell桌面快速参考',
          price: '￥40',
          cover: 'https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/01.jpg',
          shelfTime: '2024-03-20 10:00', 
        },
        {
          title: '通往夏天的隧道',
          price: '￥45',
          cover: 'https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/02.jpg',
          shelfTime: '2024-03-21 09:00', 
        },
        {
          title: 'Goodbye, Eri',
          price: '￥35',
          cover: 'https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/03.jpg',
          shelfTime: '2024-03-21 09:00', 
        },
        {
          title: '置身事内',
          price: '￥85',
          cover: 'https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/07.jpg',
          shelfTime: '2024-02-21 09:00', 
        },
        {
          title: '研究生高分论文写作（第四版）',
          price: '￥12',
          cover: 'https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/10.jpg',
          shelfTime: '2024-01-21 09:00', 
        },
      ],
    };
  },
  computed: {
    groupedBooks() {
      const groups = {};
      this.books.forEach(book => {
        const date = new Date(book.shelfTime);
        const dateString = date.toDateString();
        if (!groups[dateString]) {
          groups[dateString] = { time: dateString, books: [] };
        }
        groups[dateString].books.push(book);
      });
      return Object.values(groups);
    }
  }
};
</script>

<style lang="scss" scoped>
.up-to-date {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20rpx;
}

.timeline {
  position: relative;
  width: 4px;
  background-color: #ccc;
  margin-right: 20px;
}

.timeline-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ccc;
  position: absolute;
  top: -10px;
  left: -8px;
}

.timeline-line {
  width: 100%;
  height: 100%;
  background-color: #ccc;
  position: absolute;
  top: 0;
  left: 0;
}

.book-container {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.books-in-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20rpx;
}

.book {
  width: 45%;
  margin-bottom: 20rpx;
  background-color: #fff;
  border-radius: 10rpx;
  overflow: hidden;
  box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
}

.book-cover {
  width: 100%;
  height: 345rpx;
  object-fit: cover;
}

.book-details {
  padding: 20rpx;
}

.book-title {
  font-size: 30rpx;
  font-weight: bold;
  margin-bottom: 10rpx;
}

.book-price {
  font-size: 25rpx;
  font-weight: bold;
  color: #e44d26;
}

.shelf-time {
  font-size: 20rpx;
  color: #555;
}
</style>
