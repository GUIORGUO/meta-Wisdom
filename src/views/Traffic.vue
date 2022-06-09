<template>

    <div class="Visual-large-screen" :style="{
	            'transformOrigin':'center top',
	            'transform':`scale(${scalseNum},${scalseNum})`,'-webkit-transform':`scale(${scalseNum},${scalseNum})`,'-moz-transform':`scale(${scalseNum},${scalseNum})`,'-o-transform':`scale(${scalseNum},${scalseNum})`,'-ms-transform':`scale(${scalseNum},${scalseNum})`
	        }">
      <el-container>
        <el-main>
            <!-- 头部 -->
            <div class="header">
            <el-row :span="24" type="flex" justify="center">
              <el-col :span="7">
                  <dv-decoration-3 style="max-width:300px;height:30px;margin-left:50px;float:left" />
                  <dv-decoration-8 style="min-width:200px;height:40px;margin-top:-10px;float:left" />
              </el-col>
              <el-col :span="10" >
                <h1 class="title1" style="font-size:42px;color:#fff;margin-top:-6px">MARVEL多媒体端边云系统科学实验平台</h1>
                <dv-decoration-5 class="datav-header" />
              </el-col>
              <el-col :span="7">
                <dv-decoration-3 style="max-width:300px;height:30px;float:right;margin-right:50px;" />
                <dv-decoration-8 :reverse="true" style="min-width:200px;height:40px;float:left;margin-top:-10px;" />
              </el-col>
            </el-row>
            </div>
            <!-- 主体部分 -->
            <div class="main-A" :style="conheight" style="margin-top:-20px;">
             <el-row :span="24" type="flex" justify="space-between" :gutter="10">
                <!-- <el-col :xs="2" :ms="2" :md="4" :lg="6" :xl="8"> -->
                <!-- 左侧部分 -->
                  <el-col :span="5" >
                    <div class="main" :style="conheight">    
                        <!-- 图1 -->
                        <el-row type="flex" justify="center" :span="24">
                            <el-col :span="24">
                            <dv-border-box-10>
                                    <!-- <div><Scroll style="padding:40px 5px 12px 18px" /></div> -->
                                 <el-carousel direction="vertical" style="padding:20px 10px 10px 10px" :style="{ minwidth: '450px', minHeight: '360px'}">
                                    <el-carousel-item v-for="item in imgList1" :key="item.name" :style="{ minwidth: '250px', minHeight: '340px'}">
                                         <img :src="item.src" style="height:100%;width:100%;" alt="图片丢失了" :title="item.title" />
                                    </el-carousel-item>
                                </el-carousel>
                            </dv-border-box-10> 
                            </el-col>
                        </el-row>
                       
                        <!-- 轮播图2（js imgList中） -->
                        <el-row type="flex" justify="center" style="margin-top:10px;" >
                            <el-col :span="24">
                            <dv-border-box-10 >
                                <el-carousel direction="vertical" style="padding:20px 10px 10px 10px" :style="{ minwidth: '450px', minHeight: '360px'}">
                                    <el-carousel-item v-for="item in imgList" :key="item.name" :style="{ minwidth: '250px', minHeight: '340px'}">
                                         <img :src="item.src" style="height:100%;width:100%;" alt="图片丢失了" :title="item.title" />
                                    </el-carousel-item>
                                </el-carousel>
                            </dv-border-box-10>
                            </el-col>
                        </el-row>
                         <!-- 图片轮播1*（css中） -->
                        <el-row type="flex" justify="center" style="margin-top:10px;" :span="24">
                            <el-col :span="24">
                            <dv-border-box-10 >
                                <el-carousel direction="vertical" style="padding:20px 10px 10px 10px" :style="{ minwidth: '450px', minHeight: '360px'}">
                                    <el-carousel-item v-for="item in 3" :key="item" :style="{ minwidth: '250px', minHeight: '340px'}">
                                        <h3 class="medium1">{{ item }}</h3>
                                    </el-carousel-item>
                                </el-carousel>
                            </dv-border-box-10>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <!-- 中间部分 -->
                <!-- 视频盒子 -->
                <el-col :span="13">
                    <div class="medium" :style="conheight">
                        <el-row type="flex" class="row-bg" justify="center" :span="24" style="margin-top:16px;margin-left:10%;">
                            <el-col :span="24">
                                <div>
                                    <el-row type="flex" justify="center" :span="24">
                                        <el-col :span="4">
                                             <div class="logo">
                                                <img src="../assets/logo.png" alt=""  style="width:220px; height:110px;">
                                             </div>
                                        </el-col>
                                        <el-col :span="16">
                                            <dv-border-box-12 style="margin-left:-50px;margin-top:4px;height:7vh;">
                                                    <div><Font class="title" /></div>
                                            </dv-border-box-12>
                                        </el-col>
                                        <el-col :span="4">
                                            <dv-decoration-12 style="width:100px;height:100px;" />
                                        </el-col>
                                    </el-row>
                                   
                                </div>
                            </el-col>
                        </el-row>
                        <el-row type="flex" class="row-bg" justify="center" :span="24" style="margin-top:-20px;">
                            <el-col :span="24">
                               
                                <dv-border-box-11 title="终端数据信息流" style="height:56vh;">
                                     <el-row type="flex" justify="center" :span="24">
                                        <el-col :span="24">
                                            <div class="myvideo">
                                                <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="false" style="color: white; height: 300px; width: 100%;caret-color: transparent;">
                                                    <el-tab-pane  name="third">
                                                               <div class="video-box">
                                                                    <el-row type="flex" justify="center" style="margin-top:-25px;padding:5px;">
                                                                        <el-col :span="24">
                                                                            <video
                                                                                class="card-video"
                                                                                id="myvideo1"
                                                                                controls
                                                                                autoplay
                                                                                muted
                                                                            ></video>
                                                                        </el-col>
                                                                   </el-row>
                                                                </div>
                                                    </el-tab-pane>  
                                                    <el-tab-pane  name="first">
                                                            <div><Video3 style=" padding:10px 10px 0px 5px " /></div>
                                                    </el-tab-pane>  
                                                    <el-tab-pane  name="second">
                                                            <div><Video4 style=" padding:10px 10px 0px 5px " /></div>
                                                    </el-tab-pane>  
                                                </el-tabs>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </dv-border-box-11>
                              </el-col>
                            </el-row>
                            <!-- 大视频盒子下边 -->
                            <el-row type="flex" class="row-bg" justify="center" :span="24">
                               <el-col :span="24">
                                <dv-border-box-1 style="height:32vh;width:100%;margin-top:-10px;">
                                    <el-row type="flex" class="row-bg" justify="center" :span="24">
                                        <el-col :span="24">
                                                <div class="video-data">
                                                        <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="false" style="color: white; height: 300px; width: 100%;caret-color: transparent;">
                                                          <el-tab-pane label="类脑终端" name="first">
                                                                <div><Video1 style=" padding:10px 10px 0px 5px " /></div>
                                                          </el-tab-pane>  

                                                          <el-tab-pane label="类眼终端" name="third">
                                                            <el-row type="flex" class="row" justify="center" :span="24" >
                                                                <el-col :span="24">
                                                                    <div class="m-last" style="margin-top:-20px;">
                                                                        <el-row type="flex" class="row" justify="center" :span="24" :gutter="8">
                                                                            <el-col :span="8">
                                                                            
                                                                                    <div class="video-box">
                                                                                        <el-row type="flex" justify="center" :span="24">
                                                                                            <el-col :span="24">
                                                                                                <video
                                                                                                    class="card-video"
                                                                                                    id="myvideo31"
                                                                                                    controls
                                                                                                    autoplay
                                                                                                    muted
                                                                                                ></video>
                                                                                            </el-col>
                                                                                        </el-row>
                                                                                       
                                                                                    </div>
                                                                        
                                                                            </el-col>
                                                                            <el-col :span="8">
                                                                        
                                                                                    <div class="video-box">
                                                                                        <el-row type="flex" justify="center" :span="24">
                                                                                            <el-col :span="24">
                                                                                                <video
                                                                                                    class="card-video"
                                                                                                    id="myvideo32"
                                                                                                    controls
                                                                                                    autoplay
                                                                                                    muted
                                                                                                ></video>
                                                                                            </el-col>
                                                                                        </el-row>
                                                                                        
                                                                                    </div>
                                                                    
                                                                            </el-col>
                                                                            <el-col :span="8">
                                                                        
                                                                                    <div class="video-box">
                                                                                        <el-row type="flex" justify="center" :span="24">
                                                                                            <el-col :span="24">
                                                                                                <video
                                                                                                    class="card-video"
                                                                                                    id="myvideo33"
                                                                                                    controls
                                                                                                    autoplay
                                                                                                    muted
                                                                                                ></video>
                                                                                            </el-col>
                                                                                        </el-row>
                                                                                  
                                                                                    </div>
                                                                            
                                                                            </el-col>
                                                                        </el-row>
                                                                    </div>
                                                                </el-col>
                                                            </el-row>  
                                                        </el-tab-pane>
                                                        
                                                        <el-tab-pane label="终端模组控制" name="second">
                                                                <div><Video2 style="padding:0px 10px 0px 5px" /></div>
                                                        </el-tab-pane>
                                                      </el-tabs>
                                                    </div>
                                        </el-col>
                                    </el-row>
                                </dv-border-box-1>
                               </el-col>
                            </el-row>
                    </div>

                </el-col>
                <!-- 右侧 -->
                <el-col :span="6">
                        <div class="main1" :style="conheight">    
                            <el-row type="flex" justify="center" :span="24">
                                <el-col :span="24">
                                    <dv-border-box-10>
                                        <div><Device style="padding:40px 10px 0px 5px" /></div>
                                    </dv-border-box-10> 
                                </el-col>
                            </el-row>
                            <el-row type="flex" justify="center" style="margin-top:10px;">
                                <el-col :span="24">
                                <dv-border-box-10 :style="{minwidth:'100px', minheight:'340px'}">
                                    <div class="Rank" style="padding:10px 20px;">
                                        <h1 style="font-size:25px;">设备信息</h1>
                                        <dv-scroll-ranking-board :config="ranking" style="margin-top:-20px;min-width:240px;height:25vh;" />
                                    </div>
                                </dv-border-box-10> 
                                </el-col>
                            </el-row>
                            <el-row type="flex" justify="center" style="margin-top:10px;" :span="24">
                                <el-col :span="24">
                                    <dv-border-box-10>
                                        <!-- <div><Pie style="padding:40px 5px 12px 18px" /></div> -->
                                        <div class="fangxiang" style="padding:5px;">
                                            <el-row type="flex" justify="center" :span="24">
                                                <el-col :span="24">
                                                    <h1 style="font-size:25px;color:#fff;padding:0px;10px;">终端模组控制</h1>
                                                </el-col>
                                            </el-row>
                                            <el-row type="flex" justify="center" :span="24">
                                                <el-col :span="12">
                                                        <h3 style="font-size:20px; color:#fff; margin-top:-10px;">视角控制</h3>
                                                        <el-row type="flex" justify="center" :span="24">
                                                            <el-col :span="24">
                                                                <img src="../assets/camera_up.png" alt="" style="width:2vw;height:3vh;">
                                                            </el-col>
                                                        </el-row>
                                                        <el-row type="flex" justify="right" :span="24">
                                                            <el-col :span="6">
                                                                <img src="../assets/camera_left.png" alt="" style="width:2vw;height:3vh;">
                                                            </el-col>
                                                            <el-col :span="12">
                                                                
                                                            </el-col>
                                                            <el-col :span="6">
                                                                <img src="../assets/camera_right.png" alt="" style="width:2vw;height:3vh;">
                                                            </el-col>
                                                        </el-row>
                                                        <el-row type="flex" justify="left" :span="24">
                                                            <el-col :span="24">
                                                                <img src="../assets/camera_down.png" alt="" style="width:2vw;height:3vh;">
                                                            </el-col>
                                                        </el-row>
                                                        <el-row type="flex" justify="center" :span="24">
                                                            <el-col :span="24">
                                                                <br>
                                                            </el-col>
                                                        </el-row>
                                                </el-col>
                                                <el-col :span="12">
                                                        <h3 style="font-size:20px;color:#fff;margin-top:-10px;">无人车控制</h3>
                                                         <el-row type="flex" justify="center" :span="24">
                                                            <el-col :span="24">
                                                                <img src="../assets/camera_up.png" alt="" style="width:2vw;height:3vh;">
                                                            </el-col>
                                                        </el-row>
                                                        <el-row type="flex" justify="right" :span="24">
                                                            <el-col :span="6">
                                                                <img src="../assets/camera_left.png" alt="" style="width:2vw;height:3vh;">
                                                            </el-col>
                                                            <el-col :span="12">
                                                                <img src="../assets/stop.png" alt="" style="width:4vw;height:4vh;">
                                                            </el-col>
                                                            <el-col :span="6">
                                                                <img src="../assets/camera_right.png" alt="" style="width:2vw;height:3vh;">
                                                            </el-col>
                                                        </el-row>
                                                        <el-row type="flex" justify="left" :span="24">
                                                            <el-col :span="24">
                                                                <img src="../assets/camera_down.png" alt="" style="width:2vw;height:3vh;">
                                                            </el-col>
                                                        </el-row>
                                                        <el-row type="flex" justify="center" :span="24">
                                                            <el-col :span="24">
                                                                
                                                            </el-col>
                                                        </el-row>
                                                </el-col>
                                            </el-row>
                                        </div>
                                    </dv-border-box-10> 
                                </el-col>
                            </el-row>                    
                        </div>

                </el-col>
            </el-row>


          </div> 

        </el-main>
      </el-container>
    </div>
    
