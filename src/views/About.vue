<template>
  <div class="common-layout">
    <el-container>
      <!-- 头部 -->
        <el-header >
          <div class="header">
            <el-row :gutter="10" style="margin-left:45px;">
              <el-col :span="7">
                <h1 id="header" title="MARVEL(奇迹实验室)">
                 <a href="" class="clickstat" eid="click/navi/logo" eid_desc="点击/导航/logo">
                 <img class="hd-logo" src="../assets/logo.png" alt="奇迹实验室" width="100" height="50">
                 </a>
                </h1>
              </el-col>
              <div class="daohang" style="margin-top:27px;margin-left:-100px;">
              <el-col :span="9">
                <div class="hy-nav-item" >
                  <a href="" class="hy-nav-link clickstat" eid="click/navi/home" eid_desc="点击/导航/首页" style="color:#fff;" >首页</a>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="hy-nav-item">
                  <div class="hy-nav-expand" >
                    <a href="" class="hy-nav-link clickstat" eid="click/navi/zhibo" eid_desc="点击/导航/直播" style="color:#fff;">直播</a>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="hy-nav-item">
                  <a class="hy-nav-link hy-nav-link-ext clickstat" id="hy-nav-category" eid="click/navi/classification" eid_desc="点击/导航/分类" href="" style="color:#fff;">分类<i></i></a>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="hy-nav-item">
                  <a href="" class="hy-nav-link clickstat" eid="click/navi/home" eid_desc="点击/导航/首页" style=" color:#fff;">视频</a>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="hy-nav-item">
                  <a href="" class="hy-nav-link clickstat" eid="click/navi/home" eid_desc="点击/导航/首页" style=" color:#fff;">学习</a>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="hy-nav-item">
                  <a href="" class="hy-nav-link clickstat" eid="click/navi/home" eid_desc="点击/导航/首页" style=" color:#fff;">游戏</a>
                </div>
              </el-col>
            </div>
          </el-row>
          
          
          <el-row type="flex" class="row-bg" justify="center"  >
            <el-col :span="15" >
              <div class="grid-content" > 
                <video id="myvideo1" controls  autoplay muted></video>
              </div>
            </el-col>
           </el-row>
            
              
          </div>
        </el-header>
      
        <el-container>
        <!-- 侧栏
        <el-aside width="200px">

        </el-aside> -->

        <!-- 主体  -->
        <el-main>

          <!-- 视频流盒子 -->
          <div class="flv-box" style="margin-left:120px;">
          <el-row :span="24" style="margin-top:10px;">
            <el-col :span="6">
                <h1 class="name1">直播推荐</h1>
            </el-col>
          </el-row>
          
          <el-row type="flex" class="row-bg" justify="center" :gutter="20"  >
            <el-col :span="23">
                <el-col :span="10">
                  <el-card :body-style="{ padding: '0px' }">
                     <video  class="card-video" id="myvideo2" controls  autoplay muted style="height:200px; width:340px;"></video>
                      <div style="margin-top:-10px;padding: 0px">
                        <el-row :span="18">
                          <el-col :span="10">
                            <span><strong>学习vlog</strong></span>
                          </el-col>
                          <el-col :span="8">
                            <el-button @click="onClick2()" type="text" class="button">点击播放</el-button>
                          </el-col>
                        </el-row>  
                      </div>
                    </el-card>
                </el-col>
                <el-col :span="10">
                  <el-card :body-style="{ padding: '0px' }">
                     <video  class="card-video" id="myvideo3" controls  autoplay muted style="height:200px; width:340px;"></video>
                      <div style="margin-top:-10px;padding: 0px">
                        <el-row :span="18">
                          <el-col :span="10">
                            <span ><strong>专家直播</strong></span>
                          </el-col>
                          <el-col :span="8">
                            <el-button @click="onClick3()" type="text" class="button">点击播放</el-button>
                          </el-col>
                        </el-row>
                      </div>
                    </el-card>
                </el-col>
                <el-col :span="10">
                    <el-card :body-style="{ padding: '0px' }">
                      <video  class="card-video" id="myvideo4" controls  autoplay muted style="height:200px; width:340px;"></video>
                        <div style="margin-top:-10px;padding: 0px">
                          <el-row :span="18">
                            <el-col :span="10">
                              <span ><strong>游戏直播</strong></span>
                            </el-col>
                            <el-col :span="8">
                              <el-button @click="onClick4()" type="text" class="button">点击播放</el-button>
                            </el-col>
                          </el-row>
                        </div>
                      </el-card>
                  </el-col>
                  
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="center" :gutter="20" style="margin-top:35px;" >
            <el-col :span="23">
                <el-col :span="10">
                    <el-card :body-style="{ padding: '0px' }">
                      <video  class="card-video" id="myvideo5" controls  autoplay muted style="height:200px; width:340px;"></video>
                        <div style="margin-top:-10px;padding: 0px">
                          <el-row :span="18">
                            <el-col :span="10">
                              <span ><strong>游戏直播</strong></span>
                            </el-col>
                            <el-col :span="8">
                              <el-button @click="onClick5()" type="text" class="button">点击播放</el-button>
                            </el-col>
                          </el-row>
                        </div>
                      </el-card>
                  </el-col>
                  <el-col :span="10">
                    <el-card :body-style="{ padding: '0px' }">
                      <video  class="card-video" id="myvideo6" controls  autoplay muted style="height:200px; width:340px;"></video>
                        <div style="margin-top:-10px;padding: 0px">
                          <el-row :span="18">
                            <el-col :span="10">
                              <span ><strong>游戏直播</strong></span>
                            </el-col>
                            <el-col :span="8">
                              <el-button @click="onClick6()" type="text" class="button">点击播放</el-button>
                            </el-col>
                          </el-row>
                        </div>
                      </el-card>
                  </el-col>
                   <el-col :span="10">
                    <el-card :body-style="{ padding: '0px' }">
                      <video  class="card-video" id="myvideo7" controls  autoplay muted style="height:200px; width:340px;"></video>
                        <div style="margin-top:-10px;padding: 0px">
                          <el-row :span="18">
                            <el-col :span="10">
                              <span ><strong>游戏直播</strong></span>
                            </el-col>
                            <el-col :span="8">
                              <el-button @click="onClick7()" type="text" class="button">点击播放</el-button>
                            </el-col>
                          </el-row>
                        </div>
                      </el-card>
                  </el-col>
                </el-col>
            </el-row>
           </div>
          
         </el-main>

       </el-container>
   
     </el-container>
  </div>
