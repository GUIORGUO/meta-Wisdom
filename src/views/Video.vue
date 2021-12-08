<template>
  <div class="video">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <div class="header">
          <el-row :gutter="10" style="margin-left: 45px">
            <el-col :span="7">
              <h1 id="header" title="MARVEL(奇迹实验室)">
                <a
                  href=""
                  class="clickstat"
                  eid="click/navi/logo"
                  eid_desc="点击/导航/logo"
                  style="color: #63c5ff; text-decoration-line: none"
                >
                  <!-- <img class="hd-logo" src="../assets/logo.png" alt="奇迹实验室" width="100" height="50"> -->
                  <strong>MARVEL</strong>
                </a>
              </h1>
            </el-col>
            <div class="daohang" style="margin-top: 27px; margin-left: -100px">
              <el-col :span="9">
                <div class="hy-nav-item">
                  <a
                    href=""
                    class="hy-nav-link clickstat"
                    eid="click/navi/home"
                    eid_desc="点击/导航/首页"
                    style="color: #4eb6ff"
                    >首页</a
                  >
                </div>
              </el-col>
              <el-col :span="8">
                <div class="hy-nav-item">
                  <div class="hy-nav-expand">
                    <a
                      href=""
                      class="hy-nav-link clickstat"
                      eid="click/navi/zhibo"
                      eid_desc="点击/导航/直播"
                      style="color: #4eb6ff"
                      >直播</a
                    >
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="hy-nav-item">
                  <a
                    class="hy-nav-link hy-nav-link-ext clickstat"
                    id="hy-nav-category"
                    eid="click/navi/classification"
                    eid_desc="点击/导航/分类"
                    href=""
                    style="color: #4eb6ff"
                    >分类<i></i
                  ></a>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="hy-nav-item">
                  <a
                    href=""
                    class="hy-nav-link clickstat"
                    eid="click/navi/home"
                    eid_desc="点击/导航/首页"
                    style="color: #4eb6ff"
                    >视频</a
                  >
                </div>
              </el-col>
              <el-col :span="8">
                <div class="hy-nav-item">
                  <a
                    href=""
                    class="hy-nav-link clickstat"
                    eid="click/navi/home"
                    eid_desc="点击/导航/首页"
                    style="color: #4eb6ff"
                    >学习</a
                  >
                </div>
              </el-col>
              <el-col :span="8">
                <div class="hy-nav-item">
                  <a
                    href=""
                    class="hy-nav-link clickstat"
                    eid="click/navi/home"
                    eid_desc="点击/导航/首页"
                    style="color: #4eb6ff"
                    >游戏</a
                  >
                </div>
              </el-col>
              <el-col>
                <div class="block">
                  <el-cascader
                    placeholder="试试搜索：指南"
                    :options="options"
                    :props="{ multiple: true }"
                    filterable
                  >
                  </el-cascader>
                </div>
              </el-col>
            </div>
          </el-row>

          <!-- 数字化显示 -->
          <div>
            <!-- <el-row span="24" type="flex" class="row-bg" justify="center" :gutter="10">
            <el-col span="6">
              <div :style="{ width: width, height: height, minHeight: minHeight }" id="box">
                <div class="box-content-border">
                    <p class="name2">今日直播量</p>
                    <p><span class="card-big-font2">13,900</span></p>
                  <slot name="content"></slot>
                </div>
                <div class="angle-border left-top-border"></div>
                <div class="angle-border right-top-border"></div>
                <div class="angle-border left-bottom-border"></div>
                <div class="angle-border right-bottom-border"></div>
              </div>
            </el-col>
            <el-col span="6">
              <div :style="{ width: width, height: height, minHeight: minHeight }" id="box">
                <div class="box-content-border">
                    <p class="name3">当前在线人数</p>
                    <p><span class="card-big-font3">3,870</span></p>
                  <slot name="content"></slot>
                </div>
                <div class="angle-border left-top-border"></div>
                <div class="angle-border right-top-border"></div>
                <div class="angle-border left-bottom-border"></div>
                <div class="angle-border right-bottom-border"></div>
              </div>
            </el-col>    
           <el-col span="6">
              <div :style="{ width: width, height: height, minHeight: minHeight }" id="box">
                <div class="box-content-border">
                    <p class="name4">今日访客</p>
                    <p><span class="card-big-font4">3,849</span></p>
                  <slot name="content"></slot>
                </div>
                <div class="angle-border left-top-border"></div>
                <div class="angle-border right-top-border"></div>
                <div class="angle-border left-bottom-border"></div>
                <div class="angle-border right-bottom-border"></div>
              </div>
            </el-col>
            <el-col span="6">
              <div :style="{ width: width, height: height, minHeight: minHeight }" id="box">
                <div class="box-content-border">
                    <p class="name5">直播热度</p>
                <p class="card-big-font5" >
                    No.1  <span>学习视频</span> 
                    <Icon type="ios-ribbon" />
                </p>
                <p class="card-big-font5">
                    No.2  <span>游戏视频</span> 
                    <icon type="ios-ribbon-outline" />
                </p>
               
                  <slot name="content"></slot>
                </div>
                <div class="angle-border left-top-border"></div>
                <div class="angle-border right-top-border"></div>
                <div class="angle-border left-bottom-border"></div>
                <div class="angle-border right-bottom-border"></div>
              </div>
            </el-col>
        </el-row> -->
            <!-- end数字化显示 -->

            <el-row :gutter="2">
              <!-- <el-col span="3" :offset="3">
            <First />
          </el-col> -->
              <el-col :span="8">
                <dv-border-box-12
                  style="margin-top: -19px; min-width: 350px; height: 340px"
                >
                  <div>
                    <h3 style="color: #90edef">直播间排名</h3>
                    <dv-scroll-board
                      :config="config2"
                      style="
                        margin-top: -20px;
                        color: #00baff;
                        min-width: 350px;
                        height: 220px;
                        padding: 10px;
                      "
                    />
                  </div>
                </dv-border-box-12>
                <dv-border-box-12
                  style="margin-top: -19px; min-width: 350px; height: 320px"
                >
                  <div>
                    <h3 style="color: #90edef">地区活跃量</h3>
                    <div><Third style="padding: 10px" /></div>
                  </div>
                </dv-border-box-12>
              </el-col>
              <el-col :span="8">
                <dv-border-box-12>
                  <div><Map style="padding: 10px" /></div>
                </dv-border-box-12>
              </el-col>
              <el-col :span="8">
                <dv-border-box-12 style="min-width: 350px; height: 320px">
                  <div><Second style="padding: 20px 10px" /></div>
                </dv-border-box-12>
                <dv-border-box-12 style="min-width: 350px; height: 340px">
                  <div><Scroll style="padding: 20px 10px" /></div>
                </dv-border-box-12>
              </el-col>

              <!-- <el-col>
            <div id="myChart1" :style="{width: '250px', height: '250px'}"></div>
          </el-col>
            -->
            </el-row>

            <!-- 中间直播盒子 -->
            <!-- <el-row type="flex" class="row-bg" justify="center">
          <el-col span="24">
            <div>
             <dv-border-box-1 style="margin-top:40px;">
                  <el-row>
                    <el-col span="12">
                    <div class="grid-content" > 
                      <video id="myvideo1" style="padding:10px 10px;border-radius: 3em; height:250px;width:590px;" controls  autoplay muted></video>
                    </div>
                    </el-col>
                  </el-row>
             </dv-border-box-1>
            </div>
          </el-col>
        </el-row>  -->
            <!-- <div id="myChart1" :style="{width: '200px', height: '200px'}"></div> -->
            <!-- <el-row>
            <el-col span="11">
            <el-card style="width:1000px; height: 250px;">
                <div id="main" :style="{width:'500px',height: '300px'}" style="float: left;"></div>
                <div id="echarts" :style="{width:'500px', height: '300px'}" style="float: left;"></div>
            </el-card>
            </el-col>
        </el-row> -->
          </div>
        </div>
      </el-header>

      <el-container>
        <!-- 侧栏
        <el-aside width="200px">

        </el-aside> -->

        <!-- 主体  -->
        <el-main>
          <!-- 视频流盒子 -->
          <div class="flv-box" style="margin-left: 50px">
            <dv-decoration-5 style="width: 1300px; height: 40px" />
            <el-row :span="24" style="margin-top: 10px">
              <el-col :span="8" :offset="1">
                <dv-decoration-7
                  style="margin-top: 20px; width: 150px; height: 30px"
                  class="name1"
                  >精彩推荐</dv-decoration-7
                >
              </el-col>
            </el-row>
            <!-- 第一行视频 -->

            <el-row
              type="flex"
              class="row-bg"
              justify="center"
              :gutter="20"
              style="margin-top: 60px"
            >
              <el-col :span="23">
                <el-col :span="10">
                  <dv-border-box-1 style="height: 280px; width: 370px">
                    <video
                      class="card-video"
                      id="myvideo1"
                      controls
                      autoplay
                      muted
                      style="height: 200px; width: 340px"
                    ></video>
                    <div style="margin-top: -10px; padding: 0px">
                      <el-row :span="18">
                        <el-col :span="10">
                          <span class="video-name"
                            ><strong>学习vlog</strong></span
                          >
                        </el-col>
                        <el-col :span="8">
                          <el-button
                            @click="onClick1()"
                            type="text"
                            class="button"
                            >点击播放</el-button
                          >
                        </el-col>
                      </el-row>
                    </div>
                  </dv-border-box-1>
                </el-col>
                <el-col :span="10">
                  <dv-border-box-1 style="height: 280px; width: 370px">
                    <div>
                      <video
                        class="card-video"
                        id="myvideo3"
                        controls
                        autoplay
                        muted
                        style="height: 200px; width: 340px"
                      ></video>
                      <div style="margin-top: -20px; padding: 0px">
                        <el-row :span="18">
                          <el-col :span="10">
                            <span class="video-name"
                              ><strong>游戏直播</strong></span
                            >
                          </el-col>
                          <el-col :span="8">
                            <el-button
                              @click="onClick3()"
                              type="text"
                              class="button"
                              >点击播放</el-button
                            >
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </dv-border-box-1>
                </el-col>
                <el-col :span="10">
                  <dv-border-box-1 style="height: 280px; width: 370px">
                    <div>
                      <video
                        class="card-video"
                        id="myvideo4"
                        controls
                        autoplay
                        muted
                        style="height: 200px; width: 340px"
                      ></video>
                      <div style="margin-top: -20px; padding: 0px">
                        <el-row :span="18">
                          <el-col :span="10">
                            <span class="video-name"
                              ><strong>游戏直播</strong></span
                            >
                          </el-col>
                          <el-col :span="8">
                            <el-button
                              @click="onClick4()"
                              type="text"
                              class="button"
                              >点击播放</el-button
                            >
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </dv-border-box-1>
                </el-col>
              </el-col>
            </el-row>
            <!-- 第二行视频 -->
            <el-row
              type="flex"
              class="row-bg"
              justify="center"
              :gutter="20"
              style="margin-top: 35px"
            >
              <el-col :span="23">
                <el-col :span="10">
                  <dv-border-box-1 style="height: 280px; width: 370px">
                    <div>
                      <video
                        class="card-video"
                        id="myvideo5"
                        controls
                        autoplay
                        muted
                        style="height: 200px; width: 340px"
                      ></video>
                      <div style="margin-top: -20px; padding: 0px">
                        <el-row :span="18">
                          <el-col :span="10">
                            <span class="video-name"
                              ><strong>游戏直播</strong></span
                            >
                          </el-col>
                          <el-col :span="8">
                            <el-button
                              @click="onClick5()"
                              type="text"
                              class="button"
                              >点击播放</el-button
                            >
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </dv-border-box-1>
                </el-col>
                <el-col :span="10">
                  <dv-border-box-1 style="height: 280px; width: 370px">
                    <video
                      class="card-video"
                      id="myvideo6"
                      controls
                      autoplay
                      muted
                      style="height: 200px; width: 340px"
                    ></video>
                    <div style="margin-top: -20px; padding: 0px">
                      <el-row :span="18">
                        <el-col :span="10">
                          <span class="video-name"
                            ><strong>游戏直播</strong></span
                          >
                        </el-col>
                        <el-col :span="8">
                          <el-button
                            @click="onClick6()"
                            type="text"
                            class="button"
                            >点击播放</el-button
                          >
                        </el-col>
                      </el-row>
                    </div>
                  </dv-border-box-1>
                </el-col>
                <el-col :span="10">
                  <dv-border-box-1 style="height: 280px; width: 370px">
                    <div>
                      <video
                        class="card-video"
                        id="myvideo7"
                        controls
                        autoplay
                        muted
                        style="height: 201px; width: 340px"
                      ></video>
                      <div style="margin-top: -20px; padding: 0px">
                        <el-row :span="18">
                          <el-col :span="10">
                            <span class="video-name"
                              ><strong>游戏直播</strong></span
                            >
                          </el-col>
                          <el-col :span="8">
                            <el-button
                              @click="onClick7()"
                              type="text"
                              class="button"
                              >点击播放</el-button
                            >
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </dv-border-box-1>
                </el-col>
              </el-col>
            </el-row>
            <!-- 第三行视频 -->
            <el-row
              type="flex"
              class="row-bg"
              justify="center"
              :gutter="20"
              style="margin-top: 35px"
            >
              <el-col :span="23">
                <el-col :span="10">
                  <dv-border-box-1 style="height: 280px; width: 370px">
                    <div>
                      <video
                        class="card-video"
                        id="myvideo2"
                        controls
                        autoplay
                        muted
                        style="height: 200px; width: 340px"
                      ></video>
                      <div style="margin-top: -20px; padding: 0px">
                        <el-row :span="18">
                          <el-col :span="10">
                            <span class="video-name"
                              ><strong>学习直播</strong></span
                            >
                          </el-col>
                          <el-col :span="8">
                            <el-button
                              @click="onClick2()"
                              type="text"
                              class="button"
                              >点击播放</el-button
                            >
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </dv-border-box-1>
                </el-col>
                <el-col :span="10">
                  <dv-border-box-1 style="height: 280px; width: 370px">
                    <video
                      class="card-video"
                      id="myvideo8"
                      controls
                      autoplay
                      muted
                      style="height: 200px; width: 340px"
                    ></video>
                    <div style="margin-top: -20px; padding: 0px">
                      <el-row :span="18">
                        <el-col :span="10">
                          <span class="video-name"
                            ><strong>游戏直播</strong></span
                          >
                        </el-col>
                        <el-col :span="8">
                          <el-button
                            @click="onClick8()"
                            type="text"
                            class="button"
                            >点击播放</el-button
                          >
                        </el-col>
                      </el-row>
                    </div>
                  </dv-border-box-1>
                </el-col>
                <el-col :span="10">
                  <dv-border-box-1 style="height: 280px; width: 370px">
                    <div>
                      <video
                        class="card-video"
                        id="myvideo9"
                        controls
                        autoplay
                        muted
                        style="height: 201px; width: 340px"
                      ></video>
                      <div style="margin-top: -20px; padding: 0px">
                        <el-row :span="18">
                          <el-col :span="10">
                            <span class="video-name"
                              ><strong>游戏直播</strong></span
                            >
                          </el-col>
                          <el-col :span="8">
                            <el-button
                              @click="onClick9()"
                              type="text"
                              class="button"
                              >点击播放</el-button
                            >
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </dv-border-box-1>
                </el-col>
              </el-col>
            </el-row>
          </div>
          <dv-decoration-5
            style="margin-top: 30px; width: 1300px; height: 40px"
          />

          <!-- <dv-border-box-13 style="width:550px;height:350px;">
            <div>
              <vue3-seamless-scroll :data="CardPartsStatisticsList" :list="list" class="scroll" :class-option="defaultOption">
                  <div class="item" v-for="(item, index) in list" :key="index">
                    <span>{{index+1}}</span>
                    <span>{{item.title}}</span>
                    <span>{{item.date}}</span>
                  </div>
                </vue3-seamless-scroll>
            </div>
          </dv-border-box-13> -->
          <el-row>
            <el-col span="4" :offset="1">
              <dv-decoration-12 style="width: 150px; height: 150px" />
            </el-col>
          </el-row>

          <el-row :gutter="4">
            <el-col span="6" :offset="1">
              <dv-border-box-10
                style="width: 400px; height: 380px; margin-top: 20px"
              >
                <el-carousel
                  height="350px"
                  direction="vertical"
                  style="padding: 10px"
                >
                  <el-carousel-item v-for="item in 3" :key="item">
                    <h3 class="small">{{ item }}</h3>
                  </el-carousel-item>
                </el-carousel>
              </dv-border-box-10>
            </el-col>

            <el-col span="6">
              <dv-border-box-10
                style="width: 400px; height: 380px; margin-top: 30px"
              >
                <div>
                  <dv-decoration-7
                    style="padding-top: 20px; width: 200px; height: 30px"
                    class="name1"
                    >精彩直播间</dv-decoration-7
                  >
                  <dv-scroll-board
                    :config="config1"
                    style="
                      color: #00baff;
                      width: 350px;
                      height: 300px;
                      margin-top: 10px;
                      margin-left: 30px;
                    "
                  />
                </div>
              </dv-border-box-10>
            </el-col>
            <el-col span="6">
              <dv-border-box-10
                style="width: 400px; height: 380px; margin-top: 30px"
              >
                <div>
                  <dv-decoration-7
                    style="padding-top: 20px; width: 200px; height: 30px"
                    class="name1"
                    >直播间排名</dv-decoration-7
                  >
                  <dv-scroll-ranking-board
                    :config="ranking"
                    style="
                      padding: 10px;
                      height: 300px;
                      width: 340px;
                      color: #fff;
                    "
                  />
                </div>
              </dv-border-box-10>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
} from "@element-plus/icons";
import { defineComponent, reactive, ref, onMounted, toRefs } from "vue";
import * as echarts from "echarts";
import First from "@/views/First.vue";
import Second from "@/views/Second.vue";
import Third from "@/views/Third.vue";
import Scroll from "./Scroll.vue";
import Map from "@/views/Map.vue"; //将页面引入 First: 是别名  @/xxx/xxx/First.vue: First页面的路径,@是src
import flv1 from "flv.js";
import flv2 from "flv.js";
import flv3 from "flv.js";
import flv4 from "flv.js";
import flv5 from "flv.js";
import flv6 from "flv.js";
import flv7 from "flv.js";
import flv8 from "flv.js";
import flv9 from "flv.js";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