</template>
<style >

    .el-main{
        /* background-image: url(https://raw.githubusercontent.com/babybrotherzb/my-datav/master/build/static/media/bg.4ad07e23.png);  */
        /* background-image: url(https://raw.githubusercontent.com/d3lin/vueDataV/master/src/assets/img/brand/bg.jpg); */
        background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-9affebb4a92cf09b7a500aca9699278f_b.gif&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648609458&t=7ccb5fbf7c62603ab2a134d6f6aa02a5); 
        height: 100%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        /* min-height: 850px; */
    }
    .main{
        margin-top:0px;
    }
    .main1{
        margin-top:-5px;
    }
    .medium{
        margin-top:-10px;
    }
    .datav-header{
        max-width:1000px;
        max-height:80px;
        margin-top:-59px;
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
    @media only screen and (max-width: 2560px) { div{ font-size: 22px; }}
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

.logo{
   display:flex;
   justify-content: left;
   margin-left: -100px;

}
/* 图片轮播 */
.el-carousel__item:nth-child(1) {
  background-image: url(../assets/camera1.jpg);
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.el-carousel__item:nth-child(2) {
  background-image: url(../assets/camera2.jpg);
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.el-carousel__item:nth-child(3) {
  background-image: url(../assets/car.jpg);
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
/* 视频选项卡 el-tab-pane的css并不是该组件具有的attribute，所以是没有继承到生成的元素上的，
如果你非要改变字体的颜色的话，可以修改这两个css类.el-tabs__item .el-tabs__item.is-active*/
.el-tabs__item {
    font-size: 24px !important;
    font-family:fantasy;
    color: #1B63F6 !important;
  }
.el-tabs__item.is-active{
  color: aqua !important;
} 
.el-tabs__nav-wrap::after{
    background-color: rgb(117, 158, 196) !important;
}



/* 3个视频模块 */
.video-name{
    color: aqua;

}
.card-video{
    height: 100%;
    width: 100%;
}
.video-box{
    padding:20px 10px ;
}
.video-data{
    padding:12px 10px 7px 13px;
    width:98%;
    height:26vh;
} 
.flv_box1{
    /* 1vw = 视口宽度的1%，视口宽1920px，那么1vw 等于19.2px */
    /* 1vh = 视口高度的1%，视口高1000px，那么1vh 等于10px */
    width: 40vh; 
    height: 30vh;   
    margin-top: 10px;
}
#myvideo1{
    width: 100%;
    height: 49vh;
}
.flv_box31{
    /* 1vw = 视口宽度的1%，视口宽1920px，那么1vw 等于19.2px */
    /* 1vh = 视口高度的1%，视口高1000px，那么1vh 等于10px */
    width: 40vh; 
    height: 30vh;   
    margin-top: 10px;
}
#myvideo31{
    width: 100%;
    height: 100%;
}
.flv_box32{
    /* 1vw = 视口宽度的1%，视口宽1920px，那么1vw 等于19.2px */
    /* 1vh = 视口高度的1%，视口高1000px，那么1vh 等于10px */
    width: 40vh; 
    height: 30vh;   
    margin-top: 10px;
}
#myvideo32{
    width: 100%;
    height: 100%;
}
.flv_box33{
    /* 1vw = 视口宽度的1%，视口宽1920px，那么1vw 等于19.2px */
    /* 1vh = 视口高度的1%，视口高1000px，那么1vh 等于10px */
    width: 40vh; 
    height: 30vh;   
    margin-top: 10px;
}
#myvideo33{
    width: 100%;
    height: 100%;
}
.Rank{
    color: #fff;
    padding:10px;
}



