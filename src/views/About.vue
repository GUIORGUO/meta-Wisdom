<template>
    <div >
      <el-container>
          <el-main>
          <!-- 头部 -->
            <div class="header">
            <el-row :span="24" type="flex" justify="center">
              <el-col :span="6">
                  <!-- <dv-decoration-3 style="max-width:300px;height:30px;margin-left:50px;float:left" />
                  <dv-decoration-8 style="min-width:200px;height:40px;margin-top:-10px;float:left" /> -->
              </el-col>
              <el-col :span="12" >
                <h1 class="title">端边云计算与传输实验前端展示</h1>
                <dv-decoration-5 class="datav-header" />
              </el-col>
              <el-col :span="6">
                <!-- <dv-decoration-3 style="max-width:300px;height:30px;float:right;margin-right:50px;" />
                <dv-decoration-8 :reverse="true" style="min-width:200px;height:40px;float:left;margin-top:-10px;" /> -->
              </el-col>
            </el-row>
            </div>
            <!-- 中间部分 -->
            <!-- 视频块 -->
            <div class="main">
              
                 <el-row type="flex" justify="space-around" style="margin-top:10px;" :gutter="6" >
                    <el-col :span="12">
                      <div class="video1" >
                         <dv-border-box-11 title="端边云展示" style="height:1000px;">
                            <div class="video-box">
                                  <el-row type="flex" justify="space-around" >
                                      <el-col :span="24">
                                          <video
                                                class="card-video"
                                                id="myvideo14"
                                                controls
                                                autoplay
                                                muted
                                                style="padding:10px;">
                                          </video>
                                      </el-col>
                                  </el-row>
                              </div>    
                          </dv-border-box-11>    
                      </div>
                    </el-col>
                     <el-col :span="12">
                      <div class="video2">
                         <dv-border-box-11 title="端云展示" style="height:1000px;">
                            <div class="video-box">
                                  <el-row type="flex" justify="space-around" >
                                      <el-col :span="24">
                                          <video
                                                class="card-video"
                                                id="myvideo15"
                                                controls
                                                autoplay
                                                muted
                                                style="padding:10px;">
                                          </video>
                                      </el-col>
                                  </el-row>
                              </div>    
                          </dv-border-box-11>    
                      </div>
                    </el-col>
                 </el-row>




                    <!-- 资源监测块 -->
                     <!-- <el-col :span="12">

                          <div class="data-box" style="padding:20px;">
                            <el-row type="flex" justify="space-around" :span="24">
                              <el-col :span="24">
                                <iframe src="http://10.41.5.189:8088/" id="mobsf" scrolling="no" frameborder="0" style="min-height：600px; min-width:600px;"></iframe>
                              </el-col>
                            
                            </el-row>
                          </div>
                    </el-col> -->
               
              
            </div>
          </el-main>
      
      </el-container>
    </div>
      
</template>
<style scoped>

    .datav-header{
        max-width:1000px;
        max-height:100px;
        margin-top:-45px;
        margin-left:110px;
        /* 弹性盒居中排列 justify-content 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式*/
        display:flex;
        justify-content: center;
    }
    .title{
        color: rgb(230, 248, 248);
        font-family: "微软雅黑";
        /* 行距line-height，字高font-size */
        line-height:1.5;   
        /* font-size: 30px; */
        margin-top: -2px;
        -webkit-transition:font-size 0.2s ease-out;
        display:flex;
        justify-content: center;
    }
    @media only screen and (max-width: 2560px) { div{ font-size: 30px; }}
    @media only screen and (max-width: 1200px) { div{ font-size: 20px; }}
    @media only screen and (max-width: 1100px) { div{ font-size: 18px; }}
    @media only screen and (max-width: 1000px) { div{ font-size: 16px; }}
    @media only screen and (max-width: 900px) { div{ font-size: 14px; }}
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
.el-main{
       /* 背景图片 */
        /* background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffujian.passboat.com%2Fuploads%2F0108%2F15784732420007d20.png&refer=http%3A%2F%2Ffujian.passboat.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650165222&t=a11385d502adb208a7706e6c3a8c6ff0);  */
        background-image: url(../assets/background.jpg); 
        height: 100vmin;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        
        /* min-height: 850px; */
    }
.flv_box14{
    /* 1vw = 视口宽度的1%，视口宽1920px，那么1vw 等于19.2px */
    /* 1vh = 视口高度的1%，视口高1000px，那么1vh 等于10px */
    width: 40vh; 
    height: 30vh;   
    margin-top: 10px;
}
#myvideo14{
    width: 100%;
    height: 100%;
}
.flv_box15{
    /* 1vw = 视口宽度的1%，视口宽1920px，那么1vw 等于19.2px */
    /* 1vh = 视口高度的1%，视口高1000px，那么1vh 等于10px */
    width: 40vh; 
    height: 30vh;   
    margin-top: 10px;
}
#myvideo15{
    width: 100%;
    height: 100%;
}
.video1{
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.video2{
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.video-box{
    padding:30px;
    min-height: 700px;
    margin-top: 10px;
    /* margin-top: 100px;*/
    margin-left: -15px; 
   
   
}
.card-video{
    height: 100%;
    width: 100%;
}

.grid-content {

    min-height: 36px;
  }
</style>
<script>
import flv14 from 'flv.js';
import flv15 from 'flv.js';
export default {
   data(){
        return{
            player14: null,
            playing14: false,
            player15: null,
            playing15: false,
        };
   },
   created(){
        if (flv14.isSupported()) {
            this.player14 = flv14.createPlayer({
                type: "flv",
                isLive: true,
                hasAudio: false,
                hasVideo: true,
                enableStashBuffer: true,
                //   type: "video/mp4",
                url: "http://10.208.104.243/flv/yolotrt_edge1", //视频资源路径  支持：httprtmp://10.208.104.243:1935/live/yolo_edge1
            });
            }

          if (flv15.isSupported()) {
            this.player15 = flv15.createPlayer({
                type: "flv",
                isLive: true,
                hasAudio: false,
                hasVideo: true,
                enableStashBuffer: true,
                //   type: "video/mp4",
                url: "http://10.208.104.243/flv/yolo_cloud1", //视频资源路径  支持：httprtmp://10.208.104.243:1935/live/yolo_edge1
            });
            }   

   },
   methods:{
        onClick14(){
            console.log('播放')
                this.player14.play()
                this.playing14 = true;
            },
        clickStop14(){
                console.log('暂停')
                this.player14.pause()
                this.playing14 = false;
            },
         onClick15(){
            console.log('播放')
                this.player15.play()
                this.playing15 = true;
            },
        clickStop15(){
                console.log('暂停')
                this.player15.pause()
                this.playing15 = false;
            },
        get(){
                let obj = $('#myIframe').contents().find('#u1');
                console.log(obj);
            },

        /* 跳转界面*/ 
        Jump1:function(){
          this.$router.push({path:'/Video'})
        },
     
        Jump3:function(){
          console.log(11111)
          this.$router.push({path:'/First'})
        },

    
   },
    mounted(){
        var video14 = document.querySelector('#myvideo14')
        this.player14.attachMediaElement(video14)
        this.player14.load()

         var video15 = document.querySelector('#myvideo15')
        this.player15.attachMediaElement(video15)
        this.player15.load()

        // this.screenWidth = document.body.clientWidth;
        // this.height = (document.body.clientWidth / 1920) * 645;
        // window.onresize = () => {
        //   return (() => {
        //     this.height = (document.body.clientWidth / 1920) * 645;
        //   })()
        // }
        // this.getHomeList();


   
    },
}
</script>
