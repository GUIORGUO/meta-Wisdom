<template slot-scope="{}">
<!-- 柱状图 -->
  <div class="Line" >
    <el-row type="flex" justify="center" style="margin-top:40px;">
       <el-col :span="24">
            <h3 class="title">
                任务量度量
            </h3>
      </el-col>
   </el-row>
    <el-row type="flex" justify="center" >
       <el-col :span="24">
            <div class="AA">
                <el-dropdown split-button type="primary">
                    任务数量
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="a">10</el-dropdown-item>
                        <el-dropdown-item command="b">30</el-dropdown-item>
                        <el-dropdown-item command="c">50</el-dropdown-item>
                        <el-dropdown-item command="d">70</el-dropdown-item>
                        <el-dropdown-item command="e" >90</el-dropdown-item>
                        <el-dropdown-item command="f" divided>110</el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
      </el-col>
   </el-row>
   <el-row type="flex" justify="center" >
       <el-col :span="24">
            <div id="Line1" :data="option6" :style="{ minwidth: '240px', minHeight: '400px'}"></div>
            
            <div v-if="command === 'a' ">
            option.series[0].data = [20, 10, 50, 80, 70, 10, 30]
            </div>
            <div v-else-if="type === 'B'">
            B
            </div>
            <div v-else-if="type === 'C'">
            C
            </div>
            <div v-else>
            Not A/B/C
            </div>
      </el-col>
   </el-row>
   </div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
import { onMounted } from "vue";
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

export default {
     setup() {
        
        onMounted(() => {
                   var option6 = {
                        xAxis: {
                            type: 'category',
                            //该data改变图也会改变
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [
                            {
                            //该data改变图就会改变
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: 'line',
                            symbol: 'triangle',
                            symbolSize: 20,
                            lineStyle: {
                                color: '#5470C6',
                                width: 4,
                                type: 'dashed'
                            },
                            itemStyle: {
                                borderWidth: 3,
                                borderColor: '#EE6666',
                                color: 'yellow'
                            }
                            }
                        ]
                        };

                    //初始化图表
                  // let myChart = echarts.init(document.getElementById("myChart123"));
                  let myChart = echarts.init(document.getElementById("Line1"));
                  //指定配置项和数据显示
                  // myChart.setOption(option);
                  myChart.setOption(option6);  
                
                  //全局设置Echrts - 根据窗口的大小变更图表
                  window.onresize = function () {
                    // 自适应大小
                  myChart.resize();
                  };  
                   
                     
        });
     },
      methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);

        if (command ==='a')
                 option6.series[0].data = [20, 10, 50, 80, 70, 10, 30];         
        else if (command ==='b')
                option6.series[0].data = [20, 10, 50, 80, 70, 10, 30];
        
             else if (command ==='c')
                    option6.series[0].data = [20, 10, 50, 80, 70, 10, 30];
             
                  else option6.series[0].data = [20, 10, 50, 80, 70, 10, 30];
      }
    }
};

</script>

<style scoped>
.title{
    font-size:26px;
    font-family: "微软雅黑";
    color:rgb(239, 250, 248);
    line-height: 1.3;
    display: flex;
    justify-content:center;
}
.AA{
    display: flex;
    justify-content: center;
}
</style>