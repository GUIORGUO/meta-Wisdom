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
            <div id="5getu" :data="option15" :style="{ minwidth: '340px', minHeight: '800px'}"></div>
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
  TooltipComponent,
  GridComponent
} from 'echarts/components';
import { ScatterChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { Scatter3DChart } from 'echarts-gl/charts';
import { Grid3DComponent } from 'echarts-gl/components';
import

echarts.use([
  DatasetComponent,
  TooltipComponent,
  GridComponent,
  ScatterChart,
  Grid3DComponent,
  Scatter3DChart,
  CanvasRenderer,
  UniversalTransition
]);
export default {
     setup() {
  
        onMounted(() => {
                    // See https://github.com/ecomfe/echarts-stat
                   var ROOT_PATH =
                   'https://fastly.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

                   $.get(
                    ROOT_PATH + '/assets/data/life-expectancy-table.json',
                    function (data) {
                      var sizeValue = '57%';
                      var symbolSize = 2.5;
                      var option15 = {
                        tooltip: {},
                        grid3D: {
                          width: '50%'
                        },
                        xAxis3D: {},
                        yAxis3D: {},
                        zAxis3D: {},
                        grid: [
                          { left: '50%', width: '20%', bottom: sizeValue },
                          { left: '75%', width: '20%', bottom: sizeValue },
                          { left: '50%', width: '20%', top: sizeValue },
                          { left: '75%', width: '20%', top: sizeValue }
                        ],
                        xAxis: [
                          {
                            type: 'value',
                            gridIndex: 0,
                            name: 'Income',
                            axisLabel: { rotate: 50, interval: 0 }
                          },
                          {
                            type: 'category',
                            gridIndex: 1,
                            name: 'Country',
                            boundaryGap: false,
                            axisLabel: { rotate: 50, interval: 0 }
                          },
                          {
                            type: 'value',
                            gridIndex: 2,
                            name: 'Income',
                            axisLabel: { rotate: 50, interval: 0 }
                          },
                          {
                            type: 'value',
                            gridIndex: 3,
                            name: 'Life Expectancy',
                            axisLabel: { rotate: 50, interval: 0 }
                          }
                        ],
                        yAxis: [
                          { type: 'value', gridIndex: 0, name: 'Life Expectancy' },
                          { type: 'value', gridIndex: 1, name: 'Income' },
                          { type: 'value', gridIndex: 2, name: 'Population' },
                          { type: 'value', gridIndex: 3, name: 'Population' }
                        ],
                        dataset: {
                          dimensions: [
                            'Income',
                            'Life Expectancy',
                            'Population',
                            'Country',
                            { name: 'Year', type: 'ordinal' }
                          ],
                          source: data
                        },
                        series: [
                          {
                            type: 'scatter3D',
                            symbolSize: 3,
                            encode: {
                              x: 'Population',
                              y: 'Life Expectancy',
                              z: 'Income',
                              tooltip: [0, 1, 2, 3, 4]
                            }
                          },
                          {
                            type: 'scatter',
                            symbolSize: symbolSize,
                            xAxisIndex: 0,
                            yAxisIndex: 0,
                            encode: {
                              x: 'Income',
                              y: 'Life Expectancy',
                              tooltip: [0, 1, 2, 3, 4]
                            }
                          },
                          {
                            type: 'scatter',
                            symbolSize: symbolSize,
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            encode: {
                              x: 'Country',
                              y: 'Income',
                              tooltip: [0, 1, 2, 3, 4]
                            }
                          },
                          {
                            type: 'scatter',
                            symbolSize: symbolSize,
                            xAxisIndex: 2,
                            yAxisIndex: 2,
                            encode: {
                              x: 'Income',
                              y: 'Population',
                              tooltip: [0, 1, 2, 3, 4]
                            }
                          },
                          {
                            type: 'scatter',
                            symbolSize: symbolSize,
                            xAxisIndex: 3,
                            yAxisIndex: 3,
                            encode: {
                              x: 'Life Expectancy',
                              y: 'Population',
                              tooltip: [0, 1, 2, 3, 4]
                            }
                          }
                        ]
                      };
                      myChart.setOption(option);
                    }
                  );


                    //初始化图表
                  // let myChart = echarts.init(document.getElementById("myChart123"));
                  let myChart = echarts.init(document.getElementById("5getu"));
                  //指定配置项和数据显示
                  // myChart.setOption(option);
                  myChart.setOption(option15);  
                
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