<template>
<!-- 柱状图 -->
  <div class="Woman" >
    <el-row type="flex" justify="center" style="margin-top:40px;">
       <el-col :span="24">
            <h3 class="title">
                工作时长度量
            </h3>
      </el-col>
   </el-row>
   <el-row type="flex" justify="center" style="margin-top:-15px">
       <el-col :span="24">
            <div id="time" :data="option8" :style="{ minwidth: '700px', minHeight: '1290px'}"></div>
      </el-col>
   </el-row>
   </div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
//onmounted必须有
import { onMounted } from "vue";
import { TitleComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([TitleComponent, PieChart, CanvasRenderer, LabelLayout]);

export default {
     setup() {
  
        onMounted(() => {
                   const datas = [
                    ////////////////////////////////////////
                    [
                        { name: '学习', value: 5.6 },
                        { name: '记忆', value: 1 },
                        { name: '运作', value: 0.8 },
                        { name: '比较', value: 0.5 },
                        { name: '判断', value: 0.5 },
                        { name: '其它', value: 3.8 }
                    ],
                    // ////////////////////////////////////////
                    [
                        { name: '运算', value: 3.8 },
                        { name: '鉴别', value: 2.3 },
                        { name: '决策', value: 2.2 },
                        { name: '逻辑推理', value: 1.3 },
                        { name: '循环', value: 1.2 },
                        { name: '其它', value: 5.7 }
                    ],
                    ////////////////////////////////////////
                    [
                        { name: '劳作', value: 3.5 },
                        { name: '自动执行任务', value: 2.8 },
                        { name: '协助人类', value: 1.7 },
                        { name: '运行', value: 1.4 },
                        { name: '控制', value: 0.5 },
                        { name: '其它', value: 3.8 }
                    ]
                    ];
                    var option8 = {
                        title: {
                            text: '',
                            left: 'center',
                            textStyle: {
                            color: '#ffffff',
                            fontWeight: 'normal',
                            fontSize: 19
                            }
                        },
                        series: datas.map(function (data, idx) {
                            var top = idx * 33.3;
                            return {
                                type: 'pie',
                                // radius: [20, 60],
                                top: top + '%',
                                height: '33.8%',
                                left: 'center',
                                width: 600,
                                 itemStyle: {
                                     //饼状图边框
                                    borderColor: '#fff',
                                    borderWidth: 1
                                },
                            label: {//饼图上边上文字颜色style
                                alignTo: 'edge',
                                formatter: '{name|{b}}\n{time|{c} 小时}',//文本内容形式设置
                                minMargin: 7,
                                edgeDistance: 10,
                                lineHeight: 28,
                                fontSize: 25,
                                color:'#ffffff',
                                rich: {
                                time: {
                                    fontSize: 20,
                                    color: '#fff'
                                }
                                }
                            },
                            labelLine: {
                                length: 13,
                                length2: 0,
                                maxSurfaceAngle: 80
                            },
                            labelLayout: function (params) {
                                const isLeft = params.labelRect.x < myChart.getWidth() / 2;
                                const points = params.labelLinePoints;
                                // Update the end point.
                                points[2][0] = isLeft
                                ? params.labelRect.x
                                : params.labelRect.x + params.labelRect.width;
                                return {
                                labelLinePoints: points
                                };
                            },
                            data: data
                            };
                        })
                    };

                    //初始化图表
                  // let myChart = echarts.init(document.getElementById("myChart123"));
                  let myChart = echarts.init(document.getElementById("time"));
                  //指定配置项和数据显示
                  // myChart.setOption(option);
                  myChart.setOption(option8);  
                
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
#time{
    margin-top: -20px;
}
</style>