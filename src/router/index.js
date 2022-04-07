import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "Formulir pendataan bansos",
    },
    component: () => import('../views/Form.vue')
  },
  {
    path: '/info',
    name: 'Info',
    meta: {
      title: "Info",
    },
    props: true,
    component: () => import('../views/Info.vue')
  },
  { 
    path: '*', 
    redirect: '/' 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router