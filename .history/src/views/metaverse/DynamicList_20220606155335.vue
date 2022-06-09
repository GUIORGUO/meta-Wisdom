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
import {
  TitleComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);


export default {
     setup() {
  
        onMounted(() => {
                  function randomData() {
                    now = new Date(+now + oneDay);
                    value = value + Math.random() * 21 - 10;
                    return {
                      name: now.toString(),
                      value: [
                        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                        Math.round(value)
                      ]
                    };
                  }
                  let data = [];
                  let now = new Date(2021, 9, 3);
                  let oneDay = 24 * 3600 * 1000;
                  let value = Math.random() * 1000;
                  for (var i = 0; i < 1000; i++) {
                    data.push(randomData());
                  }
                  var option15 = {
                    title: {
                      text: 'Dynamic Data & Time Axis'
                    },
                    tooltip: {
                      trigger: 'axis',
                      formatter: function (params) {
                        params = params[0];
                        var date = new Date(params.name);
                        return (
                          date.getDate() +
                          '/' +
                          (date.getMonth() + 1) +
                          '/' +
                          date.getFullYear() +
                          ' : ' +
                          params.value[1]
                        );
                      },
                      axisPointer: {
                        animation: false
                      }
                    },
                    xAxis: {
                      type: 'time',
                      splitLine: {
                        show: false
                      },
                      axisLabel: {
                        formatter: '{time} s',
                        fon
                      }
                      axisLine: {//y轴坐标颜色设置
                            lineStyle: {
                                    color: '#fff',
                                    width: 1, //这里是为了突出显示加上的
                                    
                                }
                            },
                    },
                    yAxis: {
                      type: 'value',
                      boundaryGap: [0, '100%'],
                      splitLine: {
                        show: false
                      },
                      axisLine: {//y轴坐标颜色设置
                            lineStyle: {
                                    color: '#fff',
                                    width: 1, //这里是为了突出显示加上的  
                                }
                            },
                    },
                    series: [
                      {
                        name: 'Fake Data',
                        type: 'line',
                        showSymbol: false,
                        data: data
                      }
                    ]
                  };
                  setInterval(function () {
                    for (var i = 0; i < 5; i++) {
                      data.shift();
                      data.push(randomData());
                    }
                    myChart.setOption({
                      series: [
                        {
                          data: data
                        }
                      ]
                    });
                  }, 1000);


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