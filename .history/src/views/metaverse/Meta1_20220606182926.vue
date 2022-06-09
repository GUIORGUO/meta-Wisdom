<template>
    <el-container>
        <el-main>
            <!-- 头部 -->
            <div class="header">
            <el-row :span="24" type="flex" justify="center">
              <el-col :span="7">
                <dv-decoration-6 style="width:1200px;height:80px;margin-left:-430px;" />
              </el-col>
              <el-col :span="10" >
                <div class="nametop">
                    <el-row :span="24" type="flex" justify="center">
                        <el-col :span="24">
                            <h1 class="title1">面向元宇宙的众智智能度量平台</h1>
                        </el-col>
                    </el-row>
                   <el-row :span="24" type="flex" justify="center" style="margin-top:-55px;">
                      <el-col :span="12">
                        <dv-decoration-8 style="width:900px;height:60px;" />
                      </el-col>
                      <el-col :span="12">
                         <dv-decoration-8 :reverse="true" style="width:900px;height:60px;" />
                      </el-col>
                 </el-row>
                </div>
              </el-col>
              <el-col :span="7">
                 <dv-decoration-6 :reverse="true" style="width:1200px;height:80px;margin-left:-430px;" />
              </el-col>
            </el-row>
            </div>
            <!-- 中间部分 -->
            <div class="medium" >
              <!-- <el-tabs :tab-position="tabPosition" v-model="activeName" @tab-click="handleClick" style="height:100vh;">
                 <el-tab-pane label="虚拟人度量" name="first" > -->
 
                  <el-row :span="24" type="flex" justify="center" gutter="5" >
                    <el-col :span="7" >
                          <el-row type="flex" justify="center" :span="24" :gutter="5" style="margin-top:50px;">
                              <el-col :span="24">
                                <dv-border-box-10 style="paddding:20px;">
                                  <div class="StaffMix">
                                      <Woman style=" padding:10px 10px 30px 5px" />
                                  </div>
                                  </dv-border-box-10>
                              </el-col>
                          </el-row>
                          <el-row type="flex" justify="center" :span="24" :gutter="5" style="margin-top:5px;">
                              <el-col :span="24">
                                <dv-border-box-10>
                                  <div class="DynamicList">
                                      <Device style=" padding:60px 10px 60px 2px" />
                                  </div>
                                  </dv-border-box-10>
                              </el-col>
                           </el-row>
                           <el-row type="flex" justify="center" :span="24" :gutter="5" style="margin-top:5px;">
                              <el-col :span="24">
                                <dv-border-box-10>
                                  <div class="verse">
                                      h
                                       <img src="~@/assets/image/xuniren1.jpeg" alt="" style="width:90%;height:28vh;margin-top:23px;">
                                  </div>
                                  </dv-border-box-10>
                              </el-col>
                           </el-row>
                      
                </el-col>
                <el-col :span="10">
                    <el-row type="flex" justify="center">
                      <el-col :span="18">
                        <!-- 图标 -->
                          <div class="icon">
                                  <el-row :span="24" type="flex" justify="center">
                                    <el-col :span="8" >
                                        <div>
                                            <a href="/Meta1"><img :src="require(`@/assets/image/VR1.png`)" alt="虚拟人度量" style="height:230px; width:230px;"></a>
                                            <h3 class="icon-text">虚拟人度量</h3>
                                        </div>
                                    </el-col>                           
                                    <el-col :span="8" >
                                        <div>
                                            <a href="/Robot"><img :src="require(`@/assets/image/robot.png`)" alt="虚拟人度量" style="height:230px; width:230px;"></a>
                                            <h3 class="icon-text">机器人度量</h3>
                                        </div>
                                    </el-col>                         
                                    <el-col :span="8" >
                                        <div>
                                            <a href="/MIX"><img :src="require(`@/assets/image/robot2.png`)" alt="虚拟人度量" style="height:230px; width:230px;"></a>
                                            <h3 class="icon-text">混合度量</h3>
                                        </div>
                                    </el-col>                          
                                  </el-row>

                              </div>
                        </el-col>
                      </el-row>
                      <el-row type="flex" justify="center" :span="24">
                              <el-col :span="24">
                                  <dv-border-box-10 >
                                <el-row type="flex" justify="center" :span="24">
                                        <el-col :span="24">
                                            <div class="left-video">
                                              <dv-decoration-7 style="width:350px;height:100px;"><span class="videoname">真人直播</span></dv-decoration-7>
                                              <Video9 style=" padding:10px 0px 0px 5px" />
                                              </div>
                                        </el-col>
                                </el-row>
                                <el-row type="flex" justify="center" :span="24">
                                        <el-col :span="24">
                                            <div style="margin-top:-20px;">
                                              <dv-decoration-7 style="width:450px;height:100px;margin-left:30px;"><span class="videoname">元宇宙虚拟人直播</span></dv-decoration-7>
                                              <Video10 style=" padding:10px 0px 0px 5px" />
                                              </div>
                                        </el-col>
                                </el-row>
                                  </dv-border-box-10>
                              </el-col>
                      
                      </el-row>

                
                </el-col>
                 <el-col :span="7">
                      
                        <el-row type="flex" justify="center" :span="24" :gutter="5" style="margin-top:50px;">
                          <el-col :span="24">
                            <dv-border-box-10>
                              <div class="StaffMix">
                                  <Verse style=" padding:10px 10px 40px 5px" />
                              </div>
                              </dv-border-box-10>
                          </el-col>
                        </el-row>
                        <el-row type="flex" justify="center" :span="24" :gutter="5" style="margin-top:5px;">
                          <el-col :span="24">
                            <dv-border-box-10>
                              <div >
                                  <Sudu style=" padding:10px 10px 10px 2px" />
                              </div>
                            </dv-border-box-10>
                      </el-col>
                    </el-row>
                    <el-row type="flex" justify="center" :span="24" :gutter="5" style="margin-top:5px;">
                              <el-col :span="24">
                                <dv-border-box-10>
                                  <div class="DynamicList">
                                      <Device style=" padding:60px 10px 60px 2px" />
                                  </div>
                                  </dv-border-box-10>
                              </el-col>
                           </el-row>
                   
                        </el-col>

               </el-row>

               <!-- </el-tab-pane>
              </el-tabs> -->
            </div>
            
        </el-main>
    </el-container>
