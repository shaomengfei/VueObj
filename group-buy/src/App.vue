<template>
  <div id="app">
		<div v-show="bLoading" class="loading">
				<img src="./assets/img/loading.gif">
		</div>
    <!--<Swiper></Swiper>
    <List></List>-->
    <!--<Home></Home>-->
    <router-view></router-view>
    <!--<Jifen></Jifen>-->
    <!--<Contact></Contact>-->
    <!--<User></User>-->
    <!--<Detail></Detail>-->
    <Footer v-show="bFoot"></Footer>
  </div>
</template>

<script>
//import Home from "./pages/Home"
//import Jifen from "./pages/Jifen"
//import User from "./pages/User"
//import Contact from "./pages/Contact"

//import Detail from "./pages/Detail"
import Footer from "./components/Footer"
import {mapGetters} from "vuex";
import * as types from "./store/types.js"

export default {
  name: 'app',
  components: {
//  Swiper,
//  List,
//		Home,
//		Jifen,
//			User,
//		Contact,
    Footer,
//  Detail
  },
  watch:{
  	$route:{
  		handler(to){		//深度检测
	  		let path = to.path;
	  		if (/home|jifen|contact|user/.test(path)) {
	  				this.$store.commit(types.VIEW_FOOT,true)
	  		}
  		},
  		immediate:true
  	}
  },
  computed:mapGetters([
  	'bFoot','bLoading'
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.loading img{width:60px;height:60px;position:fixed;left:50%;top:50%;z-index: 999;}
</style>
