import Vue from 'vue'
import VueRouter from 'vue-router'
import getDriveCard from '../views/getDriveCard.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: getDriveCard
  },
  {
    path: '/driveCardInput',
    component: () => import('../views/driveCardInput.vue')
  },
  {
    path: '/violationsList',
    component: () => import('../views/violationsList.vue')
  },
  {
    path: '/home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/order',
    component: () => import('../views/order.vue')
  },
  {
    path: '/connectServe',
    component: () => import('../views/connectServe.vue')
  },
  {
    path: '/wxLogin',
    component: () => import('../views/wxLogin.vue')
  },
  {
    path: '/person',
    component: () => import('../views/personalCenter.vue')
  },
  {
    path: '/integral',
    component: () => import('../views/integral.vue')
  },
  {
    path: '/getIntegral',
    component: () => import('../views/getIntegral.vue')
  },

  {
    path: '/pay',
    component: () => import('../views/pay.vue')
  },

  {
    path: '/feedback',
    component: () => import('../views/feedback.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