</style>
<script type="text/javascript">
import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons';
import { defineComponent, reactive, ref, onMounted, toRefs } from "vue";
import * as echarts from "echarts";
import flv1 from 'flv.js';
import flv31 from 'flv.js';
import flv32 from 'flv.js';
import flv33 from 'flv.js';
import Scroll from "./Scroll.vue";
import Second from "./Second.vue";
import Device from "./Device.vue";
import Video1 from "./Video1.vue";
import Font from "./Font.vue";
import Video2 from "./Video2.vue";
import Video3 from "./Video3.vue";
import Video4 from "./Video4.vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import Pie from './Pie.vue';
export default {
    name: "Broadcast",
    components: {
        Scroll,
        Device,
        Pie,
        Second,
        Map,
        Font,
        Video1,
        Video2,
        Video3,
        Video4,
    },
    data(){
        return{
            player1: null,
            playing1: false,
            player31: null,
            playing31: false,
            player32: null,
            playing32: false,
            player33: null,
            playing33: false,
            conheight:{
                height:''
            },
            activeName: 'first',
            imgList1: [
                    {
                    name: "lj",
                    src: require("../assets/A100x8.jpg"),
                    title: "云.png"
                    },
                    {
                    name: "logo",
                    src: require("../assets/A100.png"),
                    title: "云.png"
                    },
                    {
                    name: "logo",
                    src: require("../assets/yunduan.png"),
                    title: "云.png"
                    },
                
                ],
            imgList: [
                    {
                    name: "边",
                    src: require("../assets/banzi.jpg"),
                    title: "边"
                    },
                     {
                    name: "边",
                    src: require("../assets/banzi2.jpg"),
                    title: "边"
                    },
              
                
                ],
            ranking: {
                 
                data: [
                {
                    name: "无人车控制",
                    value: 2,
                },
                {
                    name: "类脑终端",
                    value: 1,
                },
                {
                    name: "视角控制",
                    value: 2,
                },
                {
                    name: "视频编码",
                    value: 3,
                },
                {
                    name: "终端模组控制",
                    value: 2,
                },
                {
                    name: "模组控制",
                    value: 2,
                },
              
                ],
            },
        };　
　　　　},
　　　created(){
        window.addEventListener('resize', this.getHeight);
        this.getHeight()
        
        if (flv1.isSupported()) {
            this.player1 = flv1.createPlayer({
                type: "flv",
                isLive: true,
                hasAudio: false,
                hasVideo: true,
                enableStashBuffer: true,
                //   type: "video/mp4",
                url: "http://10.208.104.243/flv/raw2", //视频资源路径  支持：http
            });
            }
        if (flv31.isSupported()) {
            this.player31 = flv31.createPlayer({
                type: "flv",
                isLive: true,
                hasAudio: false,
                hasVideo: true,
                enableStashBuffer: true,
                //   type: "video/mp4",
                url: "http://10.208.104.243/flv/background2", //视频资源路径  支持：http
            });
            }
        if (flv32.isSupported()) {
            this.player32 = flv32.createPlayer({
                type: "flv",
                isLive: true,
                hasAudio: false,
                hasVideo: true,
                enableStashBuffer: true,
                //   type: "video/mp4",
                url: "http://10.208.104.243/flv/feature2", //视频资源路径  支持：http
            });
            }

         if (flv33.isSupported()) {
            this.player33 = flv33.createPlayer({
                type: "flv",
                isLive: true,
                hasAudio: false,
                hasVideo: true,
                enableStashBuffer: true,
                //   type: "video/mp4",
                url: "http://10.208.104.243/flv/matrix2", //视频资源路径  支持：http
            });
            }

       
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
        onClick31(){
            console.log('播放')
                this.player31.play()
                this.playing31 = true;
            },
        clickStop31(){
                console.log('暂停')
                this.player31.pause()
                this.playing31 = false;
            },
        onClick32(){
            console.log('播放')
                this.player32.play()
                this.playing32 = true;
            },
        clickStop32(){
                console.log('暂停')
                this.player32.pause()
                this.playing32 = false;
            },
        
         onClick33(){
            console.log('播放')
                this.player33.play()
                this.playing33 = true;
            },
        clickStop33(){
                console.log('暂停')
                this.player33.pause()
                this.playing33 = false;
            },

        handleClick(tab, event) {
        console.log(tab, event);
        },

        getHeight(){
          this.conheight.height=window.innerHeight-170+'px';
       },
    },
    mounted(){
        var video1 = document.querySelector('#myvideo1')
        this.player1.attachMediaElement(video1)
        this.player1.load()

        var video31 = document.querySelector('#myvideo31')
        this.player31.attachMediaElement(video31)
        this.player31.load()

        var video32 = document.querySelector('#myvideo32')
        this.player32.attachMediaElement(video32)
        this.player32.load()

        var video33 = document.querySelector('#myvideo33')
        this.player33.attachMediaElement(video33)
        this.player33.load()
        //字体大小随盒子div大小变化
        window.onload = function(){
            // var fonts;
            // var divs;
            var str=document.getElementById("str");
            var fontw=12; //初始的字体大小
            var fonth=fontw+2;//初始字体高度
            var width=str.offsetWidth;//DIV的宽度
            var height=str.offsetHeight;//div的高度
            var lenstr=str.innerHTML.length;//DIV里文字长度
             fonts=fontw*fonth*lenstr;//字体面积
             divs=width*height;//DIV面积
            //if(fonts>divs){
            var rfont;//重设字体大小为rfont
            rfont=Math.round((Math.sqrt(4*lenstr*divs-4*lenstr*lenstr)-2*lenstr)/(2*lenstr));
            str.style.fontSize=rfont+"px";
            //}
            }
    }
    

    
}
</script>
