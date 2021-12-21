<template>
  <div class="home">
    <el-container>
      <el-header>

         <el-menu :default-active="activeIndex2" router class="el-menu-demo" mode="horizontal" @select="handleSelect"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">     
            <el-menu-item index="1">MARVEL(奇迹实验室)</el-menu-item>
            <el-submenu index="2">
             <template  title ="title">工作台</template>
             <el-menu-item index="2-1">项目简介</el-menu-item>
             <el-menu-item index="2-2">实验室简介</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" >团队介绍</el-menu-item>

            <!-- 直播间处跳转 -->
            <el-menu-item index="4" @click="Jump1"><a href="/Video" target="_blank">直播间1</a></el-menu-item>
            <el-menu-item index="4" @click="Jump2"><a href="/About" target="_blank">直播间2</a></el-menu-item>
          
          <el-row style="float: right;height:60px;padding-top:10px">
          <el-autocomplete v-model="hospitalName.hospitalName" placeholder="请输入搜索内容" label-name="标题名称" :fetch-suggestions="querySearch" @select="handleSelect"></el-autocomplete> 
          <el-button type="primary" plain >登录</el-button>
          <el-button type="success" plain @click="Jump3" href="/First">注册</el-button>
          <!-- <el-button type="success" plain @click="Jump3" ><a href="/First" style="color:#fff;">注册</a></el-button> -->
          </el-row>
        </el-menu>

      </el-header>
      
      <el-main>
        <el-carousel :interval="5000" arrow="nerver" height="500px">
        <el-carousel-item >
          <div class="carousel-1">
            <img src="../assets/logo.png" alt height="10px" style=" width:100px; height:70px; margin-top:110px;" >
            <h1 class="name1">MARVEL「奇迹实验室」</h1>
            <h2 class="name2">
              Mulitimedia and AI Research for Visual Transmission Exploratory Laboratory
            </h2>
            <h3 class="medium">{{ item }}</h3>
            <h4 class="name3">
            <el-link href="https://www.labxing.com/university/42" :underline="true" style="color:#fff; font-size: 15px;">中国科学院</el-link>
            <span class="p">/</span>
            <el-link :underline="true"  href="https://www.labxing.com/university/42/395" target="_blank" style="color:#fff; font-size: 15px;">计算技术研究所</el-link>
            </h4>
          </div>
        </el-carousel-item>
  
        <el-carousel-item>
          <div class="carousel-2">
            <img src="../assets/logo.png" alt height="10px" style=" width:100px; height:70px; margin-top:110px;" >
            <h1 class="name1">团队简介</h1>
            <h2 class="name2">
              There are 6 doctoral students and 5 postgraduates in our team
            </h2>
            <h3 class="medium">{{ item }}</h3>
           <h4 class="name3">
            <el-link href="https://www.labxing.com/university/42" :underline="true" style="color:#fff; font-size: 15px;">中国科学院</el-link>
            <span class="p">/</span>
            <el-link :underline="true"  href="https://www.labxing.com/university/42/395" target="_blank" style="color:#fff; font-size: 15px;">计算技术研究所</el-link>
            </h4>
          </div>
        </el-carousel-item>
    
        <el-carousel-item>
          <div class="carousel-3">
            <h1 class="name1"></h1>
            <h2 class="name3"></h2>
            <h3 class="medium">{{ item }}</h3>
 
          </div>
        </el-carousel-item>
       </el-carousel>
       

       <!-- 关于我们 about us -->
        <el-card class="box-card" width="100%">
          <div class="demo-image__placeholder">
            <div class="block">
              <el-image 
                  class="photo"
                  :fit="fit" 
                  :src="src" 
                  style="width: 650px; height: 450px;float: left; width:54%;margin-right:30px;">
                  <template #placeholder>
                    <div class="image-slot">Loading<span class="dot">...</span></div>
                  </template>
                  
                </el-image>
                <h1><a href="#" float="right" width="45%"  style="font-family:Raleway; font-size:30px; text-decoration:none; color:#5c768d; ">About Us</a></h1> 
                <h2 style="font-family:Raleway; font-size:20px;text-color:#5c768d; "> 奇迹实验室（MARVEL）</h2><br> 
                <h4 class="name6" style="margin-top:-30px; margin-top:-55px; padding-left:500px; text-align:left;"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 隶属于中国科学院计算技术研究所泛在计算系统研究中心，专注于智能多媒体传输与计算领域的研究。研究团队主要围绕智能多媒体发展下的多媒体计算传输、混合智能、媒体经济学、信息论、优化理论等方向开展探索与创新。实验室面向国家重大需求，开展多媒体计算传输领域前沿探索研究。近期重点开展面向机器世界的计算、视觉物联网等应用场景下的原创性的理论和技术方法、关键技术原型产品研发。团队致力于将基础理论研究与工程实践紧密结合，弥合理论和实践的技术鸿沟，成为具有国际影响力的研究团队。
                </h4>
                <a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
            </div>
          </div>
          
        </el-card>
       <!-- end 关于我们 about us -->
       <!-- 研究目录 -->
       <div class="study" style="margin-top:50px;">
          <h1><a href="#" float="right" width="45%"  style="font-family:Raleway; font-size:35px;line-height:100px;text-decoration:none; color:#5c768d; ">Research Project</a></h1> 
          <h2 style="margin:-10px 30px ;font-family:Raleway; font-size:18px;text-color:#5c768d; "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室具有良好的实验条件和设备基础，拥有多种工业级摄像头终端设备、边缘计算设备、高性能服务器、Kinect3D体感摄影头、大容量网络仿真仪等。团队先后承担国家重点研发计划“众智科学基本原理及其进化”课题，国家自然科学基金“基于超图谱理论的复杂环境视频弹性传输方法研究”、“基于对偶原理的异构环境视频传输研究”、“分布式视频编码的关键技术研究”等在内的多个国家级课题。通过这些项目的深入研究，在智能多媒体、视频计算传输、端边云计算系统、混合智能、媒体经济学、系统优化等方面取得丰富的成果，在IEEE/ACM Trans.等顶级国际期刊和领域顶级会议发表学术论文80余篇，研究成果荣获2015年2016年“北京市科学技术奖”二等奖、2016年“中国专利优秀奖”、2017年“中国计算机学会科学技术奖”技术发明奖一等奖等奖励。</h2><br> 
            <el-table :data="tableData.filter((data) =>!search || data.name.toLowerCase().includes(search.toLowerCase()))" height="300" stripe style="width: 90% ;margin:-20px 60px;">
            <el-table-column prop="date" label="Date" width="250" />
            <el-table-column prop="name" label="Research contents" width="450" />
            <el-table-column prop="quantity" label="Relevant research results" />
            <el-table-column align="right">
              <template #header>
                <el-input v-model="search" size="mini" placeholder="Type to search" />
              </template>
              <template #default="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
                >Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>

            
          </el-table>
       </div>
       <!-- end 研究目录 -->
       <!-- our team -->
                
          <div class="team" style="background-color: #E9EEF3;margin-top:100px;">
          <h1><a href="#" float="right" width="45%"  style="font-family:Raleway; font-size:35px;line-height:100px;text-decoration:none; color:#5c768d; ">Our Team</a></h1> 
          <h2 style="margin-top:-10px;font-family:Raleway; font-size:20px;text-color:#5c768d; "> Mulitimedia and AI Research for Visual Transmission Exploratory Laboratory</h2><br> 
          
           <div><Team style="padding: 0px 10px;margin-top:-20px;" /></div>
      
          </div> 
          <p class="name4" style="margin-top:40px">**长期招聘博士后、优秀实习生，从事多媒体传输、边缘计算、机器智能等相关方向，欢迎联系**</p>
       <!-- end our team -->
       
      </el-main>
      <!-- 底部 -->
    
       <el-footer>
           

          <!-- 底部标志 -->
             <div class="footer-top" >
            <div class="container">
                <div class="row">

                 <div class="col-lg-3 col-md-6 footer-info">
                  <h3>@ MARVEL</h3>
                
            
          </div>

        </div>
      </div>
    </div>
      </el-footer>
      <!-- end底部 -->
    </el-container>
  </div>
