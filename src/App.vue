<template>

<div id="app" ref="app">
  <!-- 路由跳转 -->
    
  <router-view> </router-view>
</div>

</template>

<style>

 body{            
   margin: 0;
   height: 100%;
   width: 100%;
 }

</style>

// <script>
// import _ from "lodash";
// export default {
//   name: "App",
//   data(){
//     return{

//     }
//   },
//   mounted() {
//     this.$nextTick(() => {
//       const $app = this.$refs.app;
//       // 设置 屏幕 百分比 尺寸 适配
//       const standardScale = "100%" / "100%";

//       window.addEventListener(
//         "resize",
//         _.debounce(function () {
//           const docHeight = document.body.clientHeight;
//           const docWidth = document.body.clientWidth;

//           if (docWidth < 1680) {
//             const currentScale = docHeight / docWidth;
//             let [scale, translate] = [0, 0];
//             if (currentScale < standardScale) {
//               // 以高度计算
//               scale = docHeight / 1080;
//               const shouleWidth = 1920 * scale;
         
//               const offsetWidth = docWidth - shouleWidth;
//               translate =
//                 offsetWidth > 0 ? `translate(${offsetWidth / 2}px, 0)` : "";
//             } else {
//               // 以宽度计算
//               scale = docWidth / 1920;
//               const shouleHeight = 1080 * scale;
//               const offsetHeight = docHeight - shouleHeight;
//               translate =
//                 offsetHeight > 0 ? `translate(0, ${offsetHeight / 2}px)` : "";
//             }
//             console.log(translate);
//             $app.style.cssText = `
//             transform: scale(${scale}) ${translate};
//             transform-origin: top left;
//             min-width: 1920px;
//             min-height: 1080px;
//           `;
//           } else {
//             $app.style.cssText = "";
//           }
//         }),
//         300
//       );

//       if (document.createEvent) {
//         var event = document.createEvent("HTMLEvents");
//         event.initEvent("resize", true, true);
//         window.dispatchEvent(event);
//       } else if (document.createEventObject) {
//         window.fireEvent("onresize");
//       }
//     });
//   },
// };
// </script>

