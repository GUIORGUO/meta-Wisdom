<template>
    <div id="index">
        <el-button type="primary" plain @click="getData" class="axiosbutton">获取数据</el-button> 
    </div>
</template>
<script>
import * as echarts from 'echarts'
import axios from 'axios'  

export default {
    data(){
        return{
            content:'hello world'
        }
    },
    methods:{
        getData(){
            axios.get("http://autumnfish.cn/api/joke/list?num=3")//里面填'/api' vue.config.js中的请求路径关键字
            .then(res=>{
                console.log(res)
            })
        }

    },
}
  // getApi(){
  //   this.$http.get("url")//get/post请求区别：get直接从后台获取数据，参数是写在地址上的，参数写在url中  post中请求放在参数里面
  //   //请求成功函数
  //  .then((res)=>{   //箭头函数 res是请求过来的数据 

  //   })
  //   //请求失败函数  
  //   .catch((err)=>{  //err是抛出来的异常

  //   })
  // },
</script>