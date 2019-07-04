<template>

	<div id="header">
		<div class="header_con">
			<!--<a href="#" class="back">
				<span></span>
			</a> -->
            <div class="top_tit">积分</div>
		</div>
		<!------->
		<div class="top_btn">
			<div class="left_btn">
				<button type="button" onclick="document.location.href='obtain-title1.html';">积分<br>获得</button>
				<button type="button" onclick="document.location.href='obtain-title.html';">称号<br>获得</button>
			</div>
			<div class="right_btn" onclick="document.location.href='mouthly.html';">
				<button type="button">每月明细</button>
			</div>
		</div>
		<!------->
		<div class="zs_cord">
			<ul>
				<li>
					<div class="pm_span">
						<p class="title"> 排名</p>
						<p> 300</p>
					</div>
				</li>
				<li>
					<div class="zf_span">
						<p>总分<br>300</p>
					</div>
				</li>
				<li>
					<div class="yq_span">
						<p class="title">邀请人数</p>
						<p>30</p>
					</div>
				</li>
			</ul>
		</div>
		<!-------->
		<div class="bq_box">
			<p>根据综合评分，小主拥有以下称呼：</p>
			<div class="bq_blank">
				<ul>
					<li>
						<img src="../assets/img/fx_icon.png" alt="">
						<p>分享狂魔</p>
					</li>
					<li>
						<img src="../assets/img/wj_icon.png" alt="">
						<p>分享狂魔</p>
					</li>
					<li>
						<img src="../assets/img/qd_icon.png" alt="">
						<p>分享狂魔</p>
					</li>
					<li>
						<img src="../assets/img/qd_icon.png" alt="">
						<p>分享狂魔
						</p>
					</li>
					<li>
						<img src="../assets/img/qd_icon.png" alt="">
						<p>分享狂魔</p>
					</li>
					<li>
						<img src="../assets/img/qd_icon.png" alt="">
						<p>分享狂魔</p>
					</li>
				</ul>
			</div>
			<div class="bq_blue">
				<div class="acq_money">
					<ul>
						<li>获得现金总额</li>
						<li><em>￥30</em></li>
					</ul>
				</div>
				<div class="acq_jp">
					<ul>
						<li>获得月奖品</li>
						<li style="width: 3.4rem;">
							<div class="jp_lan">
								<p>收到oppoR9R9</p>
								<p>xxxxxxxx</p>
								<p>xxxxxxxx</p>
								
							</div>
							<div class="jp_lan">
								
								<p>xxxxxxxx</p>
								<p>xxxxxxxx</p>
								<p>xxxxxxxx</p>
							</div>
						</li>
					</ul>	
				</div>
			</div>
		
		<!---------->
		
	</div>	
		<!--<div class="bottom_box">
            	<div class="tab_bar" id="index" onclick="document.location.href='index.html';">
            		<img src="../assets/img/index.png">
            		<p>首页</p>
            	</div>
            	<div class="tab_bar" id="jf" onclick="document.location.href='integral.html';">
            		<img src="../assets/img/jifen_on.png">
            		<p style="color: #5496F9;">积分</p>
            	</div>
            	<div class="tab_bar" id="call" onclick="document.location.href='personal-callme.html';">
            		<img src="../assets/img/call.png">
            		<p>联系我们</p>
            	</div>
            	<div class="tab_bar" id="my" onclick="document.location.href='personal-center.html';">
            		<img src="../assets/img/my.png">
            		<p>我的</p>
            	</div>
            </div>-->
	</div>
</template>

<script>
</script>

<style>
#header{ text-align: center; width:100%; margin:0 auto;  z-index:99;}
#header .header_con{width:100%; background:#35353a; max-width:640px; min-width:320px; color:#fff; margin:0 auto; position:relative;
height:0.88rem;font-size:0.32rem;
}
#header .header_con span{float:left; display:block; position:absolute; top:0; left:0; width:0.48rem; position:fixed; top:0;}
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
/*---------*/
.top_btn{
	width: 100%;
	height: 0.7rem;

	margin-top: 0.15rem;
}

.left_btn,.right_btn{
	width: 1.8rem;
	height: 0.7rem;
	background: #FFFFFF;
	border: 1px solid #E7E7E7;
}

.left_btn{
	float: left;
	border-radius: 0px 0.35rem 0.35rem 0px;
}

.right_btn{
	float: right;
	border-radius:  0.35rem 0px 0px 0.35rem;
}

.left_btn button{
	width: 0.66rem;
	height: 0.66rem;
	background: #5496F9;
	border: none;
	border-radius: 0.33rem;
	margin-top: 0.02rem;
	margin-left: 0.18rem;
	/*box-shadow: 0px 2px 2px #5496F9;*/
	font-size: 0.2rem;
	line-height: 0.24rem;
	color: #FFFFFF;
}

