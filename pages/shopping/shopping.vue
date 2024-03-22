<template>
  <view class="shopping">
    <custom-head-bar :foldState="foldState" id="customHeadBar"></custom-head-bar>

    <view class="wrapper">
      <view class="infoMofel">
        <view class="search">
          <car-search></car-search>
        </view>
        <navigator v-if="user" url="/pages/order/order" class="right">
          <u-icon name="order" color="$brand-theme-color-aux" size="24"></u-icon>
          我的订单
        </navigator>
      </view>
      <view class="scrollLayout">
        <view class="leftScroll">
          <scroll-view scroll-y class="sContent" :scroll-top="leftScrollValue">
            <view class="navitem" :class="shopping == navSing?'active':''" v-for="(item,shopping) in dataList"
              :key="item.id" @click="clickNav(shopping)">{{item.name}}</view>
          </scroll-view>
        </view>
        <view class="rightScroll">
          <scroll-view @scroll="rightScrollEnt" :scroll-top="rightScrollValue" scroll-y scroll-with-animation
            class="sContent">
            <view class="productView" v-for="item in dataList">
              <u-sticky :customNavHeight="0" zIndex="2">
                <view class="proTitle">{{item.name}}</view>
              </u-sticky>
              <view class="proContent">
                <view class="proitem" v-for="pro in item.children">
                  <product-item :item="pro"></product-item>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </view>
    <car-layout v-if="buyNum > 0"></car-layout>
  </view>
</template>