</template>

<style>
  .el-header {
    background-color: #505d6d;
    color: #333;
    text-align: center;
    line-height: 0px;
    overflow: hidden;

  }
.el-footer{
    background-color: #505d6d;
    color: #333;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #fff;
    padding: 0 20px;
    height: 300px;

}


.p{
  color: #fff;
}

.el-button{
      height:30px;
      width:80px;
      text-align: center;
      padding: 0px;
  }

.el-button--primary.is-plain {
    color: var(--el-button-background-color);
    background-color: #ecf5ff;
    border-color: #b3d8ff;
    margin-bottom: 10px;
}
.el-button--success.is-plain {
    color: var(--el-button-background-color);
    background-color: #f0f9eb;
    border-color: #c2e7b0;
    margin-bottom: 10px;
}
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 150px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 50px;
    padding:0px;
    
  }
  .name1{
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 25px;
    color: rgb(250, 249, 252);
    margin-top: -10px;
  }
  .name2{
    font-family: kaiti;
    font-size: 18px;
    color: rgb(250, 250, 250);
    margin-top: -10px;
  }
  .name3{
    font-family: kaiti;
    font-size: 9px;
    margin-top:0px;
    color: rgb(145, 138, 138);
  }
  .name6{
    font-family: fangsong;
    font-size: 16px;
    color: rgb(83, 78, 78);
    margin-top: -10px;
    line-height: 28px;
  }
