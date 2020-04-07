import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const QRCode = require('qrcodejs2');
Vue.prototype.QRCode = QRCode 

const uploader=require('vue-simple-uploader')

Vue.use(uploader)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
