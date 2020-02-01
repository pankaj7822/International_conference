import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/venue',
    name: 'venue',
    component: () => import('@/components/Venue.vue')
  },
  {
    path: '/registration',
    component: () => import('@/pages/Registration.vue')
  },
  {
    path: '/abstract',
    component: () => import('@/pages/Abstract.vue')
  },
  {
    path: '/programs',
    component: () => import('@/pages/Programs.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
