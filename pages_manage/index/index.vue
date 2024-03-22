<template>
  <view class="manage">
    <uni-section title="分类管理" type="line"></uni-section>
    <uni-list>
      <uni-list-item title="书籍分类" show-arrow to="/pages_manage/category/category"></uni-list-item>
    </uni-list>

    <uni-section title="书籍管理" type="line"></uni-section>
    <uni-list>
      <uni-list-item title="书籍列表" show-arrow to="/pages_manage/goods/list"></uni-list-item>
      <uni-list-item title="新增书籍" show-arrow to="/pages_manage/goods/add"></uni-list-item>
    </uni-list>

    <uni-section title="发布管理" type="line"></uni-section>
    <uni-list>
      <uni-list-item title="用户发布的书籍" show-arrow to="/pages_manage/publish/publish"></uni-list-item>
      <uni-list-item title="用户发布的求购" show-arrow to="/pages_manage/publish/ask_book"></uni-list-item>
      <uni-list-item title="用户捐赠管理" show-arrow to="/pages_manage/publish/donate"></uni-list-item>
      <uni-list-item title="公益申领管理" show-arrow to="/pages_manage/publish/public_welfare"></uni-list-item>
    </uni-list>

    <uni-section title="关于卖家" type="line"></uni-section>
    <uni-list>
      <uni-list-item title="卖家信息" show-arrow to="/pages_manage/brand/brand"></uni-list-item>
    </uni-list>
  </view>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  .manage {
    padding: 70rpx;
  }
</style>