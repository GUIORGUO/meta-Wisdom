<template>
  <!-- 饼状图 -->
  <el-row type="flex" justify="center">
      <el-col>
           <h3 class="title">
                机器质量度量
            </h3>
      </el-col>
       <el-col :span="24" >
          <div  ref="myChartPi" :data="option" :style="{ minwidth: '200px', minHeight: '650px'}"></div>
        </el-col>
</el-row>

  <el-row type="flex" justify="center" :span="24">
    <el-col :span="24">
      <div
        ref="myChartPi"
        ref="myChartPi"
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
        text: "机器人数量度量",
        textStyle: {
          color: "#fff",
          fontSize:44,
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
        data: ["工业机器人", "小型机器人", "音乐机器人", "AI机器人"],
        top: "0%",
        itemHeight: 9, //图例长度
        itemWidth: 10, //图例宽度
        textStyle: {
          color: "#FFF",
          fontSize:25
        },
      },
      grid: {
        //调整图表和标题的距离
        
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
            fontSize:25
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
            { value: 75, name: "工业机器人" },
            { value: 50, name: "小型机器人" },
            { value: 25, name: "音乐机器人" },
            { value: 100, name: "AI机器人" },
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