/* 轮播图 */
  .carousel-1{
    background-image: linear-gradient(to bottom, rgba(78, 80, 87, 0.301), rgba(21, 21, 36, 0.425)),
    url(../assets/所楼.png);
    height:100%;
    background-size:100% 540px;
    background-repeat:no-repeat;
  }
  .carousel-2{
    background-image: linear-gradient(to bottom, rgba(75, 77, 83, 0.445), rgba(57, 57, 66, 0.5)),
    url(../assets/实验室成员.png);
    height:100%;
    background-size:100% 540px;
    background-repeat:no-repeat;
    
  }
  .carousel-3{
    background-image: linear-gradient(to bottom, rgba(75, 77, 83, 0.445), rgba(57, 57, 66, 0.5)),
    url(../assets/石头上.png);
    height:100%;
    background-size:100% 600px;
    background-repeat:no-repeat;
    
  }
  /* end轮播图 */
  .el-menu{
    margin-top:100px;
  }
  .el-autocomplete{
   
    color: #333;
    text-align: center;
    line-height: 30px;
    margin-right: 10px;

  }

  
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 12px;
    opacity: 0.75;
    line-height: 1000px;
    margin: 100;
   
  }
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
.img {
  width: 24%;
  margin: 0 4% 20px 0;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
} 

 /* 关于我们  */
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 1230px;
  height: 550px;
  margin: 50px 200px 20px 80px;
}
.btn-get-started {
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    letter-spacing: 1px;
    display: inline-block;
    padding: 12px 32px;
    border-radius: 5px;
    transition: 0.5s;
    line-height: 1;
    margin: 35px 20px 10px 340px;
    color: #fff;
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
    border: 0;
    background: #6ca6d9;
}

 /* end 关于我们  */

 /* our team */
