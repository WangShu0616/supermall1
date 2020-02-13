import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/Home/Home')
  },
  {
    path: '/fenlei',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ 'views/fenlei/fenlei')
  },
  {
    path: '/profile',
    component: () => import('views/Profile/Profile')
  }, {
    path: '/shopcart',
    component: () => import('views/shopcart/shopcart')
  }, {
    path: '/detail/:iid',
    component: () => import('views/detail/detail')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router


