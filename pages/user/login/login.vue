<template>
  <view class="login-container">
    <view class="form-container">
      欢迎使用阅途微信小程序 管理员测试 用户名user 密码123
      <image class="logo" src="../../../static/images/logo3.png" mode="aspectFit"></image>
      <input v-model="username" placeholder="用户名" />
      <input v-model="password" type="password" placeholder="密码" />
      <text class="error-message">{{ errorMessage }}</text>
      <button @tap="login">登录</button>
      <button @tap="register">注册</button> 
    </view>
  </view>
</template>

<script>
  import store from "@/store";

  export default {
    data() {
      return {
        username: "",
        password: "",
        errorMessage: "",
      };
    },
    methods: {
      login() {
        setTimeout(() => {
          if (this.username === "user" && this.password === "123") {
            this.errorMessage = "";
            const user = {
              username: this.username
            };
            store.commit("setUser", user);
            uni.navigateBack();
          } else {
            this.errorMessage = "用户名或密码无效";
          }
        }, 1000);
      },
      register() {
        console.log("Registration logic goes here");
      },
    },
  };
</script>

<style scoped>
  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(90deg, #1b344e, #254360, #21496d);
  }

  .form-container {
    font-size: 30rpx;
    width: 80%;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center; 
  }

  .logo {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }

  input {
    width: 250px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    margin-top: 20px;
    padding: 4px 60px;
    background: linear-gradient(90deg, #1b344e, #1d3349, #21496d);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .error-message {
    color: #ff0000;
    margin-top: 10px;
  }
</style>
