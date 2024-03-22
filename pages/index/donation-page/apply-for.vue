<template>
  <view class="apply-page">
    <view class="section">
      <text class="title">申领申请函</text>
      <textarea class="input-field" placeholder="请输入申领申请函内容"></textarea>
    </view>

    <view class="section">
      <text class="title">民政部门颁发的登记证书</text>
      <input type="file" class="file-upload" accept="image/*">
    </view>

    <view class="section">
      <text class="title">组织机构代码证书副本原件及复印件</text>
      <input type="file" class="file-upload" accept="image/*">
    </view>

    <view class="section">
      <text class="title">单位章程</text>
      <textarea class="input-field" placeholder="请输入单位章程内容"></textarea>
    </view>

    <view class="section">
      <text class="title">财政部门规定的其他材料</text>
      <textarea class="input-field" placeholder="请输入财政部门规定的其他材料内容"></textarea>
    </view>

    <button class="submit-button">提交申请</button>
  </view>
</template>

<script>
export default {
  // 此处可添加相关逻辑代码
};
</script>

<style lang="scss" scoped>
.apply-page {
  padding: 20px;

  .section {
    margin-bottom: 20px;

    .title {
      font-weight: bold;
      margin-bottom: 10px;
    }

    .input-field,
    .file-upload {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-bottom: 10px;
    }

    .file-upload {
      background-color: #f0f0f0;
      cursor: pointer;
    }
  }

  .submit-button {
    padding: 10px 20px;
    background: linear-gradient(90deg, #1b344e, #233f5a, #21496d);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
