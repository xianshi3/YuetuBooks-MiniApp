<template>
  <view class="addressForm">
    <u--form labelPosition="top" :model="addressForm" :rules="addressRules" labelWidth="100" ref="uForm">

      <u-form-item label="姓名" prop="username">
        <u--input v-model="addressForm.username" placeholder="请输入姓名"></u--input>
      </u-form-item>


      <u-form-item label="联系电话" prop="mobile">
        <u--input v-model="addressForm.mobile" placeholder="请输入联系电话"></u--input>
      </u-form-item>

      <u-form-item label="详细地址" prop="address">
        <u--input v-model="addressForm.address" placeholder="请输入街道门牌号"></u--input>
      </u-form-item>

      <u-form-item label="是否默认">
        <u-switch v-model="addressForm.selected" inactiveColor="#eee"></u-switch>
      </u-form-item>

      <u-form-item></u-form-item>

      <u-form-item>
        <u-button type="primary" @click="onSubmit">提交</u-button>
      </u-form-item>

    </u--form>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        addressForm: {
          username: "",
          mobile: "",
          address: "",
          selected: false
        },
        addressRules: {
          username: [{
            required: true,
            message: '姓名是必填的',
            trigger: ['blur', 'change']
          }, {
            min: 2,
            max: 8,
            message: '长度在2-8个字符之间',
            trigger: ['blur', 'change']
          }],
          mobile: [{
            required: true,
            message: '电话是必填的',
            trigger: ['blur', 'change']
          }, {
            validator: (rule, value, callback) => {
              return uni.$u.test.mobile(value);
            },
            message: '手机号码不正确',
            trigger: ['change', 'blur']
          }],
          address: [{
            required: true,
            message: '地址是必填的',
            trigger: ['blur', 'change']
          }]
        }
      };
    },

    methods: {
      onSubmit() {
        this.$refs.uForm.validate().then(res => {
          uni.$u.toast('校验通过')
        }).catch(errors => {
          uni.$u.toast('校验失败')
        })
      }
    }
  }
</script>

<style lang="scss">
  .addressForm {
    padding: 30rpx;
  }
</style>