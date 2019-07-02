import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入全局样式 02
import './assets/css/base.css'

////引入全局样式 02
import './assets/js/font'
//引入路由的配置
import router from './plugins/router.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
