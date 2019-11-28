import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载导入组件
const Home = () => import('../views/home/home.vue')
const Category = () => import('../views/category/category.vue')
const Cart = () => import('../views/cart/cart.vue')
const Profile = () => import('../views/profile/profile.vue')


// 安装插件
Vue.use(VueRouter)

// 创建路由插件
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  }
]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router