</template>
<style scoped>

.title1{
    font-size:66px;
    font-family: "微软雅黑";
    color:rgb(236, 252, 250);
    line-height: 1.3;
    margin-top:0px;
}
.el-main{
  background-image: url("~@/assets/image/topbackground.png");
  height: 100vh;
  background-repeat:no-repeat; 
  background-size: cover; 
  -webkit-background-size: cover; 
  -moz-background-size: cover; 
  -o-background-size: cover;
}
.medium{
  margin-top: 30px;
}
/* .nametop{
  display:flex;
  justify-content: center;
} */
.dv-decoration-7{
  font-size:30px;
  font-family: "微软雅黑";
  color:rgb(236, 252, 250);
}
.left-video{
  margin-top: 23px;
}
.icon-text{
  font-size:36px;
  font-family: "微软雅黑";
  color:rgb(236, 252, 250);
  display:flex; 
  justify-content:center;
  margin-top:-22px;
}
.icon{
  margin-top:-20px;
}
.videoname{
  font-size: 45px;
}


</style>
<script>
import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons';
import { defineComponent, reactive, ref, onMounted, toRefs } from "vue";
import Video9 from "./Video9.vue";
import Video10 from "./Video10.vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import StaffMix from './StaffMix.vue';
import Woman from './Woman.vue';
import Device from '../Device.vue';
import Verse from './Verse.vue';
import Sudu from './Sudu.vue';

export default {
    name: "Meta",
    components: {        
        Video9,
        Video10,
        StaffMix,
        Woman,
        Device,
        Verse,
        Sudu,
    },
    data() {
       return {
        tabPosition: 'left',
        activeName: 'first',
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>