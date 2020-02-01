import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/topics',
    name: 'topic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/components/Topics.vue')
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/components/Welcome.vue')
  },
  {
    path: '/iitbhu',
    name: 'welcome',
    component: () => import('@/components/Iitbhu.vue')
  },
  {
    path: '/varanasi',
    name: 'varanasi',
    component: () => import('@/components/Varanasi.vue')
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: () => import('@/components/Dates.vue')
  },
  {
    path: '/advisory',
    name: 'timeline',
    component: () => import('@/components/Advisory.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
