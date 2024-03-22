<template>
  <view class="donate-page">
    <view class="search-container">
      <text class="search-label">请输入ISBN码搜索书籍信息</text>
      <input type="text" class="isbn-input" placeholder="请输入ISBN码">
    </view>

    <view class="info-container">
      <text class="info-label">基本信息</text>
      <form class="book-form">
        <input type="text" class="input-field" placeholder="请输入书名">
        <input type="text" class="input-field" placeholder="请输入作者">
        <textarea class="textarea-field" placeholder="请输入书籍详情"></textarea>
        <input type="file" class="file-upload" accept="image/*">
        <u-number-box v-model="donateQuantity" min="1" step="1" :disableInput="true"></u-number-box>
        <div class="button-container">
          <button class="reset-button">重置</button>
          <button class="submit-button">提交</button>
        </div>
      </form>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      donateQuantity: 1
    };
  }
};
</script>

<style lang="scss" scoped>
.donate-page {
  padding: 20px;
  font-size: 18px;

  .search-container {
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    .search-label {
      margin-right: 10px;
    }

    .isbn-input {
      flex: 1;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }

  .info-container {
    .info-label {
      margin-bottom: 10px;
      font-weight: bold;
    }

    .book-form {
      .input-field,
      .textarea-field,
      .file-upload {
        margin-bottom: 10px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
      }

      .button-container {
        display: flex;
        justify-content: space-between;
        padding-top: 100px;

        .reset-button,
        .submit-button {
          padding: 10px 50px;
          background: linear-gradient(90deg, #162b40, #1d3349, #21496d);
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
