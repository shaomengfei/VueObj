<template>
	<div class="home">
		<header id="header">
		<div class="header_con">
			<a href="#">
				<span></span>
			</a> 
            <div class="top_tit">快答答题</div>
            <div class="right_div" onclick="document.location.href='message.html';">
            	<a href="#"></a>
            	<div class="news"></div>
            </div>
		</div>
	</header>
		<Swiper :banner="banner"></Swiper>
		<List :list="list"></List>
	</div>
</template>

<script>
	import Swiper from "../components/Swiper"
	import List from "../components/List"
	
	export default{
		data(){
			return {
				list:[],
				banner:[]
			}
		},
		components:{
			Swiper,
			List
		},
		mounted(){
			
		}
	}
</script>
<style>
	#header{ overflow: hidden; text-align: center; width:100%; margin:0 auto;  z-index:99; position:fixed; top:0;}
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
.header_con .top_tit{ line-height:0.88rem;}
</style>