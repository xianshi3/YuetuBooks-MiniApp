<template>
	<view class="delivery">
		<view class="headNav">外送</view>
		<view class="body">
			<view class="box" @click="goAddress">
				<view class="left">收货地址</view>
				<view class="center">
					<view v-if="deliveryInfo.address">
						<view class="detail">{{deliveryInfo.address}}</view>
						<view class="userinfo">{{deliveryInfo.username + "-" + deliveryInfo.mobile}}</view>
					</view>
					<view class="addressTxt" v-else>请添加收货地址</view>
				</view>
				<view class="right">
					<u-icon name="arrow-right" color="#999" size="18"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"delivery-layout",
		data() {
			return {
				deliveryInfo:{
					address:"",
					username:"",
					mobile:null
				}
			}
		},
		methods:{
			goAddress(){
				uni.navigateTo({
					url:"/pages/address/list"
				})
			}
		}
	}
</script>

<style lang="scss">
.delivery{
	.headNav{
		width: 100%;
		height: 78rpx;
		background: linear-gradient(90deg, #11283b,#1e3f55, #27506c,#2e5a87);   
    border-radius:15rpx 15rpx 0 0;
		@include flex-box-set();
		color: #ffffff;
	}
	.body{
		background: linear-gradient(90deg,  #11283b,#1e3f55, #27506c,#2e5a87);
    border-radius:0 0 15rpx 10rpx;
		padding:25rpx;
		.box{
			padding:40rpx 20rpx;
      background-color: white;
      color: #000000;
      font-weight: bold;

			font-size: 30rpx;
			@include flex-box();
			.center{
				flex:1;
				padding:0 20rpx;
				font-size: 30rpx;
				.userinfo{
					padding-top:10rpx;
				}
        .addressTxt {
          color: #535353;
          font-weight: bold;
        }
			}
		}
	}
}
</style>