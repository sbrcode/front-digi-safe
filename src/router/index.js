import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import LoginPage from '@/views/LoginPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
      // component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue')
    }
  ]
})
