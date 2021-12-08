import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import installElementPlus from './plugins/element'
import dataV from '../node_modules/@jiaminghi/data-view'
import * as echarts from 'echarts'
import axios from 'axios'
import vue3SeamlessScroll from "vue3-seamless-scroll";
  
const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).use(dataV).use(vue3SeamlessScroll).mount('#app')
app.config.globalProperties.$echarts = echarts
Vue.prototype.$http = axios
