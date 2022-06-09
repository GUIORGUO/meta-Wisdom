import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import installElementPlus from './plugins/element'
// import dataV from '../node_modules/@jiaminghi/data-view'
import dataV from './node_modules/@jiaminghi/data-view'
// import dataV from '../node_modules/@jiaminghi/data-view'
import * as echarts from 'echarts'
import axios from 'axios'
import Vuelidate from 'vuelidate'
// import axios from './axios/config'    
// import QS from 'qs'
import vue3SeamlessScroll from "vue3-seamless-scroll"
import Vue from 'vue'
import VueAnimateNumber from '../node_modules/vue-animate-number'



const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).use(dataV).use(vue3SeamlessScroll).use(Vuelidate).use(VueAnimateNumber).mount('#app')
app.config.globalProperties.$echarts = echarts
app.config.globalProperties.$axios = axios   //普通app.use无法处理，必须使用赋值方式进行装载原型链添加方法
  