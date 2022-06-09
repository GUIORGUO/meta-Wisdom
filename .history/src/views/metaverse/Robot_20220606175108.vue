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
 
                  <el-row :span="24" type="flex" justify="center" gutter="5">
                    <el-col :span="7" >
                          <el-row type="flex" justify="center" :span="24" :gutter="5">
                              <el-col :span="24">
                                <dv-border-box-10 style="paddding:20px;">
                                  <div class="StaffMix">
                                      <Line1 style=" padding:10px 0px 0px 5px" />
                                  </div>
                                  </dv-border-box-10>
                              </el-col>
                          </el-row>
                          <el-row type="flex" justify="center" :span="24" :gutter="5" style="margin-top:5px;">
                              <el-col :span="24">
                                <dv-border-box-10>
                                  <div class="DynamicList">
                                      <Time style=" padding:10px 0px 60px 2px" />
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
                      <el-row type="flex" justify="center" :span="24" >
                              <el-col :span="24">
                                  <dv-border-box-9 style=" padding:10px 0px 0px 0px;margin-top:-10px;">
                                      <div>
                                          <el-row type="flex" justify="center" :span="24" style="margin-top:-25px;">
                                             <el-col :span="8">
                                                <a href=""><img :src="require(`@/assets/image/robotleft.png`)" style="height:450px; width:400px;margin-left:-480px;"></a>
                                            </el-col>
                                            <el-col :span="8">
                                                <a href=""><img :src="require(`@/assets/image/robot.png`)"  style="height:500px; width:500px;margin-top:120px;"></a>
                                            </el-col>
                                            <el-col :span="8">
                                                 <a href=""><img :src="require(`@/assets/image/industry.png`)"  style="height:500px; width:500px;margin-top:20px;margin-left:40px;"></a>
                                            </el-col>
                                          </el-row>
                                          <el-row type="flex" justify="center" :span="24" style="margin-top:-25px;">
                                             <el-col :span="8">
                                                <a href=""><img :src="require(`@/assets/image/robotAI.png`)" style="height:400px; width:400px;"></a>
                                            </el-col>
                                            <el-col :span="8">
                                                 <a href=""><img :src="require(`@/assets/image/robotfly.png`)" style="height:700px; width:550px;margin-left:-20px;"></a>
                                            </el-col>
                                            <el-col :span="8">
                                                 <a href=""><img :src="require(`@/assets/image/robotchild.png`)" style="height:700px; width:600px;margin-left:-50px;"></a>
                                            </el-col>
                                          </el-row>
                                           <el-row type="flex" justify="center" :span="24" style="margin-top:-25px;">
                                             <el-col :span="8">
                                                <a href=""><img :src="require(`@/assets/image/robotboy.png`)" style="height:350px; width:350px;margin-top:-160px;"></a>
                                            </el-col>
                                            <el-col :span="8">
                                                 <a href=""><img :src="require(`@/assets/image/robotman.png`)" style="height:1000px; width:1000px;margin-top:-30px;margin-left:-240px;"></a>
                                            </el-col>
                                            <el-col :span="8">
                                                 <a href=""><img :src="require(`@/assets/image/robotdog.png`)" style="height:400px; width:400px;margin-top:130px;"></a>
                                            </el-col>
                                          </el-row>
                                           
                                           
                                      </div>
                                      
                                  </dv-border-box-9>
                              </el-col>  
                      </el-row>
                </el-col>
                 <el-col :span="7">
                      
                        <el-row type="flex" justify="center" :span="24" :gutter="5" style="margin-top:-15px;">
                          <el-col :span="24">
                            <dv-border-box-10 >
                              <div class="Map">
                                  <Map style=" padding:10px 10px 6px 5px" />
                              </div>
                              </dv-border-box-10>
                          </el-col>
                        </el-row>
                        <el-row type="flex" justify="center" :span="24" :gutter="5" style="margin-top:5px;">
                          <el-col :span="24">
                            <dv-border-box-10>
                              <div >
                                  <Second style=" padding:10px 20px 30px 20px" />
                              </div>
                            </dv-border-box-10>
                      </el-col>
                    </el-row>
                    <el-row type="flex" justify="center" :span="24" :gutter="5" style="margin-top:5px;">
                          <el-col :span="24">
                            <dv-border-box-10>
                              <div >
                                  <Pie style=" padding:10px 20px 30px 20px" />
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
  background-image: url("~@/assets/image/bj.jpg");
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
import Line1 from './Line1.vue';
import Second from '../Second.vue';
import Map from '../Map.vue';
import Pie from '../Pie.vue';
import Time from './Time.vue';


export default {
    name: "Meta",
    components: {        
        Video9,
        Video10,
        StaffMix,
        Woman,
        Device,
        Verse,
        Line1,
        Second,
        Map,
        Pie,
        Time,

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