<template>
<!-- 柱状图 -->
  <div class="Woman" >
    <el-row type="flex" justify="center" style="margin-top:40px;">
       <el-col :span="24">
            <h3 class="title">
                混合性能度量
            </h3>
      </el-col>
   </el-row>
   <el-row type="flex" justify="center" >
       <el-col :span="24">
            <div id="xingneng" :data="option11" :style="{ minwidth: '240px', minHeight: '450px'}"></div>
      </el-col>
   </el-row>
   </div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
import { onMounted } from "vue";

import {
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  LegendComponent,
  TransformComponent
} from 'echarts/components';
import { ScatterChart, LineChart } from 'echarts/charts';
import { UniversalTransition, LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  LegendComponent,
  TransformComponent,
  ScatterChart,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
  LabelLayout
]);
import ecStat from 'echarts-stat';

export default {
     setup() {
  
        onMounted(() => {
                    // See https://github.com/ecomfe/echarts-stat
                    echarts.registerTransform(ecStat.transform.regression);
                    var option11 = {
                    dataset: [
                        {
                        source: [
                            [28604, 77, 17096869, 'Australia', 虚拟人],
                            [31163, 77.4, 27662440, 'Canada', 虚拟人],
                            [1516, 68, 1154605773, 'China', 虚拟人],
                            [13670, 74.7, 10582082, 'Cuba', 虚拟人],
                            [28599, 75, 4986705, 'Finland', 虚拟人],
                            [29476, 77.1, 56943299, 'France', 虚拟人],
                            [31476, 75.4, 78958237, 'Germany', 虚拟人],
                            [28666, 78.1, 254830, 'Iceland', 虚拟人],
                            [1777, 57.7, 870601776, 'India', 虚拟人],
                            [29550, 79.1, 122249285, 'Japan', 虚拟人],
                            [2076, 67.9, 20194354, 'North Korea', 虚拟人],
                            [12087, 72, 42972254, 'South Korea', 虚拟人],
                            [24021, 75.4, 3397534, 'New Zealand', 虚拟人],
                            [43296, 76.8, 4240375, 'Norway', 虚拟人],
                            [10088, 70.8, 38195258, 'Poland', 虚拟人],
                            [19349, 69.6, 147568552, 'Russia', 虚拟人],
                            [10670, 67.3, 53994605, 'Turkey', 虚拟人],
                            [26424, 75.7, 57110117, 'United Kingdom', 虚拟人],
                            [37062, 75.4, 252847810, 'United States', 虚拟人],
                            [44056, 81.8, 23968973, 'Australia', 机器人],
                            [43294, 81.7, 35939927, 'Canada', 机器人],
                            [13334, 76.9, 1376048943, 'China', 机器人],
                            [21291, 78.5, 11389562, 'Cuba', 机器人],
                            [38923, 80.8, 5503457, 'Finland', 机器人],
                            [37599, 81.9, 64395345, 'France', 机器人],
                            [44053, 81.1, 80688545, 'Germany', 机器人],
                            [42182, 82.8, 329425, 'Iceland', 机器人],
                            [5903, 66.8, 1311050527, 'India', 机器人],
                            [36162, 83.5, 126573481, 'Japan', 机器人],
                            [1390, 71.4, 25155317, 'North Korea', 机器人],
                            [34644, 80.7, 50293439, 'South Korea', 机器人],
                            [34186, 80.6, 4528526, 'New Zealand', 机器人],
                            [64304, 81.6, 5210967, 'Norway', 机器人],
                            [24787, 77.3, 38611794, 'Poland', 机器人],
                            [23038, 73.13, 143456918, 'Russia', 机器人],
                            [19360, 76.5, 78665830, 'Turkey', 机器人],
                            [38225, 81.4, 64715810, 'United Kingdom', 机器人],
                            [53354, 79.1, 321773631, 'United States', 机器人]
                        ]
                        },
                        {
                        transform: {
                            type: 'filter',
                            config: { dimension: 4, eq: 虚拟人 }
                        }
                        },
                        {
                        transform: {
                            type: 'filter',
                            config: { dimension: 4, eq: 机器人 }
                        }
                        },
                        {
                        transform: {
                            type: 'ecStat:regression',
                            config: {
                            method: 'logarithmic'
                            }
                        }
                        }
                    ],
                    title: {
                        text: '虚拟人 and 机器人性能指标和能耗总值',
                        subtext: 'By ecStat.regression',
                        sublink: 'https://github.com/ecomfe/echarts-stat',
                        left: 'center'
                    },
                    legend: {
                        data: ['虚拟人', '机器人'],
                        bottom: 10
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                        type: 'cross'
                        }
                    },
                    xAxis: {
                        type: 'value',
                        splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                        }
                    },
                    visualMap: {
                        show: false,
                        dimension: 2,
                        min: 20000,
                        max: 1500000000,
                        seriesIndex: [0, 1],
                        inRange: {
                        symbolSize: [10, 70]
                        }
                    },
                    series: [
                        {
                        name: '虚拟人',
                        type: 'scatter',
                        datasetIndex: 1
                        },
                        {
                        name: '机器人',
                        type: 'scatter',
                        datasetIndex: 2
                        },
                        {
                        name: 'line',
                        type: 'line',
                        smooth: true,
                        datasetIndex: 3,
                        symbolSize: 0.1,
                        symbol: 'circle',
                        label: { show: true, fontSize: 16 },
                        labelLayout: { dx: -20 },
                        encode: { label: 2, tooltip: 1 }
                        }
                    ]
                    };

                    //初始化图表
                  // let myChart = echarts.init(document.getElementById("myChart123"));
                  let myChart = echarts.init(document.getElementById("xingneng"));
                  //指定配置项和数据显示
                  // myChart.setOption(option);
                  myChart.setOption(option11);  
                
                  //全局设置Echrts - 根据窗口的大小变更图表
                  window.onresize = function () {
                    // 自适应大小
                  myChart.resize();
                  };  
                   
                     
        });
     },
};
</script>

<style scoped>
.title{
    font-size:44px;
    font-family: "微软雅黑";
    color:rgb(239, 250, 248);
    line-height: 1.3;
    display: flex;
    justify-content:center;
}
</style>