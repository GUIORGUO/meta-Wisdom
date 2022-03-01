<template>
<!-- 柱状图 -->
  <div class="Device" >
   <el-row type="flex" justify="center">
       <el-col :span="24" >
            <div id="myChart12" :data="option" :style="{ minwidth: '250px', minHeight: '360px'}"></div>
            
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
           var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: 'Step Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Step Start', 'Step Middle', 'Step End']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Step Start',
      type: 'line',
      step: 'start',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Step Middle',
      type: 'line',
      step: 'middle',
      data: [220, 282, 201, 234, 290, 430, 410]
    },
    {
      name: 'Step End',
      type: 'line',
      step: 'end',
      data: [450, 432, 401, 454, 590, 530, 510]
    }
  ]
};
                    //初始化图表
                  // let myChart = echarts.init(document.getElementById("myChart123"));
                  let myChart2 = echarts.init(document.getElementById("myChart12"));
                  //指定配置项和数据显示
                  // myChart.setOption(option);
                  myChart2.setOption(option);  
                
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
