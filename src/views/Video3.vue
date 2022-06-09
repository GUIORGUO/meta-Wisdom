<template>
        <div style="margin-top:-20px;">
                <div class="video-box">
                     <el-row type="flex" justify="center" style="margin-top:-25px;padding:5px;">
                            <el-col :span="24">
                                  <video
                                        class="card-video"
                                         id="myvideo6"
                                         controls
                                          autoplay
                                          muted
                                  ></video>
                            </el-col>
                      </el-row>
                </div>
        </div>
                        
</template>

<script>
import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons';
import { defineComponent, reactive, ref, onMounted, toRefs } from "vue";
import flv6 from "flv.js";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import { getVideoInfo } from "@/api";

export default {
  data() {
    return {
      player6: null,
     
     };
  },
  created() {
        if (flv6.isSupported()) {
        //创建flv的名称player1不可以一样 ， flv相当于类
        this.player6 = flv6.createPlayer({
            type: "flv",
            isLive: true,
            hasAudio: false,
            hasVideo: true,
            enableStashBuffer: true,
            //   type: "video/mp4",
            //url: "http://10.208.104.242:6901/flv/test", //视频资源路径  支持：http
            url: "http://10.208.104.243/flv/raw",
        });
        }
      
    },
  mounted() {
    //调用方法
    this.getVideoInfo();
    //调用
    var video6 = document.querySelector("#myvideo6");
    this.player6.attachMediaElement(video6);
    this.player6.load();

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
        onClick6() {
        console.log("播放");
        this.player6.play();
        this.playing6 = true;
        },
        clickStop6() {
        console.log("暂停");
        this.player6.pause();
        this.playing6 = false;
        },
        
    },
};

</script>
<style scoped>
/* 视频流盒子 */
.flv_box6 {
  width: 40vh;
  height: 30vh;
}

#myvideo6 {
  width: 100%;
  height: 50vh;
}

</style>