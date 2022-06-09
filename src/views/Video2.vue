<template>
        <div style="margin-top:-40px;">
                        <el-row type="flex" class="row" justify="center">
                                <el-col :span="24">
                                    <div class="m-last">
                                        <el-row type="flex" class="row" justify="center" :span="24" :gutter="8">
                                            <el-col :span="8">
                                                
                                                    <div class="video-box">
                                                           <el-row type="flex" justify="center" :span="24">
                                                               <el-col :span="24">
                                                                   <video
                                                                    class="card-video"
                                                                    id="myvideo20"
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
                                                                                    ><strong>类眼终端数据</strong></span
                                                                                    >
                                                                                </div>
                                                                            </el-col>
                                                                            <el-col :span="10">
                                                                                <div style=" overflow:hidden; font-size:12px;" id="str">
                                                                                    <el-button
                                                                                    @click="onClick20()"
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
                                                                    id="myvideo21"
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
                                                                                    @click="onClick21()"
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
                                                                    id="myvideo22"
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
                                                                                    ><strong>终端模组控制</strong></span
                                                                                    >
                                                                                </div>
                                                                            </el-col>
                                                                            <el-col :span="10">
                                                                                <div style=" overflow:hidden; font-size:12px;" id="str">
                                                                                    <el-button
                                                                                    @click="onClick22()"
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
import flv20 from "flv.js";
import flv21 from "flv.js";
import flv22 from "flv.js";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import { getVideoInfo } from "@/api";

export default {
  data() {
    return {
      player20: null,
      player21: null,
      player22: null,
     };
  },
  created() {
        if (flv20.isSupported()) {
        //创建flv的名称player1不可以一样 ， flv相当于类
        this.player20 = flv20.createPlayer({
            type: "flv",
            isLive: true,
            hasAudio: false,
            hasVideo: true,
            enableStashBuffer: true,
            //   type: "video/mp4",
            //url: "http://10.208.104.242:6901/flv/test", //视频资源路径  支持：http
            url: "http://10.208.104.243/flv/background_3",
        });
        }
        if (flv21.isSupported()) {
        this.player21 = flv21.createPlayer({
            type: "flv",
            isLive: true,
            hasAudio: false,
            hasVideo: true,
            enableStashBuffer: true,
            //   type: "video/mp4",
            url: "http://10.208.104.243/flv/feature_3", //视频资源路径  支持：http
        });
        }
        if (flv22.isSupported()) {
        this.player22 = flv22.createPlayer({
            type: "flv",
            isLive: true,
            hasAudio: false,//音频
            hasVideo: true,
            enableStashBuffer: true,
            //   type: "video/mp4",
            url: "http://10.208.104.243/flv/matrix_3", //视频资源路径  支持：http
        });
        }
    },
  mounted() {
    //调用方法
    this.getVideoInfo();
    //调用
    var video20 = document.querySelector("#myvideo20");
    this.player20.attachMediaElement(video20);
    this.player20.load();

    var video21 = document.querySelector("#myvideo21");
    this.player21.attachMediaElement(video21);
    this.player21.load();

    var video22 = document.querySelector("#myvideo22");
    this.player22.attachMediaElement(video22);
    this.player22.load();
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
        onClick20() {
        console.log("播放");
        this.player20.play();
        this.playing20 = true;
        },
        clickStop20() {
        console.log("暂停");
        this.player20.pause();
        this.playing20 = false;
        },
        onClick21() {
        console.log("播放");
        this.player21.play();
        this.playing21 = true;
        },
        clickStop21() {
        console.log("暂停");
        this.player21.pause();
        this.playing21 = false;
        },
        onClick22() {
        console.log("播放");
        this.player22.play();
        this.playing22 = true;
        },
        clickStop22() {
        console.log("暂停");
        this.player22.pause();
        this.playing22 = false;
        },
    },
};

</script>
<style scoped>
/* 视频流盒子 */
.flv_box20 {
  width: 40vh;
  height: 30vh;
}
.flv_box21 {
  width: 40vh;
  height: 30vh;
}
.flv_box22 {
  width: 40vh;
  height: 30vh;
}
#myvideo20 {
  width: 100%;
  height: 100%;
  
}
#myvideo21 {
  width: 100%;
  height: 25vh;
}
#myvideo22 {
  width: 100%;
  height: 25vh;
}
</style>