<template>
        <div class="leinao" style="padding:20px;margin-top:-50px;">
                    <el-row type="flex" class="row" justify="center">
                                <el-col :span="24">
                                    <div class="m-last">
                                        <el-row type="flex" class="row" justify="center" :span="24" :gutter="6">
                                            <el-col :span="8"> 
                                                    <div class="video-box">
                                                           <el-row type="flex" justify="center" :span="24">
                                                               <el-col :span="24">
                                                                   <video
                                                                    class="card-video"
                                                                    id="myvideo2"
                                                                    controls
                                                                    autoplay
                                                                    muted
                                                                ></video>
                                                               </el-col>
                                                           </el-row>
                                                             <!-- <el-row type="flex" justify="center" :span="24" style="margin-top:10px;">
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
                                                                                    @click="onClick1()"
                                                                                    type="text"
                                                                                    class="button"
                                                                                    >点击播放</el-button
                                                                                    >
                                                                                </div>
                                                                            </el-col>
                                                                        </el-row>
                                                                   </div>
                                                               </el-col>
                                                           </el-row> -->
                                                    </div>
                                            </el-col>
                                            <el-col :span="8">
                                                    <div class="video-box">
                                                           <el-row type="flex" justify="center" :span="24">
                                                               <el-col :span="24">
                                                                   <video
                                                                    class="card-video"
                                                                    id="myvideo3"
                                                                    controls
                                                                    autoplay
                                                                    muted
                                                                ></video>
                                                               </el-col>
                                                           </el-row>
                                                             <!-- <el-row type="flex" justify="center" :span="24" style="margin-top:10px;">
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
                                                                                    @click="onClick2()"
                                                                                    type="text"
                                                                                    class="button"
                                                                                    >点击播放</el-button
                                                                                    >
                                                                                </div>
                                                                            </el-col>
                                                                        </el-row>
                                                                   </div>
                                                               </el-col>
                                                           </el-row> -->
                                                    </div>
                                            </el-col>
                                            <el-col :span="8">
                                                    <div class="video-box">
                                                           <el-row type="flex" justify="center" :span="24">
                                                               <el-col :span="24">
                                                                   <video
                                                                    class="card-video"
                                                                    id="myvideo4"
                                                                    controls
                                                                    autoplay
                                                                    muted
                                                                ></video>
                                                               </el-col>
                                                           </el-row>
                                                             <!-- <el-row type="flex" justify="center" :span="24" style="margin-top:10px;">
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
                                                                                    @click="onClick3()"
                                                                                    type="text"
                                                                                    class="button"
                                                                                    >点击播放</el-button
                                                                                    >
                                                                                </div>
                                                                            </el-col>
                                                                        </el-row>
                                                                   </div>
                                                               </el-col>
                                                           </el-row> -->
                                                    </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>
                            </el-row>  
                     </div>
                        
</template>

<script>
import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons';
import { defineComponent, reactive, ref, onMounted, toRefs } from "vue";

import flv2 from "flv.js";
import flv3 from "flv.js";
import flv4 from "flv.js";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import { getVideoInfo } from "@/api";

export default {
  data() {
    return {
      
      player2: null,
      player3: null,
      player4: null,
     };
  },
  created() {
       
        if (flv2.isSupported()) {
        this.player2 = flv2.createPlayer({
            type: "flv",
            isLive: true,
            hasAudio: false,
            hasVideo: true,
            enableStashBuffer: true,
            //   type: "video/mp4",
            url: "http://10.208.104.243/flv/background", //视频资源路径  支持：http
        });
        }
        if (flv3.isSupported()) {
        this.player3 = flv3.createPlayer({
            type: "flv",
            isLive: true,
            hasAudio: false,
            hasVideo: true,
            enableStashBuffer: true,
            //   type: "video/mp4",
            url: "http://10.208.104.243/flv/feature", //视频资源路径  支持：http
        });
        }
         if (flv4.isSupported()) {
        //创建flv的名称player1不可以一样 ， flv相当于类
        this.player4 = flv4.createPlayer({
            type: "flv",
            isLive: true,
            hasAudio: false,
            hasVideo: true,
            enableStashBuffer: true,
            //   type: "video/mp4",
            //url: "http://10.208.104.242:6901/flv/test", //视频资源路径  支持：http
            url: "http://10.208.104.243/flv/matrix",
        });
        }
    },
  mounted() {
    //调用方法
    this.getVideoInfo();
    //调用
    var video2 = document.querySelector("#myvideo2");
    this.player2.attachMediaElement(video2);
    this.player2.load();

    var video3 = document.querySelector("#myvideo3");
    this.player3.attachMediaElement(video3);
    this.player3.load();

    var video4 = document.querySelector("#myvideo4");
    this.player4.attachMediaElement(video4);
    this.player4.load();
   },
    methods: {
        //定义一个方法
        getVideoInfo() {//方法名 vue管理的是这个getvideoinfo（）方法
        //引用这个方法
        getVideoInfo().then((res) => {   //箭头函数不是vue管理的，会往外面找方法
            console.log('响应的数据');
            console.log(res);
            var data = [];
            res.datalist.forEach((item) => {
            var temp = [
                '<span style="color:' + item.Color + ';">' + item.Name + "</span>",
                '<span style="color:' + item.Color + ';">' + item.ID + "</span>",
            ];
            data.push(temp);
            });
            this.config2.data = data;
            this.config2 = { ...this.config2 } //更新数据自动刷新状态   
            //（datav中状态更新：完成赋值操作后使用ES6拓展运算符生成新的props对象）
        });
        },
       
        onClick2() {
        console.log("播放");
        this.player2.play();
        this.playing2 = true;
        },
        clickStop2() {
        console.log("暂停");
        this.player2.pause();
        this.playing2 = false;
        },
        onClick3() {
        console.log("播放");
        this.player3.play();
        this.playing3 = true;
        },
        clickStop3() {
        console.log("暂停");
        this.player3.pause();
        this.playing3 = false;
        },
        onClick4() {
        console.log("播放");
        this.player4.play();
        this.playing4 = true;
        },
        clickStop4() {
        console.log("暂停");
        this.player4.pause();
        this.playing4 = false;
        },
    },
};

</script>
<style scoped>
/* 视频流盒子 */

.flv_box2 {
  width: 40vh;
  height: 30vh;
}
.flv_box3 {
  width: 40vh;
  height: 30vh;
}
.flv_box4 {
  width: 40vh;
  height: 30vh;
}

#myvideo2 {
  width: 100%;
  height: 100%;
}
#myvideo3 {
  width: 100%;
  height: 100%;
}
#myvideo4{
  width: 100%;
  height: 100%;
}
</style>