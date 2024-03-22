<template>
  <view class="brand">
    <uni-forms ref="brandRef" :model="brandFormData" :rules="brandRules" :label-width="100" label-align="right">
      <uni-forms-item label="品牌招牌">
        <uni-file-picker v-model="brandFormData.thumb" fileMediatype="image" mode="grid" :limit="1" />
      </uni-forms-item>


      <uni-forms-item label="品牌名称" name="name" required>
        <uni-easyinput type="text" v-model="brandFormData.name" placeholder="请输入品牌名称" />
      </uni-forms-item>

      <uni-forms-item label="商户电话" name="mobile" required>
        <uni-easyinput type="text" v-model="brandFormData.mobile" placeholder="请输入商户电话" />
      </uni-forms-item>

      <uni-forms-item label="商户地址" name="address">
        <uni-easyinput v-model="brandFormData.address" placeholder="请输入商户地址" />
      </uni-forms-item>

      <uni-forms-item label="商家介绍" name="about">
        <uni-easyinput v-model="brandFormData.about" placeholder="请输入商家介绍" type="textarea" />
      </uni-forms-item>


      <button type="primary" @click="onSubmit">提交信息</button>
    </uni-forms>
  </view>
</template>

<script>
  const brandCloudObj = uniCloud.importObject("kt-mall-brand")
  export default {
    data() {
      return {
        brandFormData: {
          thumb: [],
          name: "", //品牌名称
          mobile: "",
          address: "",
          about: ""
        },
        brandRules: {
          name: {
            rules: [{
              required: true,
              errorMessage: "请输入正确的品牌名称"
            }, {
              minLength: 3,
              maxLength: 20,
              errorMessage: '长度在{minLength}到{maxLength}的字符'
            }]
          },
          mobile: {
            rules: [{
              required: true,
              errorMessage: "请输入正确的品牌电话"
            }, {
              validateFunction: function(rule, value, data, callback) {
                let res = /^1[3-9]\d{9}$/.test(value);
                if (!res) {
                  callback("手机格式不正确")
                }
                return;
              }
            }]
          }

        }
      };
    },

    onLoad() {
      this.getBrand();
    },

    methods: {
      //获取数据库中的品牌信息
      getBrand() {
        brandCloudObj.get().then(res => {
          console.log(res);
          this.brandFormData = res.data[0]
        })
      },


      //点击提交按钮
      onSubmit() {
        this.$refs.brandRef.validate().then(res => {
          let arr = this.brandFormData.thumb.map(item => {
            return {
              extname: item.extname,
              url: item.url,
              name: item.name,
              size: item.size
            }
          })
          this.brandFormData.thumb = arr;
          this.addAndUpdate();
        }).catch(err => {
          console.log(err);
        })
      },
      //新增或者修改品牌啊信息
      addAndUpdate() {
        if (this.brandFormData._id) {
          brandCloudObj.update(this.brandFormData).then(res => {
            uni.showToast({
              title: "修改成功",
              mask: true
            })
            setTimeout(() => {
              uni.navigateBack();
            }, 1500)

          })
        } else {
          //新增
          brandCloudObj.add(this.brandFormData).then(res => {
            uni.showToast({
              title: "新增成功"
            })
            setTimeout(() => {
              uni.navigateBack();
            }, 1500)
          })
        }



      }
    }
  }
</script>

<style lang="scss" scoped>
  .brand {
    padding: 30rpx;

  }
</style>