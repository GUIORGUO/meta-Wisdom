<template>
<!-- 喜好类型统计 -->
   <el-row type="flex" justify="start">
       <el-col :span="24" >
            <div id="myChart1234" :data="option2" :style="{ width: '390px', height: '300px'}"></div>
      </el-col>
   </el-row>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
import { onMounted } from "vue";


export default {
  setup() {
  
    onMounted(() => {

     
       var option2 = {
         title: {
          left: "center",
          text: "喜好类型统计",
          textStyle:{
              color:'#90edef',
          },
         },
         dataset: {
            source: [
            ['score', 'amount', 'product'],
            [89.3, 58212, '鬼畜'],
             [57.1, 78254, '娱乐'],
             [74.4, 41032, '时尚'],
             [50.1, 12755, '学习'],
             [89.7, 20145, '影视'],
            [68.1, 79146, 'vlog'],
            [19.6, 91852, '音乐'],
            [10.6, 101852, '电影'],
            [32.7, 20112, '演讲']
             ]
         },
         grid: { containLabel: true },
         xAxis: { name: '' },  //数量"amount"x轴下标
         yAxis: { type: 'category' },  //类型
         visualMap: {
             orient: 'horizontal',
             left: 'center',
             min: 10,
             max: 100,
             text: ['High Score', 'Low Score'],
             // Map the score column to color
             dimension: 0,
           inRange: {
             color: ['#90edef', '#f0f077', '#FD665F']
            }
        },
         series: [
             {
           type: 'bar',
           encode: {
            // Map the "amount" column to X axis.
               x: 'amount',
                // Map the "product" column to Y axis
               y: 'product'
            }
           }
        ]
        };
        
        //初始化图表
      // let myChart = echarts.init(document.getElementById("myChart123"));
      let myChart1 = echarts.init(document.getElementById("myChart1234"));
  
      //指定配置项和数据显示
      // myChart.setOption(option);
      myChart1.setOption(option2);  

      window.onresize = function () {
        // 自适应大小
        myChart.resize();
      };
   
   }); 
  },
};
</script>
<style lang="scss" scoped>
    #myChart1234{

      margin-left: -40px;
    }
</style>