</template>

<script>
import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons'
import { defineComponent, ref } from 'vue'
import flv1 from 'flv.js';
import flv2 from 'flv.js';
import flv3 from 'flv.js';
import flv4 from 'flv.js';
import flv5 from 'flv.js';
import flv6 from 'flv.js';
import flv7 from 'flv.js';
export default {
   name:'about',
   components:{},
   data(){
     
     return{
       player1: null,
       player2 : null,
       player3 : null,
       player4 : null,
       player5 : null,
       player6 : null,
       player7 : null,
       playing1: false,
       playing2: false,
       playing3: false,
       playing4: false,
       playing5: false,
       playing6: false,
       playing7: false,

      }
    },
   created(){
    if(flv1.isSupported()){
      this.player1 = flv1.createPlayer({
        type: 'flv',
        "isLive":true,
        //   type: "video/mp4",
        url:'http://10.208.104.242:6901/flv/test'   //视频资源路径  支持：http
      });
    }
    if(flv2.isSupported()){
      this.player2 = flv2.createPlayer({
        type: 'flv',
        "isLive":true,
        //   type: "video/mp4",
        url:'http://1011.hlsplay.aodianyun.com/demo/game.flv'   //视频资源路径  支持：http
      });
    }
    if(flv3.isSupported()){
      this.player3 = flv3.createPlayer({
        type: 'flv',
        "isLive":true,
        //   type: "video/mp4",
        url:'http://localhost:10076/live?port=1935&app=live&stream=test'   //视频资源路径  支持：http
      });
    }
    if(flv4.isSupported()){
      this.player4 = flv4.createPlayer({
        type: 'flv',
        "isLive":true,
        //   type: "video/mp4",
        url:'http://1011.hlsplay.aodianyun.com/demo/game.flv'   //视频资源路径  支持：http
      });
    }
    if(flv5.isSupported()){
      this.player5 = flv5.createPlayer({
        type: 'flv',
        "isLive":true,
        //   type: "video/mp4",
        url:'http://localhost:10076/live?port=1935&app=live&stream=test'   //视频资源路径  支持：http
      });
    }
    if(flv6.isSupported()){
      this.player6 = flv6.createPlayer({
        type: 'flv',
        "isLive":true,
        //   type: "video/mp4",
        url:'http://1011.hlsplay.aodianyun.com/demo/game.flv'   //视频资源路径  支持：http
      });
    }
    if(flv7.isSupported()){
      this.player7 = flv7.createPlayer({
        type: 'flv',
        "isLive":true,
        //   type: "video/mp4",
        url:'http://1011.hlsplay.aodianyun.com/demo/game.flv'   //视频资源路径  支持：http
      });
    }

  },
  mounted()
  {
    var video1 = document.querySelector('#myvideo1')
    this.player1.attachMediaElement(video1)
    this.player1.load()

    var video2 = document.querySelector('#myvideo2')
    this.player2.attachMediaElement(video2)
    this.player2.load()

    var video3 = document.querySelector('#myvideo3')
    this.player3.attachMediaElement(video3)
    this.player3.load()

    var video4 = document.querySelector('#myvideo4')
    this.player4.attachMediaElement(video4)
    this.player4.load()

    var video5 = document.querySelector('#myvideo5')
    this.player5.attachMediaElement(video5)
    this.player5.load()

    var video6 = document.querySelector('#myvideo6')
    this.player6.attachMediaElement(video6)
    this.player6.load()

    var video7 = document.querySelector('#myvideo7')
    this.player7.attachMediaElement(video7)
    this.player7.load()
  },
  
  methods:{
    onClick1(){
      console.log('播放')
        this.player1.play()
        this.playing1 = true;
    },
    clickStop1(){
        console.log('暂停')
        this.player1.pause()
        this.playing1 = false;
    },
    onClick2(){
      console.log('播放')
        this.player2.play()
        this.playing2 = true;
    },
    clickStop2(){
        console.log('暂停')
        this.player2.pause()
        this.playing2 = false;
    },
    onClick3(){
      console.log('播放')
        this.player3.play()
        this.playing3 = true;
    },
    clickStop3(){
        console.log('暂停')
        this.player3.pause()
        this.playing3 = false;
    },
    onClick4(){
      console.log('播放')
        this.player4.play()
        this.playing4 = true;
    },
    clickStop4(){
        console.log('暂停')
        this.player4.pause()
        this.playing4 = false;
    },
  
    onClick5(){
      console.log('播放')
        this.player5.play()
        this.playing5 = true;
    },
    clickStop5(){
        console.log('暂停')
        this.player5.pause()
        this.playing5 = false;
    },
    onClick6(){
      console.log('播放')
        this.player6.play()
        this.playing6 = true;
    },
    clickStop6(){
        console.log('暂停')
        this.player6.pause()
        this.playing6 = false;
    },
     
    onClick7(){
      console.log('播放')
        this.player7.play()
        this.playing7 = true;
    },
    clickStop7(){
        console.log('暂停')
        this.player7.pause()
        this.playing7 = false;
    },
  }
}
</script>

