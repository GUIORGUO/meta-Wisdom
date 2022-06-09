<template>
<!-- 柱状图 -->
  <div class="Device" >
   <el-row type="flex" justify="center">
       <el-col :span="24" >
            <div id="myChart12345" :data="option3" :style="{ minwidth: '250px', minHeight: '530px'}"></div>
            
      </el-col>
   </el-row>
   </div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
import { onMounted } from "vue";
//axios获取rap2数据
import{ getLikeInfo }from "@/api/index";
import {EleResize} from '../assets/esresize.js'

export default {
     setup() {
  
        onMounted(() => {
            // Generate data
            let category = [];
            let dottedBase = +new Date();
            let lineData = [];
            let barData = [];
            for (let i = 0; i < 20; i++) {
            let date = new Date((dottedBase += 3600 * 24 * 1000));
            category.push(
                [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
            );
            let b = Math.random() * 60;
            let d = Math.random() * 60;
            barData.push(b);
            lineData.push(d + b);
            }
            // option
            var option3 = {
            // backgroundColor: '#0f375f',
            title: {
                      left: "center",
                      text: "金币值度量",
                      textStyle:{
                        //   color:'#90edef',
                        color:'#fff',
                        fontSize:"26px"//Size必须大写S  才可以修改
                      },
                    },
            tooltip: {
                trigger: 'axis',//弹窗组件
                axisPointer: {
                type: 'shadow'
                }
            },
            legend: { //图例小标
                data: ['line', 'bar'],
                top:'15%',  //标题与legend重合时。用top间隔7像素
                textStyle: {
                    color:'#90edef',
                }
            },
            grid:{//调整图表和标题的距离
                    //    bottom: '10%',
                       top: '25%',
                       left:'2%',
                       right:'4%',
                       height:'500px',
                       containLabel: true
                     },
            xAxis: {
                data: category,
                axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
                }
            },
            yAxis: {
                splitLine: { show: false },
                axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
                }
            },
            series: [
                {
                name: 'line',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 15,
                data: lineData
                },
                {
                name: 'bar',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    borderRadius: 5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#14c8d4' },
                    { offset: 1, color: '#43eec6' }
                    ])
                },
                data: barData
                },
                {
                name: 'line',
                type: 'bar',
                barGap: '-100%',
                barWidth: 10,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(20,200,212,0.5)' },
                    { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                    { offset: 1, color: 'rgba(20,200,212,0)' }
                    ])
                },
                z: -12,
                data: lineData
                },
                {
                name: 'dotted',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {
                    color: '#0f375f'
                },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                z: -10,
                data: lineData
                }
            ]
            };

                    //初始化图表
                  // let myChart = echarts.init(document.getElementById("myChart123"));
                  let myChart2 = echarts.init(document.getElementById("myChart12345"));
                  //指定配置项和数据显示
                  // myChart.setOption(option);
                  myChart2.setOption(option3);  
                
                  //全局设置Echrts - 根据窗口的大小变更图表
                  window.onresize = function () {
                    // 自适应大小
                  myChart2.resize();
                  };  
                   
                     
        });
     },
};
</script>
<style lang="scss" scoped>
 
</style>
