<template>
<!-- 柱状图 -->
  <div class="Woman" >
    <el-row type="flex" justify="center" style="margin-top:40px;">
       <el-col :span="24">
            <h3 class="title">
                能耗随时间动态度量
            </h3>
      </el-col>
   </el-row>
   <el-row type="flex" justify="center" >
       <el-col :span="24">
            <div id="3d" :data="option15" :style="{ minwidth: '340px', minHeight: '600px'}"></div>
      </el-col>
   </el-row>
   </div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
import { onMounted } from "vue";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent
} from 'echarts/components';
import { BarChart, LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);


export default {
     setup() {
  
        onMounted(() => {
                  var app = {};
                  const categories = (function () {
                      let now = new Date();
                      let res = [];
                      let len = 10;
                      while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                        now = new Date(+now - 2000);
                      }
                      return res;
                    })();
                    const categories2 = (function () {
                      let res = [];
                      let len = 10;
                      while (len--) {
                        res.push(10 - len - 1);
                      }
                      return res;
                    })();
                    const data = (function () {
                      let res = [];
                      let len = 10;
                      while (len--) {
                        res.push(Math.round(Math.random() * 1000));
                      }
                      return res;
                    })();
                    const data2 = (function () {
                      let res = [];
                      let len = 0;
                      while (len < 10) {
                        res.push(+(Math.random() * 10 + 5).toFixed(1));
                        len++;
                      }
                      return res;
                    })();
                   var option15 = {
                      title: {
                        text: '动态数据',
                        top:0,
                        left:140,
                        textStyle:{
                          fontSize:30,
                          color:'#ffffff'
                        },
                      },
                      tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                          type: 'cross',
                          label: {
                            backgroundColor: '#4396b2'
                          }
                        }
                      },
                      legend: {
                        top:0,
                        textStyle:{
                                color: ["#4396b2",'#addd8b'],
                                fontSize:30,

                            }
                      },
                      toolbox: {
                        show: true,
                        feature: {
                          dataView: { readOnly: false },
                          restore: {},
                          saveAsImage: {}
                        }
                      },
                      dataZoom: {
                        show: false,
                        start: 0,
                        end: 100,
                        color:'#ffffff',
                      },
                      xAxis: [
                        {
                          type: 'category',
                          boundaryGap: true,
                          data: categories,
                          axisLabel: {
                            fontSize:25,
                            color: '#fff',
                          },
                          lineStyle: {
                                    color: '#fff',
                                    width: 1, //这里是为了突出显示加上的  
                                }
                           
                        },
                        {
                          type: 'category',
                          boundaryGap: true,
                          data: categories2,
                          axisLabel: {
                            fontSize:25,
                            color: '#fff',
                          },
                          lineStyle: {
                                    color: '#fff',
                                    width: 1, //这里是为了突出显示加上的  
                                }
                        }
                      ],
                      yAxis: [
                        {
                          type: 'value',
                          scale: true,
                          name: 'Price',
                          max: 30,
                          min: 0,
                          boundaryGap: [0.2, 0.2],
                          axisLabel: {
                            fontSize:25,
                            color: '#fff',
                          },
                          lineStyle: {
                                    color: '#fff',
                                    width: 1, //这里是为了突出显示加上的  
                                },
                          axisLabel: {
                            fontSize:20,
                          }
                        },
                        {
                          type: 'value',
                          scale: true,
                          name: 'Order',
                          max: 1200,
                          min: 0,
                          boundaryGap: [0.2, 0.2].text,
                          axisLabel: {
                            fontSize:25,
                            color: '#fff',
                          },
                          lineStyle: {
                                    color: '#fff',
                                    width: 1, //这里是为了突出显示加上的  
                                }
                        }
                      ],
                       grid:{//调整图表和标题的距离
                    //    bottom: '10%',
                       top: '10%',
                     
                     },
                      series: [
                        {
                          name: 'Dynamic Bar',
                          type: 'bar',
                          xAxisIndex: 1,
                          yAxisIndex: 1,
                          color:'#7🦢呗c',//柱形图颜色
                          data: data,
                          label: {
                            fontSize:25,
                            color: '#fff',
                          },
                         
                        },
                        {
                          name: 'Dynamic Line',
                          type: 'line',
                          data: data2,
                           label: {
                            fontSize:25,
                            color: '#fff',
                          },
                        }
                      ]
                    };
                    app.count = 11;
                    setInterval(function () {
                      let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
                      data.shift();
                      data.push(Math.round(Math.random() * 1000));
                      data2.shift();
                      data2.push(+(Math.random() * 10 + 5).toFixed(1));
                      categories.shift();
                      categories.push(axisData);
                      categories2.shift();
                      categories2.push(app.count++);
                      myChart.setOption({
                        xAxis: [
                          {
                            data: categories
                          },
                          {
                            data: categories2
                          }
                        ],
                        series: [
                          {
                            data: data
                          },
                          {
                            data: data2
                          }
                        ]
                      });
                    }, 2100);

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