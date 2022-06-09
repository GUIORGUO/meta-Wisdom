<template>
<!-- 右侧双层图表 -----访客量统计-->
<el-row type="flex" justify="center">
      <el-col>
           <h3 class="title">
                机器质量度量
            </h3>
      </el-col>
       <el-col :span="24" >
          <div id="myChart123" :data="option" :style="{ minwidth: '200px', minHeight: '300px'}"></div>
        </el-col>
</el-row>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
import { onMounted } from "vue";
import 'echarts-gl';
import axios from "axios"

export default {
  setup() {
  
    onMounted(() => {

      let base = +new Date(2022, , 1);
      let oneDay = 24 * 3600 * 1000;
      let valueBase = Math.random() * 300;
      let valueBase2 = Math.random() * 50;
      let data = [];
      let data2 = [];
      for (var i = 1; i < 10; i++) {
        var now = new Date((base += oneDay));
        var dayStr = [
          now.getFullYear(),
          now.getMonth() + 1,
          now.getDate(),
        ].join("-");
        valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
        valueBase <= 0 && (valueBase = Math.random() * 300);
        data.push([dayStr, valueBase]);
        valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
        valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
        data2.push([dayStr, valueBase2]);
      }
      var option = {
        title: {
          left: "center",
          text: "",
          textStyle:{
              color:'#fff',
          },
          
        },
        legend: {//图例 
          top: "bottom",
          data: [" "],
        },
        tooltip: {//鼠标移到ToolTip超链接上时，ToolTip提示框可以显示出来
          triggerOn: "none",
          position: function (pt) {
            return [pt[0], 100];
          },
        },
        toolbox: {
          left: "center",
          itemSize: 10,
          top: 50,
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            restore: {},
          },
        },
        xAxis: {
          type: "time",
          axisPointer: {
            value: "2021-11-7",
            snap: true,
            lineStyle: {
              color: "#90edef",
              width: 2,
            },
            
            textStyle:{
                color:'#90edef',
            },
            label: {
              show: true,
              formatter: function (params) {
                return echarts.format.formatTime("yyyy-MM-dd", params.value);
              },
              backgroundColor: "#0073c1",
            },
            handle: {
              show: true,
              color: "#0073c1",
            },
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          axisTick: {
            inside: true,
          },        
          splitLine: {//垂直数据不超过折线
            show: false,  
          },
          axisLabel: {
            inside: true,
            textStyle:{ //刻度线数据颜色
                color:'#90edef',
            },
            formatter: "{value}\n",//当一个单元格的数据很多，不能显示完全时，鼠标放上去能动态显示出所有内容。 //value是当前字段的值，rowData是该行的所有数据，rowIndex是该行的索引
          },
          z: 9,
        },
        //图表高度，上下左右距离
        grid: {
          top: 100,
          left: 3,
          right: 5,
          height: 350,
        },
        dataZoom: [
          {
            type: "inside",//slider表示有滑动块的，inside表示内置的 
            throttle: 100,//设置触发视图刷新的频率。单位为毫秒（ms）。 
          },
        ],
        series: [
          {
            name: "网络质量合格",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 4,//图表标记对应的值。也就是那个空心圆圈对应的值。
            sampling: "average",
            itemStyle: {
              color: "#0770FF",
            },
            stack: "a",
            areaStyle: {
                // 4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始
              color: new echarts.graphic.LinearGradient(2, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(58,77,499,0.8)",
                },
                {
                  offset: 1,
                  color: "rgba(58,77,233,0.3)",
                },
              ]),
            },
            data: data,
          },
          {
            name: "硬件质量合格",
            type: "line",
            smooth: true,
            stack: "a",
            symbol: "circle",
            symbolSize: 4,
            sampling: "average",
            itemStyle: {
              color: "#F2597F",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(2, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(213,72,120,0.9)",
                },
                {
                  offset: 1,
                  color: "rgba(213,72,120,0.3)",
                },
              ]),
            },
            data: data2,
          },
        ],
      };
   
        //初始化图表
      let myChart = echarts.init(document.getElementById("myChart123"));
    //   let myChart1 = echarts.init(document.getElementById("myChart1234"));
  
      //指定配置项和数据显示
      myChart.setOption(option);
    //   myChart1.setOption(option2);  

      window.onresize = function () {
        // 自适应大小
        myChart.resize();
      };
   
   }); 
  },
};
</script>
<style lang="scss" scoped>
.title{
    font-size:26px;
    font-family: "微软雅黑";
    color:rgb(239, 250, 248);
    line-height: 1.3;
    display: flex;
    justify-content:center;
    margin-top: 50px;
}
</style>
