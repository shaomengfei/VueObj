import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入全局样式 02
import './assets/css/base.css'

////引入全局样式 02
import './assets/js/font'

//引入路由的配置
import router from './plugins/router.js'

//引入axios插件对象
import axios from './plugins/axios.js';

//配置前端baseUrl
Vue.prototype.baseUrl = require('../config/config').active

//引入动画
import 'animate.css';

////引入状态管理
import store from './plugins/store.js'
new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
