import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Video from '../views/Video.vue'
import First from '../views/First.vue'
import Second from '../views/Second.vue'
import Scroll from '../views/Scroll.vue'
import Third from '../views/Third.vue'
import Team from '../views/Team.vue'
import Index from '../views/Index.vue'
import User from '../views/User.vue'
import Broadcast from '../views/Broadcast.vue'
import Traffic from '../views/Traffic.vue'
import Device from '../views/Device.vue'
import Pie from '../views/Pie.vue'
import Line from '../views/Line.vue'
import Numberitem from '../views/Numberitem.vue'
import Font from '../views/Font.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Video1 from '../views/Video1.vue'
import Video2 from '../views/Video2.vue'
import Numberitem1 from '../views/Numberitem1.vue'
import Numberitem2 from '../views/Numberitem2.vue'
import data from '../views/DATA.vue'

/* 元宇宙 */
import Top from '../views/metaverse/Top.vue'
import Meta from '../views/metaverse/Meta.vue'
import Meta1 from '../views/metaverse/Meta1.vue'
import Woman from '../views/metaverse/Woman.vue'
import Verse from '../views/metaverse/Verse.vue'
import Line1 from '../views/metaverse/Line1.vue'
const routes = [
       /*项目 默认根目录引导 首页*/
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  

  {
    path: '/Video',
    name: 'Video',
    component: () => import(/* webpackChunkName: "about" */ '../views/Video.vue')
  },

  {
    path: '/Broadcast',
    name: 'Broadcast',
    component: () => import(/* webpackChunkName: "about" */ '../views/Broadcast.vue')
  },

  {
    path: '/Traffic',
    name: 'Traffic',
    component: () => import(/* webpackChunkName: "about" */ '../views/Traffic.vue')
  },
  {
    path: '/First',
    name: 'First',
    component: () => import(/* webpackChunkName: "about" */ '../views/First.vue')
  },

  {
    path: '/Second',
    name: 'Second',
    component: () => import(/* webpackChunkName: "about" */ '../views/Second.vue')
  },
  {
    path: '/Third',
    name: 'Third',
    component: () => import(/* webpackChunkName: "about" */ '../views/Third.vue')
  },
  {
    path: '/Team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue')
  },
  {
    path: '/Index',
    name: 'Index',
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue')
  },
  {
    path: '/Scroll',
    name: 'Scroll',
    component: () => import(/* webpackChunkName: "about" */ '../views/Scroll.vue')
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/User',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '/Device',
    name: 'Device',
    component: () => import(/* webpackChunkName: "about" */ '../views/Device.vue')
  },
  {
    path: '/Pie',
    name: 'Pie',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pie.vue')
  },
  {
    path: '/Line',
    name: 'Line',
    component: () => import(/* webpackChunkName: "about" */ '../views/Line.vue')
  },
  {
    path: '/Numberitem',
    name: 'Numberitem',
    component: () => import(/* webpackChunkName: "about" */ '../views/Numberitem.vue')
  },
  
  {
    path: '/Font',
    name: 'Font',
    component: () => import(/* webpackChunkName: "about" */ '../views/Font.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/Video1',
    name: 'Video1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Video1.vue')
  },
  {
    path: '/Video2',
    name: 'Video2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Video2.vue')
  },
  {
    path: '/Numberitem1',
    name: 'Numberitem1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Numberitem1.vue')
  },
  {
    path: '/Numberitem2',
    name: 'Numberitem2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Numberitem2.vue')
  },
  {
    path: '/DATA',
    name: 'DATA',
    component: () => import(/* webpackChunkName: "about" */ '../views/DATA.vue')
  },
  
/* 元宇宙 */
{
  path: '/Top',
  name: 'Top',
  component: () => import(/* webpackChunkName: "about" */ '../views/metaverse/Top.vue')
},
{
  path: '/Meta',
  name: 'Meta',
  component: () => import(/* webpackChunkName: "about" */ '../views/metaverse/Meta.vue')
},
{
  path: '/Meta1',
  name: 'Meta1',
  component: () => import(/* webpackChunkName: "about" */ '../views/metaverse/Meta1.vue')
},
{
  path: '/Woman',
  name: 'Woman',
  component: () => import(/* webpackChunkName: "about" */ '../views/metaverse/Woman.vue')
},
{
  path: '/Verse',
  name: 'Verse',
  component: () => import(/* webpackChunkName: "about" */ '../views/metaverse/Verse.vue')
},
{
  path: '/Line',
  name: 'Line1',
  component: () => import(/* webpackChunkName: "about" */ '../views/metaverse/Line.vue')
},


//404路径访问 错误处理机制
{
    path:'/:pathMatch(.*)',
    redirect:'/404',
},
{
  path:'/404',
  name:'404',
  component:() => import('../views/404.vue')
}
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})




export default router
