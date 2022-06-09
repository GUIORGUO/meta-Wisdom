<template>
  <div class="block">
      <el-row type="flex" justify="center" :span="24">
          <el-col :span="2">
              <span class="el-icon-data">统计日期</span>
          </el-col>
          <el-col :span="6">
              <div class="el-icon-date">{{dateFormat(date)}}</div>
          </el-col>
          <el-col :span="1">
              <span >至</span>
          </el-col>
           <el-col :span="6">
              
              <div class="el-icon-date">{{dateFormat(date)}}</div>
          </el-col>
      </el-row>
    
  </div> 
  
</template>
<script>
  export default {
      data(){
      return{
        date:new Date(),
        
      }
    },
    methods:{
      dateFormat(time) {
          var date=new Date(time);
          var year=date.getFullYear();
          /* 在日期格式中，月份是从0开始的，因此要加0
          * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
          * */
          var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
          var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
          var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
          var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
          var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
          // 拼接
          return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
      }
    },
    mounted() {
          //显示当前日期时间
          let _this = this// 声明一个变量指向Vue实例this，保证作用域一致
          this.timer = setInterval(() => {
           _this.date = new Date(); // 修改数据date
           }, 1000)
       },
      beforeDestroy() {
       if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
      }
    }
  };

    

</script>
<style scoped>
.el-icon-date{
   padding:10px;
   weight:100%;
   line-height: 20px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.demonstration{
    padding:10px;
    line-height: 10px;
    margin-top: 100px;
}
</style>