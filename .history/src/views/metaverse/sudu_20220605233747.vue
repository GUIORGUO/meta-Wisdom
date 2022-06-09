<template>
<!-- 柱状图 -->
  <div class="Woman" >
    <el-row type="flex" justify="center" style="margin-top:40px;">
       <el-col :span="24">
            <h3 class="title">
                任务执行速度度量
            </h3>
      </el-col>
   </el-row>
   <el-row type="flex" justify="center" >
       <el-col :span="24">
            <div id="sudu" :data="option10" :style="{ minwidth: '240px', minHeight: '450px'}"></div>
      </el-col>
   </el-row>
   </div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
import { onMounted } from "vue";

import { GridComponent, LegendComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, LegendComponent, BarChart, CanvasRenderer]);

export default {
     setup() {
  
        onMounted(() => {
                   const data = [];
                        for (let i = 0; i < 5; ++i) {
                        data.push(Math.round(Math.random() * 200));
                        }
                        var option10 = {
                        xAxis: {
                            max: 'dataMax',
                            axisLine: {//y轴坐标颜色设置
                            lineStyle: {
                                    color: '#fff',
                                    width: 1, //这里是为了突出显示加上的  
                                }
                            },
                        },
                        yAxis: {
                            type: 'category',
                            data: ['面部追踪', '唇同步', '眼睛同步', '摄像头跟踪', '动作捕捉'],
                            inverse: true,
                            axisLine: {//y轴坐标颜色设置
                            lineStyle: {
                                    color: '#fff',
                                    width: 1, //这里是为了突出显示加上的
                                      
                                }
                            },
                            animationDuration: 300,
                            animationDurationUpdate: 300,
                            max: 2 // only the largest 3 bars will be displayed
                        },
                        series: [
                            {
                            realtimeSort: true,
                            name: 'X',
                            type: 'bar',
                            data: data,
                            label: {
                                show: true,
                                position: 'right',
                                valueAnimation: true
                            }
                            }
                        ],
                        grid: {
                            top: 60,
                            height: 350
                        },
                        legend: {
                            show: true
                        },
                        animationDuration: 0,
                        animationDurationUpdate: 3000,
                        animationEasing: 'linear',
                        animationEasingUpdate: 'linear'
                        };
                        function run() {
                        for (var i = 0; i < data.length; ++i) {
                            if (Math.random() > 0.9) {
                            data[i] += Math.round(Math.random() * 2000);
                            } else {
                            data[i] += Math.round(Math.random() * 200);
                            }
                        }
                        myChart.setOption({
                            series: [
                            {
                                type: 'bar',
                                data
                            }
                            ]
                        });
                        }
                        setTimeout(function () {
                        run();
                        }, 0);
                        setInterval(function () {
                        run();
                        }, 3000);
  
                    //初始化图表
                  // let myChart = echarts.init(document.getElementById("myChart123"));
                  let myChart = echarts.init(document.getElementById("sudu"));
                  //指定配置项和数据显示
                  // myChart.setOption(option);
                  myChart.setOption(option10);  
                
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
    font-size:33px;
    font-family: "微软雅黑";
    color:rgb(239, 250, 248);
    line-height: 1.3;
    display: flex;
    justify-content:center;
}
</style>