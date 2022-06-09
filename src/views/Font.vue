<template>
  <div>
    <el-row  type="flex" class="row-bg" justify="right" :span="24" :gutter="20">
        <el-col :span="20">
          <div class="users">
              <h2 >用户访问量</h2>
          </div> 
        </el-col>
        <el-col :span="4">
          
          <h1 class="wenzi">{{ message }}</h1>
          <router-view />
        </el-col>
    </el-row>
    
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      message: 10
    };
  },
  created(){
    setInterval(() => { this.message ++ }, 4000)
    },
}

</script>
 
<style>
@font-face {
  font-family: electronicFont;
  src: url(../font/DS-DIGIT.TTF);
  font-size: 50px;
  
}

.wenzi {
  font-family: electronicFont;
  letter-spacing: 3px;
  font-weight: 200;
  color: aqua;
 
  /* background: url(https://img.jbzj.com/file_images/article/201911/2019112909090958.png) no-repeat center center;
  background-size: 100% 100%; */
}
h2{
  /* font-size: 30px; */
 
  font-family: electronicFont;
  color: rgb(230, 248, 248);

  /* 行距line-height，字高font-size */
  line-height:1.5;   
  /* font-size: 30px; */
  -webkit-transition:font-size 0.2s ease-out;
  display:flex;
  justify-content: left;
    }
    @media only screen and (max-width: 2560px) { div{ font-size: 18px; }}
    @media only screen and (max-width: 1200px) { div{ font-size: 16px; }}
    @media only screen and (max-width: 1100px) { div{ font-size: 15px; }}
    @media only screen and (max-width: 1000px) { div{ font-size: 14px; }}
    @media only screen and (max-width: 900px) { div{ font-size: 13px; }}
    @media only screen and (max-width: 800px) { div{ font-size: 10px; }}
    @media only screen and (max-width: 700px) { div{ font-size: 15px; }}
    @media only screen and (max-width: 600px) { div{ font-size: 14px; }}
    @media only screen and (max-width: 500px) { div{ font-size: 13px; }}
    @media only screen and (max-width: 400px) { div{ font-size: 9px; }}
    @media only screen and (max-width: 300px) { div{ font-size: 8px; }}
    @media only screen and (max-width: 200px) { div{ font-size: 5px; }}

    @media only screen and (max-width: 1440px) { 
        .el-main{ 
            width: 260px;
            height:850px;
         }
    }
    @media only screen and (max-width: 1440px) and (min-width:1440px){ 
        .el-main{ 
            width: 348px;
            height:1000px;
         }
    }
    @media only screen and (min-width:1441px){ 
        .el-main{ 
            width: 348px;
            height:1362px;
         }
    }

</style>