export default {
  name: "video",
  components: {
    //  'Demo':First  ////将别名First 变成 组件 Demo
    First,
    Map,
    Vue3SeamlessScroll,
    Second,
    Scroll,
    Third,
  },
  //边框
  props: {
    width: {
      default: "100%",
    },
    height: {
      default: "100%",
    },
    minHeight: {
      default: "0px",
    },
  },

  data() {
    return {
      player1: null,
      player2: null,
      player3: null,
      player4: null,
      player5: null,
      player6: null,
      player7: null,
      player8: null,
      player9: null,
      playing1: false,
      playing2: false,
      playing3: false,
      playing4: false,
      playing5: false,
      playing6: false,
      playing7: false,
      playing8: false,
      playing9: false,
      isCollapsed: false,
      charts: "",
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],

      config1: {
        header: [
          '<span style="color:#32c5e9;">直播间名称</span>',
          '<span style="color:#32c5e9;">直播间编号</span>',
        ],
        data: [
          [
            '<span style="color:#da5d58;">元宇宙</span>',
            '<span style="color:#da5d58;">2233111</span>',
          ],
          [
            '<span style="color:#dc7d5b;">视频编码</span>',
            '<span style="color:#dc7d5b;">2233113</span>',
          ],
          [
            '<span style="color:#a58048;">区块链 </span>',
            '<span style="color:#a58048;">2233118</span>',
          ],
          [
            '<span style="color:#969189;">碳中和</span>',
            '<span style="color:#969189;">2255156</span>',
          ],
          [
            '<span style="color:#969189;">机器学习研讨会</span>',
            '<span style="color:#969189;">2255623</span>',
          ],
          [
            '<span style="color:#969189;">雷诺机构</span>',
            '<span style="color:#969189;">1155631</span>',
          ],
          [
            '<span style="color:#969189;">人生观交流会</span>',
            '<span style="color:#969189;">1252120</span>',
          ],
          [
            '<span style="color:#969189;">区块链</span>',
            '<span style="color:#969189;">1212512</span>',
          ],
          [
            '<span style="color:#969189;">图像识别</span>',
            '<span style="color:#969189;">1212662</span>',
          ],
        ],
        rowNum: 5, //表格行数
        headerHeight: 40,
        headerBGC: "#202947", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        index: true,
        columnWidth: [50],
        align: ["center"],
      },
      config2: {
        header: [
          '<span style="color:#32c5e9;">直播间名称</span>',
          '<span style="color:#32c5e9;">直播间编号</span>',
        ],
        data: [
          [
            '<span style="color:#da5d58;">元宇宙</span>',
            '<span style="color:#da5d58;">2233111</span>',
          ],
          [
            '<span style="color:#dc7d5b;">视频编码</span>',
            '<span style="color:#dc7d5b;">2233113</span>',
          ],
          [
            '<span style="color:#a58048;">区块链 </span>',
            '<span style="color:#a58048;">2233118</span>',
          ],
          [
            '<span style="color:#969189;">碳中和</span>',
            '<span style="color:#969189;">2255156</span>',
          ],
          [
            '<span style="color:#969189;">机器学习研讨会</span>',
            '<span style="color:#969189;">2255623</span>',
          ],
          [
            '<span style="color:#969189;">雷诺机构</span>',
            '<span style="color:#969189;">1155631</span>',
          ],
          [
            '<span style="color:#969189;">人生观交流会</span>',
            '<span style="color:#969189;">1252120</span>',
          ],
          [
            '<span style="color:#969189;">区块链</span>',
            '<span style="color:#969189;">1212512</span>',
          ],
          [
            '<span style="color:#969189;">图像识别</span>',
            '<span style="color:#969189;">1212662</span>',
          ],
        ],
        rowNum: 5, //表格行数
        headerHeight: 40,
        headerBGC: "#202947", //表头
        oddRowBGC: "#0f1325", //奇数行
        evenRowBGC: "#171c33", //偶数行
        index: true,
        columnWidth: [50],
        align: ["center"],
      },
      ranking: {
        data: [
          {
            name: "还未见过海",
            value: 55123,
          },
          {
            name: "倪妮",
            value: 12022,
          },
          {
            name: "榆树",
            value: 78932,
          },
          {
            name: "驻马店",
            value: 63411,
          },
          {
            name: "飒飒",
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
        unit: "单位",
        valueFormatter({ value }) {
          console.warn(arguments);
          const reverseNumber = (value + "").split("").reverse();
          let valueStr = "";

          while (reverseNumber.length) {
            const seg = reverseNumber.splice(0, 3).join("");
            valueStr += seg;
            if (seg.length === 3) valueStr += ",";
          }

          return valueStr.split("").reverse().join("");
        },
      },
    };
  },
  //启动函数
  setup() {
    //   const list = ref([    //创建响应式的数据对象
    //   {

    //     title: "Vue3.0 无缝滚动组件展示数据第1条",
    //     date: Date.now(),
    //   },
    //   {
    //     title: "Vue3.0 无缝滚动组件展示数据第2条",
    //     date: Date.now(),
    //   },
    //   {
    //     title: "Vue3.0 无缝滚动组件展示数据第3条",
    //     date: Date.now(),
    //   },
    //   {
    //     title: "Vue3.0 无缝滚动组件展示数据第4条",
    //     date: Date.now(),
    //   },
    //   {
    //     title: "Vue3.0 无缝滚动组件展示数据第5条",
    //     date: Date.now(),
    //   },
    //   {
    //     title: "Vue3.0 无缝滚动组件展示数据第6条",
    //     date: Date.now(),
    //   },
    //   {
    //     title: "Vue3.0 无缝滚动组件展示数据第7条",
    //     date: Date.now(),
    //   },
    //   {
    //     title: "Vue3.0 无缝滚动组件展示数据第8条",
    //     date: Date.now(),
    //   },
    //   {
    //     title: "Vue3.0 无缝滚动组件展示数据第9条",
    //     date: Date.now(),
    //   },
    // ]);

    // return {list};

    const state = reactive({
      //创建响应式的数据对象

      myChart2: ref(),
      data: [100, 200, 300, 500, 499, 334, 666],
      type: "bar",
    });

    const init = () => {
      //定义方法
      if (state.myChart2) {
        //  图表初始化
        var chart = echarts.init(state.myChart2);
        //  图表配置信息
        const option = {
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: state.data, //图表的数据
              type: state.type, //图表类型
            },
          ],
        };
        //指定配置项和数据显示
        chart.setOption(option);
      }
    };

    onMounted(() => {
      // 需要获取到element,所以是onMounted的Hook
      init();
    });
    return state;
  },

  created() {
    if (flv1.isSupported()) {
      this.player1 = flv1.createPlayer({
        type: "flv",
        isLive: true,
        //   type: "video/mp4",
        url: "http://10.208.104.242:6901/flv/test", //视频资源路径  支持：http
      });
    }
    if (flv2.isSupported()) {
      this.player2 = flv2.createPlayer({
        type: "flv",
        isLive: true,
        //   type: "video/mp4",
        url: "http://1011.hlsplay.aodianyun.com/demo/game.flv", //视频资源路径  支持：http
      });
    }
    if (flv3.isSupported()) {
      this.player3 = flv3.createPlayer({
        type: "flv",
        isLive: true,
        //   type: "video/mp4",
        url: "http://localhost:10076/live?port=1935&app=live&stream=test", //视频资源路径  支持：http
      });
    }
    if (flv4.isSupported()) {
      this.player4 = flv4.createPlayer({
        type: "flv",
        isLive: true,
        //   type: "video/mp4",
        url: "http://1011.hlsplay.aodianyun.com/demo/game.flv", //视频资源路径  支持：http
      });
    }
    if (flv5.isSupported()) {
      this.player5 = flv5.createPlayer({
        type: "flv",
        isLive: true,
        //   type: "video/mp4",
        url: "http://localhost:10076/live?port=1935&app=live&stream=test", //视频资源路径  支持：http
      });
    }
    if (flv6.isSupported()) {
      this.player6 = flv6.createPlayer({
        type: "flv",
        isLive: true,
        //   type: "video/mp4",
        url: "http://1011.hlsplay.aodianyun.com/demo/game.flv", //视频资源路径  支持：http
      });
    }
    if (flv7.isSupported()) {
      this.player7 = flv7.createPlayer({
        type: "flv",
        isLive: true,
        //   type: "video/mp4",
        url: "http://1011.hlsplay.aodianyun.com/demo/game.flv", //视频资源路径  支持：http
      });
    }
    if (flv8.isSupported()) {
      this.player8 = flv8.createPlayer({
        type: "flv",
        isLive: true,
        //   type: "video/mp4",
        url: "http://1011.hlsplay.aodianyun.com/demo/game.flv", //视频资源路径  支持：http
      });
    }
    if (flv9.isSupported()) {
      this.player9 = flv9.createPlayer({
        type: "flv",
        isLive: true,
        //   type: "video/mp4",
        url: "http://1011.hlsplay.aodianyun.com/demo/game.flv", //视频资源路径  支持：http
      });
    }
  },
  mounted() {
    //调用
    var video1 = document.querySelector("#myvideo1");
    this.player1.attachMediaElement(video1);
    this.player1.load();

    var video2 = document.querySelector("#myvideo2");
    this.player2.attachMediaElement(video2);
    this.player2.load();

    var video3 = document.querySelector("#myvideo3");
    this.player3.attachMediaElement(video3);
    this.player3.load();

    var video4 = document.querySelector("#myvideo4");
    this.player4.attachMediaElement(video4);
    this.player4.load();

    var video5 = document.querySelector("#myvideo5");
    this.player5.attachMediaElement(video5);
    this.player5.load();

    var video6 = document.querySelector("#myvideo6");
    this.player6.attachMediaElement(video6);
    this.player6.load();

    var video7 = document.querySelector("#myvideo7");
    this.player7.attachMediaElement(video7);
    this.player7.load();

    var video8 = document.querySelector("#myvideo8");
    this.player8.attachMediaElement(video8);
    this.player8.load();

    var video9 = document.querySelector("#myvideo9");
    this.player9.attachMediaElement(video9);
    this.player9.load();

    this.$nextTick(function () {
      this.drawPie("main");
      this.drawPie2("echarts");
    });
  },

  methods: {
    onClick1() {
      console.log("播放");
      this.player1.play();
      this.playing1 = true;
    },
    clickStop1() {
      console.log("暂停");
      this.player1.pause();
      this.playing1 = false;
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

    onClick5() {
      console.log("播放");
      this.player5.play();
      this.playing5 = true;
    },
    clickStop5() {
      console.log("暂停");
      this.player5.pause();
      this.playing5 = false;
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

    onClick7() {
      console.log("播放");
      this.player7.play();
      this.playing7 = true;
    },
    clickStop7() {
      console.log("暂停");
      this.player7.pause();
      this.playing7 = false;
    },

    onClick8() {
      console.log("播放");
      this.player8.play();
      this.playing8 = true;
    },
    clickStop8() {
      console.log("暂停");
      this.player8.pause();
      this.playing8 = false;
    },

    onClick9() {
      console.log("播放");
      this.player9.play();
      this.playing9 = true;
    },
    clickStop9() {
      console.log("暂停");
      this.player9.pause();
      this.playing9 = false;
    },
  },
};
</script>

<style scoped>
/* 头部 */
.el-header {
  /* background-image: url(../assets/炫酷行星.gif); */
  background-color: #161627;
  background-size: 100% 550px;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
  height: 760px;
}

.hy-nav-item {
  float: left;
  box-sizing: border-box;
  height: 100%;
  padding: 14px 0 0 5px;
  margin-top: -10px;
}
.hy-nav-item-on .hy-nav-link,
.hy-nav-link:hover {
  color: #fff;
  background: radial-gradient(ellipse at bottom, #4492ff 0%, #070500 100%);
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
.box-card-1 {
  width: 200px;
}

/* 搜索框 */
.block {
  margin-top: -10px;
  margin-left: 20px;
  width: 400px;
  height: 10px;
}

/* 视频流盒子 */
.flv_box1 {
  width: 40vh;
  height: 30vh;
}
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
.flv_box5 {
  width: 40vh;
  height: 30vh;
}
.flv_box6 {
  width: 40vh;
  height: 30vh;
}
.flv_box7 {
  width: 40vh;
  height: 30vh;
}
.flv_box8 {
  width: 40vh;
  height: 30vh;
}
.flv_box9 {
  width: 40vh;
  height: 30vh;
}

#myvideo1 {
  width: 100%;
  height: 100%;
}
#myvideo2 {
  width: 100%;
  height: 100%;
}
#myvideo3 {
  width: 100%;
  height: 100%;
}
#myvideo4 {
  width: 100%;
  height: 100%;
}

