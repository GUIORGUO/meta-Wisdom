<template>
 <div class="chartNum">
    <h3 class="orderTitle">访问量</h3>
    <div class="box-item">
     <li :class="{'number-item': !isNaN(item), 'mark-item': isNaN(item) }"
      v-for="(item,index) in orderNum"
      :key="index">
       <span v-if="!isNaN(item)">
        <i ref="numberItem" id="Number">0123456789</i>
       </span>
      <span class="comma" v-else>{{item}}</span>
     </li>
    </div>
   </div>
</template>
<script>
 export default {
  data() {
   return {
    orderNum: ['0',',','0', '0', '0'], // 默认订单总数
   }
  },
  mounted() {
    this.toOrderNum(9100) // 这里输入数字即可调用
    this.setNumberTransform()
    this.increaseNumber()
  },
  methods: {
    // 定时增长数字
    increaseNumber () {
      let self = this
      this.timer = setInterval(() => {
      self.newNumber = self.newNumber + 1
      self.setNumberTransform()
      }, 9000)
    },
    // 设置每一位数字的偏移
   setNumberTransform () {
      const numberItems = this.$refs.numberItem // 拿到数字的ref，计算元素数量
      const numberArr = this.orderNum.filter(item => !isNaN(item))
      // 结合CSS 对数字字符进行滚动,显示订单数量
      for (let index = 0; index < numberItems.length; index++) {
      const elem = numberItems[index]
      elem.style.transform = `translate(-10%, -${numberArr[index] * 10}%)`
      const count = 0
      count++
      }
   },
   // 处理循环次数
   toOrderNum(num) {
     
        num = num.toString()
        // 把订单数变成字符串
        if (num.length < 4) {
        num = '0' + num // 如未满4位数，添加"0"补位
        this.toOrderNum(num) // 递归添加"0"补位
        for(let j=1;j<=100;j++){
            numberItem[0].increaseNumber()
            if(j%10 === 0){
               numberItem[1].increaseNumber()
            }else if(j%100 === 0){
               numberItem[2].increaseNumber()
            }
          }
        } else if (num.length === 4) {
        // 订单数中加入逗号
        num = num.slice(0, 1) + ',' + num.slice(1, 3)
        this.orderNum = num.split('') // 将其便变成数据，渲染至滚动数组
        } else {
        // 订单总量数字超过4位显示异常
        this.$message.warning('数字过大，显示异常，请联系客服')
        }
    },
  // toOrderNum(num) {
  //   num = num.toString()
  //   // 把订单数变成字符串
  //   if (num.length < 3) {
  //     for(let i=1;i<=99;i++){

  //     }

  //   }.
   }

 }
</script>
<style scoped lang='scss'>
  /*订单总量滚动数字设置*/
 .box-item {
  display: inline-block;
  position: relative;
  height: 100px;
  font-size: 54px;
  line-height: 41px;
  text-align: center;
  list-style: none;
  color: #2D7CFF;
  background: url(https://img.jbzj.com/file_images/article/201911/2019112909090958.png) no-repeat center center;
  background-size: 100% 100%;
  writing-mode: vertical-lr;
  text-orientation: upright;
  /*文字禁止编辑*/
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
  /* overflow: hidden; */
 }
 /* 默认逗号设置 */
 .mark-item {
  width: 10px;
  height: 100px;
  margin-right: 5px;
  line-height: 10px;
  font-size: 48px;
  position: relative;
  & > span {
   position: absolute;
   width: 100%;
   bottom: 0;
   writing-mode: vertical-rl;
   text-orientation: upright;
  }
 }
 /*滚动数字设置*/
 .number-item {
  width: 41px;
  height: 75px;
  color: aqua;
  background: #ccc;
  list-style: none;
  margin-right: 5px;
  background-image: url("https://img.jbzj.com/file_images/article/201911/2019112909090958.png");
  border-radius:4px;
  border:1px solid rgba(221,221,221,1);
  & > span {
   position: relative;
   display: inline-block;
   margin-right: 10px;
   width: 100%;
   height: 100%;
   writing-mode: vertical-rl;
   text-orientation: upright;
   overflow: hidden;
   & > i {
    font-style: normal;
    position: absolute;
    top: 11px;
    left: 50%;
    transform: translate(-10%,0);
    transition: transform 2s ease-in-out;
    letter-spacing: 10px;
   }
  }
 }
 .number-item:last-child {
  margin-right: 0;
 }
</style>