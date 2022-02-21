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


// /*需要在前端路由 添加路由守卫  对token登录状态予以判断*/
// // 路由守卫
// router.beforeEach(((to, from, next) => {
//   if(to.path === "/home"||to.path === "/") {
//     next();
//   } else {
//     /*判断交互过程中 token登录状态的记录*/
//     let token = localStorage.getItem('token');
//     if (token === null || token === ''||token===undefined) {
//       /*没有登录状态 表示当前用户未登录 则返回项目登录 首页*/
//       next('/home');
//     } else {
//       /*存在token手令 表示当前用户已登录  访问路径放行*/
//       next();
//     }
//   }
// }))


export default router
