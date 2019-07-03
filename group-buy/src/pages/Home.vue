<template>
	<div class="home">
		<header id="header">
		<div class="header_con">
			<a href="#">
				<span></span>
			</a> 
            <div class="top_tit">快答答题</div>
            <div class="right_div">
            	<a href="#"></a>
            	<div class="news"></div>
            </div>
		</div>
	</header>
		<!--绑定getters传过来的数据-->
		<Swiper :banner="banner" :dataName="'home'"></Swiper>
		<List :list="home" :dataName="'home'"></List>
	</div>
</template>

<script>
	import Swiper from "../components/Swiper"
	import List from "../components/List"
	import {UPDATE_HOME,UPDATE_BANNER} from "../store/types"
//	从getters里面拿数据,要引入mapGetters来自于vuex身上的一个类
//	用computed接收，
//	mapActions是metedos接收,返回都是一个对象
	import {mapGetters} from "vuex";
	export default{
//		data(){
//			return {
//				list:[],
//				banner:[]
//			}
//		},
		components:{
			Swiper,
			List
		},
//		用computed接收mapGetters([getters里面传过来的数据])
		computed:mapGetters(["home","banner"]),
		mounted(){
//			axios({
//				url:"/api/home",
//				params:{_page:1,_limit:13}
//			}).then(
//				(res)=>{
//					this.list = res.data.data;
//					console.log(res)
//				}
//			),
//			1.自定义的名字->到actions里面的键,没有引入types，要给自定义名字加上引号
			this.$store.dispatch(UPDATE_HOME)
			this.$store.dispatch(UPDATE_BANNER)
//			axios({
//				url:"/api/banner",
//				params:{_page:1,_limit:20}
//			}).then(
//				(res)=>{
//					this.banner = res.data.data;
//					console.log(res)
//				}
//			)
		}
	}
</script>
<style>
	#header{ overflow: hidden; text-align: center; width:100%; margin:0 auto;  z-index:99; top:0;}
#header .header_con{width:100%; background:#35353a; max-width:640px; min-width:320px; color:#fff; margin:0 auto; position:relative;
height:0.88rem;font-size:0.32rem;
}
#header .header_con span{float:left; display:block; position:absolute; top:0; left:0; width:0.48rem}
#header .header_con span{ position:absolute; top:0.2rem; left:0.16rem;
    display: inline-block;
	background: url(../assets/images/lk_icon.png) no-repeat;
	background-size: 1.44rem 1.44rem;
	width: 0.48rem;
	height: 0.48rem;
	background-position: 0rem 0rem;	
}

#header .header_con .right_div{ position:absolute; height:0.88rem; top:0; right:0;}
#header .header_con .right_div div i{ display: inline-block; margin-top:0.2rem; margin-right:0.16rem;
	background: url(../assets/images/lk_icon.png) no-repeat;
	background-size: 1.44rem 1.44rem;
	width: 0.48rem;
	height: 0.48rem;
	background-position: -0.96rem 0rem;	}
#header .header_con .right_div div{ position:relative;}
#header .header_con .right_div div em{ position:absolute; top:0.14rem; right:0.14rem;font-family: Arial, Helvetica, sans-serif;
border:1px solid #dd334b;  width:0.26rem; height:0.26rem; text-align:center;  vertical-align:middle; line-height:0.24rem; background:#fff;
color:#dc3048; font-size:0.13rem;
-webkit-border-radius: 50%;	
border-radius: 50%;	
box-sizing: border-box;
-webkit-box-sizing: border-box;
}
.header_con .top_tit{ line-height:0.8rem;}
</style>