.photo{
  height:300px;
  width: 380px;
  margin-bottom: 1px;
}
.parent{
  position: relative;
  width:100px;
}
.son1{
  position:relative;
  left: 20px;
  width:300px;
  height:300px;
  z-index:5;
  text-align: center;
  
}
.son2{
  width:230px;
  height:140px;
  padding:15px;
  position:absolute;
  left:50px; 
  top:225px; 
  z-index:10;     
  font-family:fangsong; 
  font-size:15px; 
  background: linear-gradient(360deg, #9ca9b4 0%, rgba(101, 113, 124, 0.9) 35%, rgba(140, 167, 191, 0.8) 100%);
  border-radius: 15px;
  line-height:2;
  color: rgb(54, 48, 48);
  text-align: center;


}



 /* end our team */
 /* 研究 */

/*end 研究 */

</style>

<script>
import { Edit, View as IconView } from '@element-plus/icons'
import { Calendar } from '@element-plus/icons'
import { defineComponent, ref } from 'vue'
import { InfoFilled } from '@element-plus/icons-vue'
import Team from "./Team.vue";
export default {
  components: {
    //  'Demo':First  ////将别名First 变成 组件 Demo
    Team,
  },
  data() {
    const src = ref(
      'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    )
  return {
    getHospitalData: [],// 根据输入值  查询到的结果 
    hospitalName: { hospitalName: "", keyID: "" },    // 输入框绑定的数据 
    remindData: [],// 存放提醒框的数据
    currentDate:[],
    size: ['mini'],
    fits: ['cover'],
    url1: ['https://obohe.com/i/2021/11/07/nf2bxv.png'],
    url2: ['https://obohe.com/i/2021/11/07/ner1mx.png'],
    url3: ['https://obohe.com/i/2021/11/07/nep2ra.png'],
    url4: ['https://obohe.com/i/2021/11/07/nenjbj.png'],
    src,
    tableData: [
        {
          date: '2019-2020',
          name: '面向机器世界的智能、计算、编码及传输系统研究',
          quantity: '3',

        },
        {
          date: '2020',
          name: '复杂环境视频敏捷传输方法研究',
          quantity: '2',
        },
        {
          date: '2020',
          name: '边缘智能驱动下的万物互联网研究',
          quantity: '3',
        },
        {
          date: '2019-2020',
          name: '大规模端边云复杂计算传输系统研究',
          quantity: '5',
        },
        {
          date: '2019-2020',
          name: '视觉物联网人机物协同智能计算研究',
          quantity: '3',
        },
        {
          date: '2015-2021',
          name: '富媒体传输经济学优化方法研究',
          quantity: '5',
        },
        {
          date: '2015-2021',
          name: '多媒体计算传输先进优化方法',
          quantity: '5',
        }, 
        {
          date: '2012.04',
          name: '视频联合信源信道编码及传输技术研究',
          quantity: '1',
        }, 
        {
          date: '2014-2017',
          name: '分布式视频编解码技术研究',
          quantity: '2',
        }, 
        {
          date: '2021',
          name: '群体智能/众智科学计算及方法研究',
          quantity: '1',
        }, 
      ],
      search: '',
    
  }


},


//一定要加s，要不然识别不了跳转方法
methods: {
  querySearch(queryString, cb) { 
    if (this.hospitalName.hospitalName !== "") { 
      this.remindData = []; 
      let params = { name: this.hospitalName.hospitalName }; 
      this.$_http.get(this.$_API.INTERFACE_SHARE_HOSPITAL_NAME, { params }).then(res => { 
        this.getHospitalData = res.data; 
        this.getHospitalData.forEach((item) => { 
          let obj = { value: "", keyID: "" }; 
          obj.value = item.orgName; 
          obj.keyID = item.keyID; 
          this.remindData.push(obj); 
        }); 
        let nameTipsArray = this.remindData; 
        cb(nameTipsArray); 
      }); 
    } 
  },
  /* 跳转界面*/ 
  Jump1:function(){
    this.$router.push({path:'/Video'})
  },
  Jump2:function(){
    this.$router.push({path:'/About'})
  },
  Jump3:function(){
    console.log(11111)
    this.$router.push({path:'/First'})
  },

 /* end跳转界面*/
  handleEdit(index, row) {
      console.log(index, row)
    },
  handleDelete(index, row) {
      console.log(index, row)
    },
  handleSelect(item) {
    console.log(item);
    this.hospitalName.hospitalName = item.value;
    this.hospitalName.keyID = item.keyID;
  }
},
}
</script>