.right_btn button{
	width: 1.78rem;
	height: 0.66rem;
	background: #5496F9;
	border: none;
	border-radius: 0.33rem 0px 0px 0.33rem;
	margin-top: 0.02rem;
	margin-left: 0.02rem;
	font-size: 0.26rem;
	color: #FFFFFF;
}
/*---*/
.zs_cord{
	width: 100%;
	height: 1.8rem;
	margin-top: 0.2rem;
	position: relative;
	top: -0.3rem;
}

.zs_cord ul{
	width: 100%;
	height: 2rem;
	display: flex;
}

.zs_cord li{
	flex: 1;
}

.pm_span,.yq_span{
	width: 1.2rem;
	height: 1.2rem;
	background: #FAAD2C;
	margin: auto;
	border-radius: 0.6rem;
	margin-top: 0.4rem;
	text-align: center;
}

.pm_span{
	float: right;
	/*background-image: url(../img/orange_box.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;*/
	background: #fac638;
	margin-right: 0.16rem;
}

.yq_span{
	float: left;
	/*background-image: url(../img/yellow_box.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;*/
	background: #fadc38;
	margin-left: 0.16rem;
}

.yq_span>p,.pm_span>p{
	font-size: 0.24rem;
	line-height: 0.28rem;
}

.title{margin-top: 0.34rem;}

.zf_span{
	width: 2rem;
	height: 2rem;
	margin: auto;
	border-radius: 0.9rem;
	background-image: url(../assets/img/bg_cord.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	text-align: center;
}

.zf_span p{
	font-size: 0.36rem;
	line-height: 0.44rem;
	position: relative;
	top: 0.58rem;
}
/*-------*/
.bq_box{
	width: 100%;
	text-align: center;
	position: relative;
	top: -0.35rem;
}

.bq_box>p{
	color: #323232;
	font-size: 0.24rem;
	margin-top: 0.1rem;
}

.bq_blank{
	width: 5.4rem;
	height: 2.4rem;
	background-image: url(../assets/img/jifen_blank.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	margin: auto;
	position: relative;
	top: 0.1rem;
	z-index: 99;
}

.bq_blue{
	background-image: url(../assets/img/jifen_blue.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	width: 6rem;
	height: 2rem;
	margin: auto;
	position: relative;
	top: -0.30rem;
}

.bq_blank ul{
	width: 5.2rem;
	height: 0.4rem;
	float: left;
	margin-left: 0.1rem;
	margin-top: 0.4rem;
	display: flex;
}

.bq_blank li{
	flex: 1;
	background: #FFFFFF;
}

.bq_blank li>img{
	width: 84%;
	margin-top: 0.1rem;
}

.bq_blank li>p{
	font-size: 0.18rem;
	color: #323232;
	margin-top: 0.1rem;
}

.acq_money,.acq_jp{
	width: 5.2rem;
	color: #323232;
}

.acq_money{
	height: 0.7rem;
	float: left;
	margin-left: 0.4rem;
	margin-top: 0.4rem;
}

.acq_money ul{
	display: block;
	width: 100%;
	height: 0.7rem;
	border-bottom: 1px solid #FFFFFF;
}

.acq_money li{
	width: 1.8rem;
	display: block;
	line-height: 0.7rem;
	float: left;
	text-align: left;
	font-size: 0.24rem;
}

.acq_money li>em{
	color: #ff8921;
	font-size: 0.3rem;
}

.acq_jp{
	float: left;
	margin-left: 0.4rem;
	height: 1.43rem;
	margin-top: 0.12rem;
}

.acq_jp li{
	width: 1.8rem;
	display: block;
	line-height: 0.26rem;
	float: left;
	text-align: left;
	font-size: 0.24rem;
}

.jp_lan{
	width: 1.7rem;
	float: left;
	line-height: 0.24rem;
	font-size: 0.22rem;
}
/*--------*/


/*.bottom_box{
	width: 100%;
	height: 0.9rem;
	position: fixed;
	bottom: 0px;
	border-top: 1px solid #E7E7E7;
	display: flex;
	background: #FFFFFF;
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

.tab_bar p{
	color: #323232;
	font-size: 0.21rem;
	margin-top: 0.08rem;
}

#index img{height: 0.38rem;width: 0.38rem;margin-top: 0.11rem;}
#jf img{height: 0.34rem;width: 0.43rem;margin-top: 0.13rem;}
#call img{height: 0.36rem;margin-top: 0.12rem;}
#my img{height: 0.38rem;width: 0.38rem;margin-top: 0.11rem;}*/
</style>