<style scoped>
/* 头部 */
.el-header
 {
  /* background-image: url(../assets/炫酷行星.gif); */
  background-color: #070b1c;
  background-size:100% 550px;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
  height: 550px;
}

.hy-nav-item {
    float: left;
    box-sizing: border-box;
    height: 100%;
    padding: 14px 0 0 5px;
    margin-top: -10px;
}
.hy-nav-item-on .hy-nav-link, .hy-nav-link:hover {
    color: #fff;
    background: #4682f06b;
    border-radius: 1em;
    text-decoration: none;
}
.hy-nav-link {
    display: block;
    line-height: 2;
    padding: 0 0.9em;
    font-size: 16px;
    text-decoration: none;
}

/* 视频流盒子 */
.flv_box1{
    width: 40vh;
    height: 30vh;
}
.flv_box2{
    width: 40vh;
    height: 30vh;
}
.flv_box3{
    width: 40vh;
    height: 30vh;
}
.flv_box4{
    width: 40vh;
    height: 30vh;
}
.flv_box5{
    width: 40vh;
    height: 30vh;
}
.flv_box6{
    width: 40vh;
    height: 30vh;
}
.flv_box7{
    width: 40vh;
    height: 30vh;
}

 #myvideo1{
      width: 100%;
      height: 100%;
    }
 #myvideo2{
      width: 100%;
      height: 100%;
      
    }  
 #myvideo3{
      width: 100%;
      height: 100%;
      
    }      
 #myvideo4{
      width: 100%;
      height: 100%;
      
    }      

/* end视频流盒子 */

.el-main{
  background: radial-gradient(ellipse at bottom, #070500a8 0%, #070500 100%);
}
.el-card{
  height: 260px;
  /* background-color:#00010886; */
}
.el-button {
  padding: 20px;
  margin-left: 70px;
  min-height: auto;
}

.name1{
  color: rgb(248, 242, 242);
}
</style>