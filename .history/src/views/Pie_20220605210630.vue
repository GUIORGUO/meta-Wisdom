<template>
  <!-- 饼状图 -->

  <el-row type="flex" justify="center" :span="24">
    <el-col :span="24">
      <div
        ref="myChartPi"
        :style="{ minwidth: '250px', minHeight: '360px' }"
      ></div>
    </el-col>
  </el-row>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    var that = this;
    // option
    var option2 = {
      title: {
        left: "center",
        top: "10%",
        text: "设备信息",
        textStyle: {
          color: "#fff",
          fontSize:33,
        },
      },
      tooltip: {
        trigger: "item", //点击item时触发
        formatter: "{a} <br/>{b} : {c}%", //饼图、雷达图 : a（系列名称），b（数据项名称），c（数值）, d（百分比）
      },
      toolbox: {
        feature: {
          //特征
          dataView: { readOnly: false }, //数据查看
          restore: {}, //恢复
          saveAsImage: {},
        },
      },
      legend: {
        //图例小标
        data: ["原始Flow", "背景Flow", "特征Flow", "机器Flow"],
        top: "25%",
        itemHeight: 9, //图例长度
        itemWidth: 10, //图例宽度
        textStyle: {
          color: "#FFF",
        },
      },
      grid: {
        //调整图表和标题的距离
        bottom: "0%",
        top: "10%",
        left: "0%",
        right: "0%",
        containLabel: true,
      },
      series: [
        {
          name: "Funnel",
          type: "funnel",
          left: "10%",
          top: 120, //距图标的距离
          bottom: 30, //距底部的距离
          width: "80%",
          min: 0,
          max: 100,
          minSize: "0%",
          maxSize: "100%",
          sort: "descending", //降序排列
          gap: 2,
          label: {
            show: true,
            position: "inside",
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: "solid",
            },
          },
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 1,
          },
          emphasis: {
            label: {
              fontSize: 20,
            },
          },
          data: [
            { value: 75, name: "背景Flow" },
            { value: 50, name: "特征Flow" },
            { value: 25, name: "原始Flow" },
            { value: 100, name: "机器Flow" },
          ],
        },
      ],
    };

    //初始化图表
    // let myChart = echarts.init(document.getElementById("myChart123"));
    //   var myChartPi = echarts.init(document.getElementById("myChartPi"));
    var myChartPi = echarts.init(that.$refs.myChartPi, "macarons");
    //指定配置项和数据显示
    // myChart.setOption(option);
    myChartPi.setOption(option2);

    window.onresize = function () {
      // 自适应大小
      myChartPi.resize();
    };
  },
};
</script>
<style lang="scss" scoped>
</style>