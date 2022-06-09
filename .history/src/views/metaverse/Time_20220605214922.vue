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
   <el-row type="flex" justify="center" >
       <el-col :span="24">
            <div id="time" :data="option8" :style="{ minwidth: '440px', minHeight: '600px'}"></div>
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
                        { name: '圣彼得堡来客', value: 5.6 },
                        { name: '陀思妥耶夫斯基全集', value: 1 },
                        { name: '史记精注全译（全6册）', value: 0.8 },
                        { name: '加德纳艺术通史', value: 0.5 },
                        { name: '表象与本质', value: 0.5 },
                        { name: '其它', value: 3.8 }
                    ],
                    // ////////////////////////////////////////
                    [
                        { name: '银河帝国5：迈向基地', value: 3.8 },
                        { name: '俞军产品方法论', value: 2.3 },
                        { name: '艺术的逃难', value: 2.2 },
                        { name: '第一次世界大战回忆录（全五卷）', value: 1.3 },
                        { name: 'Scrum 精髓', value: 1.2 },
                        { name: '其它', value: 5.7 }
                    ],
                    ////////////////////////////////////////
                    [
                        { name: '克莱因壶', value: 3.5 },
                        { name: '投资最重要的事', value: 2.8 },
                        { name: '简读中国史', value: 1.7 },
                        { name: '你当像鸟飞往你的山', value: 1.4 },
                        { name: '表象与本质', value: 0.5 },
                        { name: '其它', value: 3.8 }
                    ]
                    ];
                    var option8 = {
                        title: {
                            text: '机器人类型分布',
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
                                height: '33.33%',
                                left: 'center',
                                width: 500,
                                textStyle: {
                                   fontSize:20,
                                    
                            },
                            label: {
                                alignTo: 'edge',
                                formatter: '{name|{b}}\n{time|{c} 小时}',
                                minMargin: 5,
                                edgeDistance: 10,
                                lineHeight: 15,
                                rich: {
                                time: {
                                    fontSize: 10,
                                    color: '#999'
                                }
                                }
                            },
                            labelLine: {
                                length: 15,
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
    font-size:33px;
    font-family: "微软雅黑";
    color:rgb(239, 250, 248);
    line-height: 1.3;
    display: flex;
    justify-content:center;
}
</style>