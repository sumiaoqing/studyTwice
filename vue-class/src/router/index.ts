import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path:'/home',
    name:'home',
    component:()=>import(/* webpackChunkName: "home" */ '@/components/Screen-Home/screen-home.vue'),
    children:[{path:'yaoji',name:'yaoji',
    component:()=>import(/* webpackChunkName: "yaoji" */ '@/components/Screen-Home/yaoji.vue'),
  },{path:'moling',name:'moling',
  component:()=>import(/* webpackChunkName: "moling" */ '@/components/Screen-Home/moling.vue'),
}]
  },
  {
    path:'/helloworld',
    name:'helloworld',
    component:()=>import(/* webpackChunkName: "helloworld" */ '@/components/HelloWorld.vue'),
  }
  ,
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
