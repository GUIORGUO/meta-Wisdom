<template>
    <el-container>
        <el-main>
            <!-- 头部 -->
            <div class="header">
            <el-row :span="24" type="flex" justify="center">
              <el-col :span="15" >
                <h1 class="title1">面向元宇宙的众智智能度量平台</h1>
              </el-col>
            </el-row>
            <el-row :span="24" type="flex" justify="center" style="margin-top:10vh;">
                <el-col :span="8">
                    <div>
                        <a href="/Meta1"><img :src="require(`@/assets/image/VR1.png`)" alt="虚拟人度量" style="height:400px; width:400px;"></a>
                        <h2  class="" style="text-align:center;margin-left:270px;margin-top:-20px;">虚拟人度量</h2>
                    </div>
                </el-col>
                <el-col :span="8">
                    <a href="/Robot"><img src="~@/assets/image/robot.png" alt="机器人度量" style="height:400px; width:400px;"></a>
                    <h2 style="text-align:center;margin-left:270px;margin-top:-20px;">机器人度量</h2>
                </el-col>
                <el-col :span="8">
                    <a href="/MIX"><img src="~@/assets/image/robot2.png" alt="混合度量" style="height:400px; width:400px;"></a>
                    <h2 style="text-align:center;margin-left:290px;margin-top:-20px;">混合度量</h2>
                </el-col>
            </el-row>
            </div>
        </el-main>
    </el-container>
</template>
<style scoped>

.title1{
    font-size:200px;
    font-family: "微软雅黑";
    color:rgb(236, 252, 250);
    margin-top:25vh;
    margin-left:-10vh;
    line-height: 1.3;
    width: 70vw;
	height: auto;
	background: rgba(36, 36, 92, 0.5);
	padding: 35px 30px 25px;
	box-shadow: 0 0 30px rgba(255, 255, 255, .5);
	border-radius: 10px;
}
.el-main{
  background-image: url("~@/assets/image/top2.png");
  height: 100vh;
  background-repeat:no-repeat; 
  background-size: cover; 
  -webkit-background-size: cover; 
  -moz-background-size: cover; 
  -o-background-size: cover;
}
.h2{
   font-size:100px;
    margin-left: 160px;
}

</style>