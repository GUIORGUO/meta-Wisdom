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
              <el-col :span="8">
                  <dv-decoration-3 style="max-width:300px;height:30px;margin-left:50px;float:left" />
                  <dv-decoration-8 style="min-width:200px;height:40px;margin-top:-10px;float:left" />
              </el-col>
              <el-col :span="8" >
                <h1 class="title">MARVEL多媒体系统科学实验平台</h1>
                <dv-decoration-5 class="datav-header" />
              </el-col>
              <el-col :span="8">
                <dv-decoration-3 style="max-width:300px;height:30px;float:right;margin-right:50px;" />
                <dv-decoration-8 :reverse="true" style="min-width:200px;height:40px;float:left;margin-top:-10px;" />
              </el-col>
            </el-row>
            </div>
            <!-- 左侧部分 -->
            <div class="main-A" :style="conheight">
             <el-row :span="24" type="flex" justify="center" :gutter="5">
                <!-- <el-col :xs="2" :ms="2" :md="4" :lg="6" :xl="8"> -->
                <el-col :span="6">
                    <div class="main" :style="conheight">    
                        <el-row type="flex" justify="center" :span="24">
                            <el-col :span="24">
                            <dv-border-box-10>
                                    <div><Scroll style="padding:40px 5px 12px 18px" /></div>
                            </dv-border-box-10> 
                            </el-col>
                        </el-row>
                        <el-row type="flex" justify="center" style="margin-top:10px;" :span="24">
                            <el-col :span="24">
                            <dv-border-box-10 >
                                    <div><Device style="padding:40px 5px 0px 18px" /></div>
                            </dv-border-box-10> 
                            </el-col>
                        </el-row>
                        <!-- 图片轮播 -->
                        <el-row type="flex" justify="center" style="margin-top:10px;" :span="24">
                            <el-col :span="24">
                            <dv-border-box-10 >
                                <el-carousel direction="vertical" style="padding:20px 10px 10px 10px" :style="{ minwidth: '250px', minHeight: '360px'}">
                                    <el-carousel-item v-for="item in 3" :key="item" :style="{ minwidth: '250px', minHeight: '340px'}">
                                        <h3 class="small">{{ item }}</h3>
                                    </el-carousel-item>
                                </el-carousel>
                            </dv-border-box-10>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <!-- 视频盒子 -->
                <el-col :span="12">
                    <div class="medium" :style="conheight">
                        <el-row type="flex" class="row-bg" justify="center" :span="24">
                            <el-col :span="24">
                                <dv-border-box-11 title="终端数据信息流">
                                    <div class="video-box">
                                         <el-row type="flex" justify="center" style="margin-top:30px;padding:5px;">
                                        <el-col :span="24">
                                        <video
                                            class="card-video"
                                            id="myvideo10"
                                            controls
                                            autoplay
                                            muted
                                        ></video>
                                        </el-col>
                                    </el-row>
                                    <!-- <el-row type="flex" justify="center" >
                                            <el-col :span="14" >
                                                <div style=" overflow:hidden; font-size:18px;" id="str">
                                                    <span class="video-name" 
                                                    ><strong>类眼终端原始数据</strong></span
                                                    >
                                                </div>
                                            </el-col>
                                            <el-col :span="10">
                                                <div style=" overflow:hidden; font-size:12px;" id="str">
                                                    <el-button
                                                    @click="onClick10()"
                                                    type="text"
                                                    class="button"
                                                    >点击播放</el-button
                                                    >
                                                </div>
                                            </el-col>
                                    </el-row> -->
                                    </div>
                                   
                                </dv-border-box-11>
                              </el-col>
                            </el-row>
                            <!-- 大视频盒子下边 -->
                            <el-row type="flex" class="row" justify="center" style="margin-top:40px;">
                                <el-col :span="24">
                                    <div class="m-last">
                                        <el-row type="flex" class="row" justify="center" :span="24" :gutter="8">
                                            <el-col :span="8">
                                                <dv-border-box-8>
                                                    <div class="video-box">
                                                           <el-row type="flex" justify="center" :span="24">
                                                               <el-col :span="24">
                                                                   <video
                                                                    class="card-video"
                                                                    id="myvideo11"
                                                                    controls
                                                                    autoplay
                                                                    muted
                                                                ></video>
                                                               </el-col>
                                                           </el-row>
                                                           <el-row type="flex" justify="center" :span="24" style="margin-top:10px;">
                                                               <el-col :span="24">
                                                                   <div>
                                                                       <el-row type="flex" justify="center" :span="24">
                                                                            <el-col :span="14">
                                                                                <div style=" overflow:hidden; font-size:18px;" id="str">
                                                                                    <span class="video-name" 
                                                                                    ><strong>类眼终端数据</strong></span
                                                                                    >
                                                                                </div>
                                                                            </el-col>
                                                                            <el-col :span="10">
                                                                                <div style=" overflow:hidden; font-size:12px;" id="str">
                                                                                    <el-button
                                                                                    @click="onClick11()"
                                                                                    type="text"
                                                                                    class="button"
                                                                                    >点击播放</el-button
                                                                                    >
                                                                                </div>
                                                                            </el-col>
                                                                        </el-row>
                                                                   </div>
                                                               </el-col>
                                                           </el-row>
                                                    </div>
                                                </dv-border-box-8>
                                            </el-col>
                                            <el-col :span="8">
                                                <dv-border-box-8>
                                                    <div class="video-box">
                                                           <el-row type="flex" justify="center" :span="24">
                                                               <el-col :span="24">
                                                                   <video
                                                                    class="card-video"
                                                                    id="myvideo12"
                                                                    controls
                                                                    autoplay
                                                                    muted
                                                                ></video>
                                                               </el-col>
                                                           </el-row>
                                                           <el-row type="flex" justify="center" :span="24" style="margin-top:10px;">
                                                               <el-col :span="24">
                                                                   <div>
                                                                       <el-row type="flex" justify="center" :span="24">
                                                                            <el-col :span="14">
                                                                                <div style=" overflow:hidden; font-size:18px;" id="str">
                                                                                    <span class="video-name" 
                                                                                    ><strong>类脑终端数据</strong></span
                                                                                    >
                                                                                </div>
                                                                            </el-col>
                                                                            <el-col :span="10">
                                                                                <div style=" overflow:hidden; font-size:12px;" id="str">
                                                                                    <el-button
                                                                                    @click="onClick12()"
                                                                                    type="text"
                                                                                    class="button"
                                                                                    >点击播放</el-button
                                                                                    >
                                                                                </div>
                                                                            </el-col>
                                                                        </el-row>
                                                                   </div>
                                                               </el-col>
                                                           </el-row>
                                                    </div>
                                                </dv-border-box-8>
                                            </el-col>
                                            <el-col :span="8">
                                                <dv-border-box-8>
                                                    <div class="video-box">
                                                           <el-row type="flex" justify="center" :span="24">
                                                               <el-col :span="24">
                                                                   <video
                                                                    class="card-video"
                                                                    id="myvideo13"
                                                                    controls
                                                                    autoplay
                                                                    muted
                                                                ></video>
                                                               </el-col>
                                                           </el-row>
                                                           <el-row type="flex" justify="center" :span="24" style="margin-top:10px;">
                                                               <el-col :span="24">
                                                                   <div>
                                                                       <el-row type="flex" justify="center" :span="24">
                                                                            <el-col :span="14">
                                                                                <div style=" overflow:hidden; font-size:18px;" id="str">
                                                                                    <span class="video-name" 
                                                                                    ><strong>终端模组控制</strong></span
                                                                                    >
                                                                                </div>
                                                                            </el-col>
                                                                            <el-col :span="10">
                                                                                <div style=" overflow:hidden; font-size:12px;" id="str">
                                                                                    <el-button
                                                                                    @click="onClick13()"
                                                                                    type="text"
                                                                                    class="button"
                                                                                    >点击播放</el-button
                                                                                    >
                                                                                </div>
                                                                            </el-col>
                                                                        </el-row>
                                                                   </div>
                                                               </el-col>
                                                           </el-row>
                                                    </div>
                                                </dv-border-box-8>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>
                            </el-row>    
                                   
                            

                    </div>

                </el-col>
                <!-- 右侧 -->
                <el-col :span="6">
                        <div class="main" :style="conheight">    
                            <el-row type="flex" justify="center" :span="24">
                                <el-col :span="24">
                                    <dv-border-box-10>
                                        <div><Pie style="padding:40px 10px 0px 5px" /></div>
                                    </dv-border-box-10> 
                                </el-col>
                            </el-row>
                            <el-row type="flex" justify="center" style="margin-top:10px;">
                                <el-col :span="24">
                                <dv-border-box-10 :style="{minwidth:'100px', minheight:'340px'}">
                                    <div class="Rank" style="padding:10px 20px;">
                                        <h1 style="font-size:18px;margin-top:-5px;">直播间排名</h1>
                                        <dv-scroll-ranking-board :config="ranking" style="margin-top:-20px;min-width:240px;height:360px"/>
                                    </div>
                                </dv-border-box-10> 
                                </el-col>
                            </el-row>
                            <el-row type="flex" justify="center" style="margin-top:10px;" :span="24">
                                <el-col :span="24">
                                    <dv-border-box-10>
                                        <div><Map style="padding:40px 5px 12px 18px" /></div>
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
<style scoped>
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
        margin-top:20px;
    }
    .datav-header{
        max-width:1000px;
        max-height:100px;
        margin-top:-40px;
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
    @media only screen and (max-width: 2560px) { div{ font-size: 20px; }}
    @media only screen and (max-width: 1200px) { div{ font-size: 18px; }}
    @media only screen and (max-width: 1100px) { div{ font-size: 17px; }}
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
/* .van-tab {
    font-size: ~`rem(32)`;
} */
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
.flv_box10{
    /* 1vw = 视口宽度的1%，视口宽1920px，那么1vw 等于19.2px */
    /* 1vh = 视口高度的1%，视口高1000px，那么1vh 等于10px */
    width: 40vh; 
    height: 30vh;   
    margin-top: 10px;
}
#myvideo10{
    width: 100%;
    height: 100%;
}
.flv_box11{
    /* 1vw = 视口宽度的1%，视口宽1920px，那么1vw 等于19.2px */
    /* 1vh = 视口高度的1%，视口高1000px，那么1vh 等于10px */
    width: 40vh; 
    height: 30vh;   
    margin-top: 10px;
}
#myvideo11{
    width: 100%;
    height: 100%;
}
.flv_box12{
    /* 1vw = 视口宽度的1%，视口宽1920px，那么1vw 等于19.2px */
    /* 1vh = 视口高度的1%，视口高1000px，那么1vh 等于10px */
    width: 40vh; 
    height: 30vh;   
    margin-top: 10px;
}
#myvideo12{
    width: 100%;
    height: 100%;
}
.flv_box13{
    /* 1vw = 视口宽度的1%，视口宽1920px，那么1vw 等于19.2px */
    /* 1vh = 视口高度的1%，视口高1000px，那么1vh 等于10px */
    width: 40vh; 
    height: 30vh;   
    margin-top: 10px;
}
#myvideo13{
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
import flv10 from 'flv.js';
import flv11 from 'flv.js';
import flv12 from 'flv.js';
import flv13 from 'flv.js';
import Scroll from "./Scroll.vue";
import Second from "./Second.vue";
import Device from "./Device.vue";
import Map from "./Map.vue";
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
    },
    data(){
        return{
            player10: null,
            playing10: false,
            player11: null,
            playing11: false,
            player12: null,
            playing12: false,
            player13: null,
            playing13: false,
            conheight:{
                height:'',
            },
            ranking: {
                 
                data: [
                {
                    name: "无人车控制",
                    value: 55123,
                },
                {
                    name: "类脑终端",
                    value: 12022,
                },
                {
                    name: "类眼终端",
                    value: 78932,
                },
                {
                    name: "元宇宙",
                    value: 63411,
                },
                {
                    name: "视频编码",
                    value: 44231,
                },
                {
                    name: "张三直播间",
                    value: 55123,
                },
                {
                    name: "李四直播间",
                    value: 55123,
                },
                ],
            },
        };　
　　　　},
　　　created(){
        if (flv10.isSupported()) {
            this.player10 = flv10.createPlayer({
                type: "flv",
                isLive: true,
                //   type: "video/mp4",
                url: "http://localhost:10076/live?port=1935&app=live&stream=test", //视频资源路径  支持：http
            });
            }
        if (flv11.isSupported()) {
            this.player11 = flv11.createPlayer({
                type: "flv",
                isLive: true,
                //   type: "video/mp4",
                url: "http://localhost:10076/live?port=1935&app=live&stream=test", //视频资源路径  支持：http
            });
            }
        if (flv12.isSupported()) {
            this.player12 = flv12.createPlayer({
                type: "flv",
                isLive: true,
                //   type: "video/mp4",
                url: "http://localhost:10076/live?port=1935&app=live&stream=test", //视频资源路径  支持：http
            });
            }

         if (flv13.isSupported()) {
            this.player13 = flv13.createPlayer({
                type: "flv",
                isLive: true,
                //   type: "video/mp4",
                url: "http://localhost:10076/live?port=1935&app=live&stream=test", //视频资源路径  支持：http
            });
            }

        window.addEventListener('resize', this.getHeight);
        this.getHeight()
     },
     methods:{
        onClick10(){
            console.log('播放')
                this.player10.play()
                this.playing10 = true;
            },
        clickStop10(){
                console.log('暂停')
                this.player10.pause()
                this.playing10 = false;
            },
        onClick11(){
            console.log('播放')
                this.player11.play()
                this.playing11 = true;
            },
        clickStop11(){
                console.log('暂停')
                this.player11.pause()
                this.playing11 = false;
            },
        onClick12(){
            console.log('播放')
                this.player12.play()
                this.playing12 = true;
            },
        clickStop12(){
                console.log('暂停')
                this.player12.pause()
                this.playing12 = false;
            },
        
         onClick13(){
            console.log('播放')
                this.player13.play()
                this.playing13 = true;
            },
        clickStop13(){
                console.log('暂停')
                this.player13.pause()
                this.playing13 = false;
            },


        getHeight(){
          this.conheight.height=window.innerHeight-170+'px';
       },
    },
    mounted(){
        var video10 = document.querySelector('#myvideo10')
        this.player10.attachMediaElement(video10)
        this.player10.load()

        var video11 = document.querySelector('#myvideo11')
        this.player11.attachMediaElement(video11)
        this.player11.load()

        var video12 = document.querySelector('#myvideo12')
        this.player12.attachMediaElement(video12)
        this.player12.load()

        var video13 = document.querySelector('#myvideo13')
        this.player13.attachMediaElement(video13)
        this.player13.load()
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
    


//     data() {
//         return {
//             screenWidth: document.body.clientWidth



//         };
//     },
//     mounted() {
//         const that = this;
//         window.onresize = () => (() => {
//             window.screenWidth = document.body.clientWidth;
//             that.screenWidth = window.screenWidth;
//         })();
//     },
//     watch: {
//         screenWidth(val) {
//             // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
//             if (!this.timer) {
//                 // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
//                 this.screenWidth = val;
//                 this.timer = true;
//                 const that = this;
//                 setTimeout(function () {
//                     that.sjcount(that.screenWidth);//窗口大小变化后执行的方法
//                     that.reload();//窗口大小变化后执行的方法
//                     that.timer = false;
//                 }, 10);
//             }
//         }
//     },
 
// methods: {
// reload() {
//             this.isAlive = false;
//             this.$nextTick(function () {
//                 this.isAlive = true;
//             });
//         },
//         sjcount(screewidth) {
//             if (screewidth >= 1920) {
//                 this.numeral = 8;
//             } else if (screewidth >= 1680) {
//                 this.numeral = 7;
//             } else if (screewidth >= 1600) {
//                 this.numeral = 5;
//             } else if (screewidth >= 1280) {
//                 this.numeral = 5;
//             } else if (screewidth >= 1024) {
//                 this.numeral = 4;
//             }
//         },
 
// },
    
}
</script>
