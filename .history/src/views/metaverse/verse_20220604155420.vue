<template>
<!-- 柱状图 -->
  <div class="Woman" >
    <el-row type="flex" justify="center" style="margin-top:40px;">
       <el-col :span="24">
            <h3 class="title">
                生命值度量
            </h3>
      </el-col>
   </el-row>
   <el-row type="flex" justify="center" >
       <el-col :span="24">
            <div id="verse" :data="option5" :style="{ minwidth: '240px', minHeight: '400px'}"></div>
      </el-col>
   </el-row>
   </div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
import { onMounted } from "vue";
import * as echarts from 'echarts/core';
import { TooltipComponent, VisualMapComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { Bar3DChart } from 'echarts-gl/charts';
import { Grid3DComponent } from 'echarts-gl/components';
echarts.use([
  TooltipComponent,
  VisualMapComponent,
  Grid3DComponent,
  Bar3DChart,
  CanvasRenderer
]);

export default {
     setup() {
  
        onMounted(() => {
                    

                    //初始化图表
                  // let myChart = echarts.init(document.getElementById("myChart123"));
                  let myChart = echarts.init(document.getElementById("verse"));
                  //指定配置项和数据显示
                  // myChart.setOption(option);
                  myChart.setOption(option5);  
                
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
    font-size:25px;
    font-family: "微软雅黑";
    color:rgb(239, 250, 248);
    line-height: 1.3;
    display: flex;
    justify-content:center;
}
</style>