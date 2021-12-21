import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Video from '../views/Video.vue'
import First from '../views/First.vue'
import Second from '../views/Second.vue'
import Scroll from '../views/Scroll.vue'
import Third from '../views/Third.vue'
import Team from '../views/Team.vue'

const routes = [
   
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
