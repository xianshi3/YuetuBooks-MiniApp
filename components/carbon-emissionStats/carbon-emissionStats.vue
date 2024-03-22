<template>
  <view class="charts-box">
    <qiun-data-charts type="area" :chartData="chartData" :tooltipFormat="tooltipFormat" />
  </view>
</template>

<script>
  export default {
    data() {
      return {
        chartData: {},
        bookSoldData: [35, 48, 40, 45], // 书籍销量的示例数据
        carbonReductionPerBook: [2, 2, 2, 2], // 每本书的实际碳排放量数据
      };
    },
    mounted() {
      this.getServerData();
    },
    methods: {
      getServerData() {
        // 模拟从服务器获取数据时的延时
        setTimeout(() => {
          let res = {
            categories: ["2021年", "2022年", "2023年", "2024年"],
            series: [{
                name: "卖出/捐赠书籍数量",
                data: this.bookSoldData,
                stack: '总量',
              },
              {
                name: "减少碳排放量",
                data: this.calculateCarbonReduction(),
                stack: '总量',
              },
            ],
          };
          this.chartData = JSON.parse(JSON.stringify(res));
        }, 500);
      },
      calculateCarbonReduction() {
        return this.bookSoldData.map((sold, index) => sold * this.carbonReductionPerBook[index]);
      },
      tooltipFormat({
        seriesName,
        data
      }) {
        return `<div>${seriesName}: ${data}千克</div>`; // 自定义 Tooltip 的显示格式
      },
    },
  };
</script>

<style scoped>
  .charts-box {
    padding-top: 20rpx;
    width: 100%;
    height: 470rpx;
  }
</style>