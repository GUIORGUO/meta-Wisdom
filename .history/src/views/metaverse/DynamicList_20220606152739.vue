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
            <div id="3d" :data="option15" :style="{ minwidth: '340px', minHeight: '800px'}"></div>
      </el-col>
   </el-row>
   </div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
import { onMounted } from "vue";

import { TooltipComponent, VisualMapComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { SurfaceChart } from 'echarts-gl/charts';
import { Grid3DComponent } from 'echarts-gl/components';

echarts.use([
  TooltipComponent,
  VisualMapComponent,
  Grid3DComponent,
  SurfaceChart,
  CanvasRenderer
]);

export default {
     setup() {
  
        onMounted(() => {
                  var option15 = {
                      tooltip: {},
                      backgroundColor: '#fff',
                      visualMap: {
                        show: false,
                        dimension: 2,
                        min: -1,
                        max: 1,
                        inRange: {
                          color: [
                            '#313695',
                            '#4575b4',
                            '#74add1',
                            '#abd9e9',
                            '#e0f3f8',
                            '#ffffbf',
                            '#fee090',
                            '#fdae61',
                            '#f46d43',
                            '#d73027',
                            '#a50026'
                          ]
                        }
                      },
                      xAxis3D: {
                        type: 'value'
                      },
                      yAxis3D: {
                        type: 'value'
                      },
                      zAxis3D: {
                        type: 'value'
                      },
                      grid3D: {
                        viewControl: {
                          // projection: 'orthographic'
                        }
                      },
                      series: [
                        {
                          type: 'surface',
                          wireframe: {
                            // show: false
                          },
                          equation: {
                            x: {
                              step: 0.05
                            },
                            y: {
                              step: 0.05
                            },
                            z: function (x, y) {
                              if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
                                return '-';
                              }
                              return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
                            }
                          }
                        }
                      ]
                    };



                    //初始化图表
                  // let myChart = echarts.init(document.getElementById("myChart123"));
                  let myChart = echarts.init(document.getElementById("3d"));
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