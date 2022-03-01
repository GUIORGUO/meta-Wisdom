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
import Device from '../views/Device.vue'
import Pie from '../views/Pie.vue'
import Line from '../views/Line.vue'

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
