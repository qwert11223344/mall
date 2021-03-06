import { from } from 'core-js/core/array'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const Category = () => import('views/category/Category.vue');


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/category',
    name:'Category',
    component:Category
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
