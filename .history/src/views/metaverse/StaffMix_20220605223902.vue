<!--
 描述: 人员占比
-->

<template>
  <div class="wrap-container sn-container"> 
    <div class="sn-content"> 
      <el-row type="flex" justify="center" :span="24">
         <el-col :span="24">
             <h3 class="title">人员占比</h3> 
         </el-col>
      </el-row>
      <el-row type="flex" justify="center" :span="24">
         <el-col :span="24">
             <h3 class="title">人员占比</h3> 
         </el-col>
      </el-row>
     
      
    </div>   
  </div>
</template>

<script>
export default {
  name: "staffMix",
  data() {
    return {
      arrData: [{
        name: '前端工程师',
        number: 3
      },{
        name: '后端工程师',
        number: 5
      },{
        name: '网页设计师',
        number: 2
      },{
        name: '测试工程师',
        number: 2
      },{
        name: '产品经理',
        number: 1
      },{
        name: '安卓工程师',
        number: 1
      },{
        name: 'IOS工程师',
        number: 1
      }]
      
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
  beforeDestroy() {
    
  }
};
</script>

<style lang="scss" scoped>
.sn-container {
  width: 100%;
  height: 35vh;

  .person{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    .pers{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-repeat: no-repeat;
      background-position: center center;
      &.person1{
        background-image: url(~@/assets/image/online.png);
        transform: rotateX(64deg) rotateZ(0deg);
        top: 16%;
      }
      &.person2{
        background-image: url(~@/assets/image/cir-2.png);
        animation: move 10s linear infinite;
        -webkit-animation: move 10s linear infinite;
        transform: rotateX(64deg);
        top: 16%;
      }
      &.person3{
        background-image: url(~@/assets/image/person-1.png);
        top: 5%;
      }
    }
  }

  .svgs{
    width: 270px;
    height: 260px;
    margin: auto;
    top: 0;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .text{
    position: absolute;
    width: 57px;
    height: 57px;
    background-image: url(~@/assets/image/cir-1.png);
    background-repeat: no-repeat;
    background-position: center center;
    color: rgb(235, 247, 252);
    text-align: center;
    span {
      &:nth-child(1) {
        display: block;
        width: 60px;
        margin-top: 10px;
        line-height: 20px;
        font-size: 16px;
        transform: scale(0.85);
        height: 22px;
      }
      &:nth-child(2) {
        font-size: 18px;
        font-weight: bold;
      }
    }
    &.per1{
      top: 215px;
      left: 50px;
    }
    &.per2{
      top: 113px;
      left: 3px;
    }
    &.per3{
      top: 45px;
      left: 35px;
    }
    &.per4{
      left: 120px;
    }
    &.per5{
      top: 45px;
      left: 190px;
    }
    &.per6{
      top: 105px;
      left: 210px;
    }
    &.per7{
      top: 215px;
      left: 180px;
    }
  }

}

@-webkit-keyframes move {
  0%  {
    transform: rotateX(-64deg) rotateZ(360deg);
  }
  100%  {
    transform: rotateX(-64deg) rotateZ(0deg);
  }
}
@keyframes move {
  0% {
    transform: rotateX(-64deg) rotateZ(360deg);
  }
  100% {
    transform: rotateX(-64deg) rotateZ(0deg);
  }
}

.title{
    font-size:25px;
    font-family: "微软雅黑";
    color:rgb(252, 253, 253)(20, 248, 218);
    line-height: 1.3;
    margin-top:40px;
    display: flex;
    justify-content:center;
}
</style>