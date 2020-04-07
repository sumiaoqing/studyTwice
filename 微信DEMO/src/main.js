import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import axios from 'axios'

import Home from './components/HelloWorld.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.prototype.$axios=axios

const routes=[
  {
    path:'/home',
    component:Home
  }
]


let router=new VueRouter({
  mode:'hash',
  routes:routes
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
