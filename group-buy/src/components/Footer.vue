<template>
	<div class="bottom_box">
		
    	<router-link class="tab_bar index-off"  tag="div" active-class="index" id="index" to="/home">
    		<!--<img src="../assets/img/index_on.png">-->
    		<p >首页</p>
    	</router-link>
    	<router-link class="tab_bar jf-off" tag="div" active-class="jf" id="jf" to="/jifen">
    		<!--<img src="../assets/img/jifen.png">-->
    		<p>积分</p>
    	</router-link>
    	<router-link class="tab_bar call-off"  tag="div" active-class="call" id="call" to="/contact">
    		<!--<img src="../assets/img/call.png">-->
    		<p>联系我们</p>
    	</router-link>
    	<router-link class="tab_bar my-off"  tag="div" active-class="my" id="my" to="/user">
    		<!--<img src="../assets/img/my.png">-->
    		<p>我的</p>
    	</router-link>
    </div>
</template>

<script>
</script>

<style>
.bottom_box{
	width: 100%;
	height: 0.9rem;
	position: fixed;
	bottom: 0px;
	border-top: 1px solid #E7E7E7;
	display: flex;
	background: #FFFFFF;
	z-index: 99;
}

.tab_bar{
	flex: 1;
	text-align: center;
}

.tab_bar img{
	width: 0.4rem;
	height: 0.4rem;
	margin-top: 0.1rem;
}


.index-off{background: url(../assets/img/index.png) no-repeat 38px 28px;}
.jf-off{background: url(../assets/img/jifen.png) no-repeat 35px 28px;}
.call-off{background: url(../assets/img/call.png) no-repeat 35px 28px;}
.my-off{background: url(../assets/img/my.png)no-repeat 35px 28px;}


.index{background:url(../assets/img/index_on.png) no-repeat 38px 28px;}
.jf{background: url(../assets/img/jifen_on.png) no-repeat 35px 28px;}
.call{background: url(../assets/img/call_on.png) no-repeat 35px 28px;}
.my{background: url(../assets/img/my_on.png) no-repeat 35px 28px;}


.tab_bar p{
	color: #323232;
	font-size: 0.21rem;
	margin-top: 0.08rem;
}
#index img{height: 0.38rem;width: 0.38rem;margin-top: 0.11rem;}
#jf img{height: 0.34rem;width: 0.43rem;margin-top: 0.13rem;}
#call img{height: 0.36rem;margin-top: 0.12rem;}
#my img{height: 0.38rem;width: 0.38rem;margin-top: 0.11rem;}
</style>