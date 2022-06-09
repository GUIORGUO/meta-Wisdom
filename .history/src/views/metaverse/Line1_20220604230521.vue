<template slot-scope="{}">
  <!-- 柱状图 -->
  <div class="Line">
    <el-row type="flex" justify="center" style="margin-top: 40px">
      <el-col :span="24">
        <h3 class="title">任务量度量</h3>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="24">
        <div class="AA">
          <el-dropdown split-button type="primary" @command="handleCommand">
            任务数量
            <el-button type="primary">
                Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="a">10</el-dropdown-item>
                <el-dropdown-item command="b">30</el-dropdown-item>
                <el-dropdown-item command="c">50</el-dropdown-item>
                <el-dropdown-item command="d">70</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="24">
        <div
          id="Line1"
          :data="option6"
          :style="{ minwidth: '240px', minHeight: '400px' }"
        ></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
import { onMounted } from "vue";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { ElMessage } from "element-plus";
import { ArrowDown } from "@element-plus/icons-vue";

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

export default {
  data() {
    return {
      myChart: null,
      option6: null,
    };
  },
  mounted() {
      //mounted（A部门）{founction(B部门)两个重名，且founction中的this指代里面的this，但里面没有this，}所以让他指向mounted中的this
    var that = this;
    this.option6 = {
      xAxis: {
        type: "category",
        //该data改变图也会改变
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLine: {//x轴坐标颜色设置
            lineStyle: {
                color: '#ffffff',
            }
        },
      },
      yAxis: {
        type: "value",
        axisLine: {//y轴坐标颜色设置
            lineStyle: {
                color: '#ffffff',
            }
        },
      },
      series: [
        {
          //该data改变图就会改变
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "line",
          symbol: "triangle",
          symbolSize: 20,
          lineStyle: {
            color: "#5470C6",
            width: 4,
            type: "dashed",
          },
          itemStyle: {
            borderWidth: 3,
            borderColor: "#EE6666",
            color: "yellow",
          },
        },
      ],
    };

    //初始化图表
    // 前面data return中有了mychart 所以用this
    this.myChart = echarts.init(document.getElementById("Line1"));
    //指定配置项和数据显示
    this.myChart.setOption(this.option6);

    //全局设置Echrts - 根据窗口的大小变更图表
    window.onresize = function () {
      // 自适应大小
      that.myChart.resize();
    };
  },
  methods: {
      //el-dropdown要 关联触发方法“handleCommand”
    handleCommand(command) {
      console.log(command);
      if (command === "a") {
        this.option6.series[0].data = [220, 110, 150, 180, 170, 110, 230];
      }
      if (command === "b") {
        this.option6.series[0].data = [10, 210, 520, 380, 470, 100, 130];
      }
      if (command === "c") {
        this.option6.series[0].data = [0, 110, 150, 180, 170, 10, 130];
      }
      if (command === "d") {
        this.option6.series[0].data = [2, 1, 5, 8, 7, 1, 3];
      }
      this.myChart.setOption(this.option6);
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 26px;
  font-family: "微软雅黑";
  color: rgb(239, 250, 248);
  line-height: 1.3;
  display: flex;
  justify-content: center;
}
.AA {
  display: flex;
  justify-content: center;
}
</style>