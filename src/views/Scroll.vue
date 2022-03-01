<template>
<!-- 喜好类型统计 -->
  <div class="Scroll" >
    <el-row type="flex" justify="center">
       <el-col :span="24" >
            <div id="myChart1234" :data="option2" :style="{ minwidth: '250px', minHeight: '360px'}"></div>
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
export default {
    data(){
        return{    
            LikeInfo:{       //LikeInfo:这个变量只在当前组件中生效
                list:[],
            },
        };
    },
    //数据请求
    created(){  
        // this.getLikeInfo();
    },
    methods:{
        
    },
    mounted(){      //一般异步请求的数据请求使用的生命周期函数为mounted（此时数据及渲染完成）
      
            getLikeInfo().then((res) =>{     //.then获取getLikeInfo回调函数的响应值给res
                console.log('响应的数据');
                console.log(res);            //打印出响应值
                //this.LikeInfo = res;
                //把res的结构恢复成原source的结构再复制给this.source
                var source =[];   //页面中source未定义，找不到source内容
                var a = ['score', 'amount', 'product'];
                  source.push(a)    // push（）向source数组末尾添加数组a[]
                res.list.forEach(item => {    //遍历res中的list数组---每一个项a[0],a[1]都是一个item
                  source.push([item.score, item.amount,item.product])//每次遍历都要在source的基础上加上list的一个小item
                });
                console.log(source)
               //原图表内容“只修改了数组部分dataset”
                var option2 = {
                    title: {
                      left: "center",
                      text: "喜好类型统计",
                      textStyle:{
                          color:'#fff',
                      },
                    },
                    dataset: {
                        source: source  //source已成功出来（图表中所有的可变数据）
                      },
                    //  dataset: {
                    //     source: [
                    //     ['score', 'amount', 'product'],
                    //     [89.3, 58212, '鬼畜'],
                    //      [57.1, 78254, '娱乐'],
                    //      [74.4, 41032, '时尚'],
                    //      [50.1, 12755, '学习'],
                    //      [89.7, 20145, '影视'],
                    //     [68.1, 79146, 'vlog'],
                    //     [19.6, 91852, '音乐'],
                    //     [10.6, 101852, '电影'],
                    //     [32.7, 20112, '演讲']
                    //      ]
                    //  },
                    xAxis: { 
                      name: '' ,
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#c3dbff',  //更改坐标轴文字颜色
                              fontSize : 12      //更改坐标轴文字大小
                            } 
                        } ,
                      },  //数量"amount"x轴下标
                    yAxis: { 
                      type: 'category',
                      axisLabel: {
                          show: true,
                            textStyle: {
                              color: '#c3dbff',  //更改坐标轴文字颜色
                              fontSize : 12      //更改坐标轴文字大小
                            } 
                        } ,
                      axisLine:{
                            lineStyle:{
                              color:'#fff' //更改坐标轴颜色
                          } 
                    } 
                     },  //类型
                    visualMap: {
                        orient: 'horizontal',
                        top:'15%',
                        left: 'center',
                        min: 0,
                        max: 100,
                        text: ['High Score', 'Low Score'],
                        textStyle: {
                              color: '#c3dbff',  //更改坐标轴文字颜色
                              fontSize : 10      //更改坐标轴文字大小
                            },
                        itemHeight: 90,//图例长度
                        itemWidth: 14,//图例宽度
                        // Map the score column to color
                        dimension: 0,
                      inRange: {
                        color: ['#90edef', '#f0f077', '#FD665F']
                        }
                    },
                    grid:{//调整图表和标题的距离
                       bottom: '10%',
                       top: '30%',
                       left:'2%',
                       right:'10%',
                       containLabel: true
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
                  this.autoHeight = this.counts * 55 + 50; // this.counts为柱状图的条数，即数据长度。

　　                myChart1.getDom().style.height = this.autoHeight + "px";
                  //指定配置项和数据显示
                  // myChart.setOption(option);
                  myChart1.setOption(option2);  

                  window.onresize = function () {
                    // 自适应大小
                  myChart1.resize();
                  };
            });      
    },
  
};
</script>
<style lang="scss" scoped>
    // #myChart1234{
    //   margin-left: -40px;
    // }
</style>
