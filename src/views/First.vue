<template>

<div id="first">
  <!-- 路由跳转 -->
   <!-- 千万注意大小写myChart2如果写错，就什么也出不来 -->
   <div>
     <Map />
   </div>
  <!-- <dv-scroll-board :config="config" style="width:500px;height:420px" /> -->
   <dv-scroll-board  :config="config1"  style="width:500px;height:300px;"  />
   <dv-scroll-ranking-board :config="ranking" style="height: 100%" />
  
  <div ref="myChart2" style="width:500px;height:250px;"></div>   
  <!-- <Second /> -->
  <el-row>
  <el-col span="3">
       <Second />
  </el-col>
  </el-row>
</div>

</template>

<script>

import {reactive, ref, onMounted } from 'vue'  //按需导入reactive ref onMounted函数
import * as echarts from 'echarts'     //按需导入图表
import Second from './Second.vue';
import Map from './Map.vue';


export default {
  components: { Second, Map },
  props:['AreaData'],
  data(){
    return {
      config1: {
        indexHeader:'序号',
        header: ["组织名称", "组织编号", "组织联系方式"],
        data: [
          ["张三直播间", "2233111", "13797646522"],
          ["游戏直播间", "2233112", "13766258223"],
          ["元宇宙", "2233113", "13781519821"],
          ["机器学习研讨会", "2255156", "18915123112"],
          ["碳中和", "2255623", "18911231212"],
          ["雷诺机构", "2233111", "18632456985"],
          ["人生观交流会", "1155631", "18123121232"],
          ["成群网络会", "1100352", "18121212301"],
          ["棋牌室", "1252120", "16896656562"],
          ["Scaner交流会", "1212512", "15366568456"],
        ],
        rowNum: 7, //表格行数
        headerHeight: 35,
        headerBGC: "#00baff", //表头
        // oddRowBGC: "#0f1325", //奇数行
        // evenRowBGC: "#171c33", //偶数行
        index: true,
        columnWidth: [50],
        align: ["center"],
      },
       ranking: {
        data1: [
          {
            name: "虹口区",
            value: 55,
          },
          {
            name: "奉贤区",
            value: 120,
          },
          {
            name: "浦东新区",
            value: 78,
          },
          {
            name: "宝山区",
            value: 66,
          },
          {
            name: "徐汇区",
            value: 40,
          },
          {
            name: "金山区",
            value: 60,
          },
          {
            name: "长宁区",
            value: 88,
          },
          {
            name: "普陀区",
            value: 45,
          },
          {
            name: "闵行区",
            value: 39,
          },
          {
            name: "静安区",
            value: 82,
          },
          {
            name: "嘉定区",
            value: 58,
          },
          {
            name: "青浦区",
            value: 94,
          },
          {
            name: "松江区",
            value: 40,
          },
          {
            name: "杨浦区",
            value: 80,
          },
        ],
        carousel: "single",
        unit: "次",
      },


  //     config:{
  //       header: ['地区编码','地区名称','订单数量'],
  //       indexHeader:'序号',
  //       columnWidth: [50],
  //       carousel: 'page',
  //       index: true,
  //       columnWidth: [50],
  //       rowNum: 23, // 表行数
  //       headerBGC: '#50b9f9', // 表头背景色
  //       oddRowBGC: '#122631', // 奇数行背景色
  //       evenRowBGC: '#153a4f', // 偶数行背景色
  //       waitTime: 1000, // 轮播时间间隔(ms)
  //       align: ['center'],
  //       data: [ 
  //         ['行1列1', '行1列2', '行1列3'],
  //         ['行2列1', '行2列2', '行2列3'],
  //         ['行3列1', '行3列2', '行3列3'],
  //         ['行4列1', '行4列2', '行4列3'],
  //         ['行5列1', '行5列2', '行5列3'],
  //         ['行6列1', '行6列2', '行6列3'],
  //         ['行7列1', '行7列2', '行7列3'],
  //         ['行8列1', '行8列2', '行8列3'],
  //         ['行9列1', '行9列2', '行9列3'],
  //         ['行10列1', '行10列2', '行10列3']
  //         ]
  //     }
  //   }
  // },
  // watch:{
  //   AreaData(val){
  //     console.log(val)
  //     let arr = []
  //     if(val.length >0){
  //       for(let i in val){
  //         let code = val[i].area
  //         let name = val[i].name
  //         let num = val[i].num
  //         arr.push([code,name, `<div style="background:#67e0e3; white-space:nowrap; width:${num/1000}px !important">${num}</div>`])
  //       }
  //       let nowData = this.config
  //       nowData.data = arr
  //       this.config = {...nowData}
  //     }
     }
   },


    setup() {
      const state = reactive({     //创建响应式的数据对象
           myChart2:ref()
      });
      
      const init=()=>{//定义方法
          if(state.myChart2){
            //  图表初始化
            var mychart = echarts.init(state.myChart2);
            //  图表配置信息
            const option = {
              xAxis:{
                type:'category',
                data:['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
              },
              yAxis:{
                type:'value'
                },
                series:[
                  {
                    data:[100,200,300,500,499,334,666],  //图表的数据
                    type:'line'     //图表类型
                  }
                ]
            }
            //指定配置项和数据显示
            mychart.setOption(option);
          }
      }
      onMounted(()=>{
          init()
      })
      return state;
    },
  
}
</script>
<style lang="scss" scoped>
// .dv-scroll-board{
//     color:rgb(253, 250, 250);
//      .header-item{
//       font-size: 1em;
//       text-align: center;
//       white-space: nowrap;
//       color:#FFF !important;
//     }
//     .rows{
//       .row-item{
//         text-align: center;
//         line-height: 2rem;
//         .ceil{
//           color:#3bedf3;
//           font-size: 1em;
//           i{
//             font-size: 0.5em;
//           }
//         }
//         .ceil:nth-child(2){
//           color: #eb5a6d !important;
//           font-size: 1.1em;
//           width: 25%;
//         }
//       }
//     }
//   }
//   .test{
//     width: 10px;
//     background-size: 10% 10%;
//     word-break:keep-all;/* 不换行 */
//     white-space:nowrap;/* 不换行 */
//     background: #eb5a6d;
//   }

</style>
