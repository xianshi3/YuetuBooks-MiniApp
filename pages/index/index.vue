<template>
  <view class="home">
    <custom-head-bar :foldState="foldState" id="customHeadBar"></custom-head-bar>
    <view class="wrapper">
      <view class="search">
        <car-search></car-search>
      </view>
      <view class="scrollLayout">
        <view class="rightScroll">
          <scroll-view @scroll="rightScrollEnt" :scroll-top="ScrollValue" scroll-y scroll-with-animation
            class="sContent">
            <view class="productView">
              <view class="proitem">
                <view class="swiper">
                  <car-swiper></car-swiper>
                </view>
                <view class="grid">
                  <car-grid></car-grid>
                </view>
                <view class="commo">
                  <commodity :dataList='commodityList'></commodity>
                </view>
                <view class="loadmore">
                  <u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus"
                  @loadmore="addRandomData"></u-loadmore>
                </view>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapMutations,
    mapGetters
  } from "vuex";
  import Commodity from '../../components/commodity/commodity.vue';

  export default {
    data() {
      return {
        navSing: 0,
        ScrollValue: 0,
        HitArr: [],
        foldState: false,
        commodityList: [{
            id: 1,
            imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/01.jpg",
            name: "Java In A Nutshell桌面快速参考",
            pprice: "30",
            oprice: "189",
            discount: "5.2"
          },
          {
            id: 2,
            imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/02.jpg",
            name: "通往夏天的隧道",
            pprice: "45",
            oprice: "125",
            discount: "5.2"
          },
          {
            id: 3,
            imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/03.jpg",
            name: "Goodbye, Eri",
            pprice: "35",
            oprice: "125",
            discount: "5.2"
          },
          {
            id: 4,
            imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/04.jpg",
            name: "用Python自动化繁琐的工作",
            pprice: "25",
            oprice: "80",
            discount: "5.2"
          },
          {
            id: 6,
            imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/07.jpg",
            name: "置身事内",
            pprice: "18",
            oprice: "35",
            discount: "5.2"
          },
          {
            id: 5,
            imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/05.jpg",
            name: "C程序设计语言",
            pprice: "45",
            oprice: "120",
            discount: "5.2"
          },
          {
            id: 7,
            imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/06.jpg",
            name: "Sql用于数据分析",
            pprice: "45",
            oprice: "75",
            discount: "5.2"
          },

          {
            id: 9,
            imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/09.jpg",
            name: "Spy X Family, Vol. 1",
            pprice: "42",
            oprice: "84",
            discount: "5.2"
          },
          {
            id: 10,
            imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/10.jpg",
            name: "研究生高分论文写作（第四版）",
            pprice: "12",
            oprice: "35",
            discount: "5.2"
          },
          {
            id: 8,
            imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/08.jpg",
            name: "漫长的等待",
            pprice: "32",
            oprice: "54",
            discount: "5.2"
          },
          {
            id: 11,
            imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/11.jpg",
            name: "Java网络编程",
            pprice: "49",
            oprice: "149",
            discount: "5.2"
          },
          {
            id: 12,
            imgUrl: "https://mp-06cb9cdc-8c7c-46a3-9e40-23b4c64fd8a3.cdn.bspapp.com/book/12.png",
            name: "前端开发实战",
            pprice: "20",
            oprice: "50",
            discount: "5.2"
          },
        ]
      }
    },
    components: {
      Commodity,
    },
    onLoad() {
      this.getHeightArr().then(() => {
        // 达到高度后
      });
    },
    computed: {},
    methods: {
      ...mapMutations(["setFoldState"]),

      //点击导航条
      clickNav(index) {
        if (this.navSing == index) return;
        this.navSing = index;
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
          this.ScrollValue = this.HitArr[index];
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
          // 滚到区域的节点组
          selectorQuery
            .selectAll(".productView")
            .boundingClientRect((rects) => {
              this.HitArr = rects.map((item) => item.top - customHeadBar - 40);
            })
            .exec();
        });
      },
      // 监听滚动条的改变
      rightScrollEnt(e) {
        let scrollTop = Math.ceil(e.detail.scrollTop);
        let sing = this.HitArr.findIndex((value, index, arr) => scrollTop >= value && scrollTop < arr[index +
          1])
        this.navSing = sing;

        if (scrollTop > 100) {
          this.setFoldState(false)
        }
        if (scrollTop > 300) {
          this.setFoldState(true)
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .wrapper {
      overflow: hidden;
      background: #fff;
      border-radius: 10px 10px 0 0;
      margin-top: -10px;
      padding: relative;
      z-index: 2;

      .search {
        padding: 10rpx;
        margin-top: 5rpx;
      }

      .scrollLayout {
        padding-top: 5rpx;
        height: calc(100% - 100rpx);
        @include flex-box();

        .rightScroll {
          height: 100%;
          flex: 1;
          position: relative;

          .productView {
            .proitem {
              .swiper {}
              .grid {
                padding-top: 5rpx;
              }
              .commo {
                padding: 10rpx 30rpx;
              }
              .loadmore {
                padding-bottom: 85rpx;
              }
            }
          }
        }

        .sContent {
          height: 109%;
        }
      }
    }
  }
</style>