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
            <div id="four" :data="option12" :style="{ minwidth: '540px', minHeight: '1160px'}"></div>
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
  LegendComponent
} from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  DatasetComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);


export default {
     setup() {
  
        onMounted(() => {
                   
                  var option12 = {
                    legend: { //图例小标
                            top:'45%',  //标题与legend重合时。用top间隔7像素
                            textStyle: {
                                color:'#90edef',
                                fontSize: 35,
                            }
                        },
                    tooltip: {},//弹窗组件
                    dataset: {
                        source: [
                        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
                        ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                        ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                        ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                        ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
                        ],

                   
                    },
                 
                    series: [
                        
                        {
                        type: 'pie',
                        radius: '40%',//饼图半径大小
                        label:{
                            fontSize:30,
                            color:'#ffffff'
                        },
                        center: ['30%', '20%']//饼图位置                       
                        // No encode specified, by default, it is '2012'.
                        },

                        {
                        type: 'pie',
                        radius: '40%',
                        center: ['75%', '20%'],
                        encode: {
                            itemName: 'product',
                            value: '2013',
                            
                        },
                        label:{
                            fontSize:30,
                            color:'#ffffff'
                        },
                        },
                        {
                        type: 'pie',
                        radius: '40%',
                        center: ['30%', '75%'],
                        label:{
                            fontSize:30,
                            color:'#ffffff'
                        },
                        encode: {
                            itemName: 'product',
                            value: '2014'
                            
                        }
                        },
                        {
                        type: 'pie',
                        radius: '40%',//饼图大小
                        label:{
                            fontSize:30,
                            color:'#ffffff'
                        },
                        center: ['75%', '75%'],
                        encode: {
                            itemName: 'product',
                            value: '2015'
                        }
                        }
                    ]
                    };

                    //初始化图表
                  // let myChart = echarts.init(document.getElementById("myChart123"));
                  let myChart = echarts.init(document.getElementById("four"));
                  //指定配置项和数据显示
                  // myChart.setOption(option);
                  myChart.setOption(option12);  
                
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