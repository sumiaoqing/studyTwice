import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Hello = () => import(/* webpackChunkName: "hello" */ '@/components/HelloWorld.vue')

const routes:any = [
{
  name:'hello',
  path:'/hello',
  component:Hello
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