<script>
  import store from '@/store';
  import {
    mapState,
    mapMutations,
    mapGetters
  } from "vuex"
  import {
    methods,
    onLoad
  } from '../../uni_modules/uview-ui/libs/mixin/mixin'
  export default {
    data() {
      return {
        navSing: 0,
        leftScrollValue: 0,
        rightScrollValue: 0,
        leftHitArr: [],
        rightHitArr: [],
        foldState: false,
        dataList: [{ //1
            id: 1,
            name: "计算机",
            children: [{
                id: 11,
                name: "Java In A Nutshell桌面快速参考",
                price: 30,
                before_price: 189,
                thumb: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/01.jpg",
                numvalue: 0
              },

              {
                id: 12,
                name: "用Python自动化繁琐的工作",
                price: 25,
                before_price: 80,
                thumb: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/04.jpg",
                numvalue: 0
              },
              {
                id: 13,
                name: "C程序设计语言",
                price: 45,
                before_price: 120,
                thumb: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/05.jpg",
                numvalue: 0
              },
              {
                id: 14,
                name: "Java网络编程",
                price: 55,
                before_price: 140,
                thumb: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/11.jpg",
                numvalue: 0
              },
              {
                id: 15,
                name: "Sql用于数据分析",
                price: 85,
                before_price: 250,
                thumb: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/06.jpg",
                numvalue: 0
              },
              {
                id: 16,
                name: "前端开发实战",
                price: 45,
                before_price: 75,
                thumb: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/12.png",
                numvalue: 0
              }
            ]
          },
          { //2
            id: 2,
            name: "轻小说",
            children: [{
                id: 12,
                name: "通往夏天的隧道",
                price: 45,
                before_price: 125,
                thumb: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/02.jpg",
                numvalue: 0
              },
              {
                id: 13,
                name: "Goodbye, Eri",
                price: 35,
                before_price: 125,
                thumb: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/03.jpg",
                numvalue: 0
              },
              {
                id: 14,
                name: "Spy X Family, Vol. 1",
                price: 42,
                before_price: 84,
                thumb: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/09.jpg",
                numvalue: 0
              }
            ]
          },
          { //3
            id: 3,
            name: "教材",
            children: [{
                id: 13,
                name: "研究生高分论文写作（第四版）",
                price: 12,
                before_price: 35,
                thumb: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/10.jpg",
                numvalue: 0
              },
            ]
          },
          { //4
            id: 4,
            name: "政治理论",
            children: [{
                id: 14,
                name: "置身事内",
                price: 18,
                before_price: 35,
                thumb: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/07.jpg",
                numvalue: 0
              },
            ]
          },
          { //5
            id: 5,
            name: "短篇小说",
            children: [{
                id: 14,
                name: "漫长的等待",
                price: 16,
                before_price: 49,
                thumb: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/08.jpg",
                numvalue: 0
              },
            ]
          },
        ]
      };
    },
    onLoad() {
      this.getHeightArr().then(() => {
        // 达到高度后
      });
    },
    computed: {
      ...mapGetters(["buyNum"]),
      user() {
        return store.state.user;
      },
    },
    methods: {
      ...mapMutations(["setFoldState"]),
      //点击导航条
      clickNav(shopping) {
        if (this.navSing == shopping) return;
        this.navSing = shopping;
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
          this.lefttScrollValue = this.leftHitArr[shopping];
          this.rightScrollValue = this.rightHitArr[shopping];
        }, 100)
      },
      // 获取滚动条内容高度
      getHeightArr() {
        return new Promise((resolve) => {
          let selectorQuery = uni.createSelectorQuery();
          let customHeadBar;
          //获取自定义导航高度
          selectorQuery
            .select("#customHeadBar")
            .boundingClientRect((rects) => {
              customHeadBar = rects.height;
            })
            .exec();

          // 左侧滚到区域的节点组
          selectorQuery
            .selectAll(".navitem")
            .boundingClientRect((rects) => {
              this.leftHitArr = rects.map((item) => item.top - customHeadBar - 40);
            })
            .exec();
          // 右侧滚到区域的节点组
          selectorQuery
            .selectAll(".productView")
            .boundingClientRect((rects) => {
              this.rightHitArr = rects.map((item) => item.top - customHeadBar - 40);
            })
            .exec();
        });
      },
      // 监听右侧滚动条的改变
      rightScrollEnt(e) {
        let scrollTop = Math.ceil(e.detail.scrollTop);
        let sing = this.rightHitArr.findIndex((value, shopping, arr) => scrollTop >= value && scrollTop < arr[shopping +
          1])
        this.navSing = sing;
        this.leftScrollValue = this.leftHitArr[sing];
        if (scrollTop > 300) {
          this.setFoldState(false)
        }
        if (scrollTop > 400) {
          this.setFoldState(true)
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .shopping {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .wrapper {
      flex: 1;
      background: #fff;
      border-radius: 10px 10px 0 0;
      margin-top: -10px;
      padding: relative;
      z-index: 2;
      overflow: hidden;


      .infoMofel {
        color: $text-font-color-1;
        @include flex-box();
        height: 50px;
        background: #fff;
        padding: 0 30rpx;
        font-size: 32rpx;
        border-bottom: 1px solid $border-color-light;

        .right {
          @include flex-box();
          color: $brand-theme-color-aux;
        }
      }

      .scrollLayout {
        height: calc(100% - 90rpx);
        @include flex-box();

        .leftScroll {
          height: 100%;
          width: 170rpx;
          border-right: 1px solid $border-color;
          background: $page-bg-color;

          .navitem {
            font-size: 30rpx;
            padding-left: 30rpx;
            line-height: 100rpx;
            color: $text-font-color-2;
            position: relative;

            &.active {
              color: $text-font-color-1;
              background: #fff;

              &::after {
                content: "";
                width: 6rpx;
                height: 30rpx;
                background: $brand-theme-color;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
              }
            }
          }
        }

        .rightScroll {
          height: 100%;
          flex: 1;
          position: relative;

          .productView {
            padding: 0 30rpx;

            .proTitle {
              line-height: 70rpx;
              border-radius: 10px 10px 10px 10px;
              text-align: center;
              font-size: 25rpx;
              background: linear-gradient(90deg, #284f76, #23425e, #1b3d5b);
              color: #f3f9ff;
            }
          }
        }

        .sContent {
          height: 100%;
        }
      }
    }
  }
</style>