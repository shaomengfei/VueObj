import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);

//import 会静态编译(不是边解析边编译的，一次性全部加载，首屏压力大，会造成命名空间的错乱)  require 动态编译（使用时才编译，）
import Home from '../pages/Home.vue'
import Jifen from '../pages/Jifen.vue'
import Contact from '../pages/Contact.vue'
import User from '../pages/User.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Detail from '../pages/Detail.vue'

//import Shop from '../pages/Shop.vue'

//import ErrorPage from '../components/ErrorPage.vue'


let routes = [
	{path:"/home",component:Home},
	{path:"/jifen",component:Jifen},
	{path:'/user',component:User},
	{path:'/contact',component:Contact},
	{path:'/reg',component:Reg},
	{path:'/login',component:Login},
	{path:'/detail',component:Detail},
	{path:'/',redirect:'/home'},
	
//	{path:'*',component:ErrorPage}
//	{path:'/shop',component:Follow},
//	{path:'/sort',component:Column},
//	{path:'/login',component:Login},
//	{path:'/reg',component:Reg},
//	{path:'/detail/:aid',name:'detail',component:Detail},
]

let router = new VueRouter({
	"routes":routes
	
})

export default router;


