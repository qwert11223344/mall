import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const Category = () => import('views/category/Category.vue');
const ShoppingCart = () => import('views/shoppingcart/shoppingcart.vue');
const Profile = () => import('views/profile/Profile.vue');
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
  },
  {
    path:'/shoppingcart',
    name:'ShoppingCart',
    component:ShoppingCart
  },
  {
    path:'/profile',
    name:'Profile',
    component:Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
