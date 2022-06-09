<template>

<div id="Third">
  <el-row type="flex" justify="center">
    <el-col :span="24">
                              <!-- 刚开始圆环内的文字显示不全，因此要直接设置全局文字行高才可以 -->
      <dv-active-ring-chart :config="config" style="margin-top:-60px;width:800px;height:300px;line-height:22px;" />
    </el-col>
  </el-row>

</div>

</template>

<script>
import * as echarts from "echarts";
import {reactive, ref, onMounted } from 'vue'

export default {
 
  data(){
    return {
      config: {
            radius: '57%',  //圆环大小
            activeRadius: '66%',//半径大小
            lineWidth: 20,
            data: [
                    {
                    name: '周口',
                    value: 55
                    },
                    {
                    name: '南阳',
                    value: 120
                    },
                    {
                    name: '西峡',
                    value: 78
                    },
                    {
                    name: '驻马店',
                    value: 66
                    },
                    {
                    name: '新乡',
                    value: 80
                    }
                ],
            digitalFlopStyle: {
                fontSize: 20,
                

            }
    }
  }
  }
}
</script>
<style lang="scss" scoped>

</style>