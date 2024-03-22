<template>
  <view>
    <text class="list-title">图书列表</text>
    <view class="book-table">
      <view v-for="(book, index) in books" :key="index" class="book-row">
        <text>{{ book.id }}</text>
        <text>{{ book.title }}</text>
        <text>{{ book.author }}</text>
        <text>{{ book.price }}</text>
        <view class="actions">
          <button @tap="editBook(book.id)">编辑</button>
          <button @tap="deleteBook(book.id)">删除</button>
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
        { id: 1, title: '书籍 1', author: '作者 1', price: '￥19.99' },
        { id: 2, title: '书籍 2', author: '作者 2', price: '￥24.99' },
      ],
    };
  },
  methods: {
    editBook(id) {
      console.log(`编辑图书，ID：${id}`);
    },
    deleteBook(id) {
      console.log(`删除图书，ID：${id}`);
    },
  },
};
</script>

<style scoped lang="scss">
.list-title {
  font-size: 20rpx;
  font-weight: bold;
  margin-bottom: 20rpx;
}

.book-table {
  width: 100%;
  margin-top: 20rpx;

  .book-row {
    display: flex;
    justify-content: space-between;
    padding: 10rpx;
    border-bottom: 1px solid #ddd;

    .actions {
      display: flex;
      gap: 10rpx;

      button {
        background-color: #007aff;
        color: #fff;
        padding: 5rpx 10rpx;
        border: none;
        border-radius: 5rpx;
      }
    }
  }
}
</style>