/* end视频流盒子 */

.el-main {
  /* background: radial-gradient(ellipse at bottom, #040213c9 0%, #070b1c 100%); */
  background-color: #161627;
}

.card-video {
  margin-top: 15px;
  border-radius: 3ex;
}
.el-button {
  padding: 20px;
  margin-left: 70px;
  min-height: auto;
}

.name1 {
  color: #fff;
  font-size: 23px;
}
.button {
  color: #4cf9f0;
}
.video-name {
  color: rgb(49, 225, 231);
}
/* today box */
.name2 {
  color: #75f94c;
  font-size: 20px;
  margin-top: 5px;
}
.name3 {
  color: #e0f23f;
  font-size: 20px;
  margin-top: 5px;
}
.name4 {
  color: #f94ce2;
  font-size: 20px;
  margin-top: 5px;
}
.name5 {
  color: #28e3c4;
  font-size: 20px;
  margin-top: 5px;
}
.card-big-font2 {
  font-size: 40px;
  color: #75f94c;
  line-height: 20px;
  padding: 5px 5px 10px;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  text-align: center;
}
.card-big-font3 {
  font-size: 40px;
  color: #e0f23f;
  line-height: 20px;
  padding: 5px 5px 10px;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  text-align: center;
}
.card-big-font4 {
  font-size: 40px;
  color: #f94ce2;
  line-height: 20px;
  padding: 5px 5px 10px;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  text-align: center;
}
.card-big-font5 {
  font-size: 20px;
  color: #28e3c4;
  line-height: 6px;
  /* padding: 5px 5px 10px; */
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  text-align: center;
}
.card-span-color {
  position: absolute;
  right: 15px;
  background-color: #070b1c;
  margin-top: 100px;
}
.today-box {
  width: 150px;
  height: 200px;
  background-color: #070b1c;
  border-color: #6ef0f0;
}
#box {
  position: relative;
  overflow: auto;
  overflow-x: hidden;
  background-color: rgb(16, 31, 63);
  border: 1px solid #178d97;
}

.box-content-border {
  width: 200px;
  height: 150px;
}

.title1 {
  position: absolute;
  z-index: 2;
  margin-left: 5px;
  font-size: 16px;
  color: rgb(49, 224, 240);
}

.angle-border {
  position: absolute;
  width: 8px;
  height: 8px;
}

.left-top-border {
  top: 0;
  left: 0;
  border-top: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
}

.right-top-border {
  top: 0;
  right: -1px;
  border-top: 2px solid #02a6b5;
  border-right: 2px solid #02a6b5;
}

.left-bottom-border {
  bottom: 0;
  left: 0;
  border-bottom: 2px solid #02a6b5;
  border-left: 2px solid #02a6b5;
}

.right-bottom-border {
  right: -1px;
  bottom: 0;
  border-right: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
}
/* 轮播表 */
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
} */

.el-carousel__item:nth-child(1) {
  background-image: url(../assets/yuanyuzhou.png);
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.el-carousel__item:nth-child(2) {
  background-image: url(../assets/robot.png);
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.el-carousel__item:nth-child(3) {
  background-image: url(../assets/robotandhuman.png);
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>