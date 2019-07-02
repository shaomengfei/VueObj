<template>
	<div id="header">
		<div class="header_con">
			<a href="javascript:history.go(-1);"></a>
			<div class="top_tit">联系我们</div>
			<div class="right_div">
				<a href="">留言</a>
			</div>
		</div>
		<div id="content_div_per">
			<div class="per_list" style="padding-top: 0.26rem;">
				<dl>
					<dt>您可能以下需要我们</dt>
					<dd>1、广告投放</dd>
					<dd>2、软件使用问题</dd>
					<dd>3、加盟我们</dd>
				</dl>
				<ul style="padding-top: 0.26rem;">
					<li>邮箱：www.facebook.com</li>
					<li>联系我们：15652554154</li>
					<li>公众号：答题APP</li>
					<li>电话：0551-125200</li>
				</ul>
			</div>
		</div>
		<!--------->
		<div class="yy_jl_box">
			<div class="per_jl_db">
				<ul>
					<li class="fl w15 photo-left">
						<span class="photo-per"><img src="../assets/images/center-photo.png"></span>
						<h3>王伟</h3>
					</li>
					<li class="fr w80 photo-right">
						<h2>这个什么时候可以答题？<span class="fr fr-time">30分钟前</span></h2>
						<div class="bg-per"> <span>管理员回复王伟：晚上八点答题不定期更新派发奖品</span></div>							
					</li>
					<div class="clearfix"></div>
				</ul>
				<ul>
					<li class="fl w15 photo-left">
						<span class="photo-per"><img src="../assets/images/center-photo.png"></span>
						<h3>王伟</h3>
					</li>
					<li class="fr w80 photo-right">
						<h2>这个什么时候可以答题？<span class="fr fr-time">30分钟前</span></h2>
						<div class="bg-per"> <span>管理员回复王伟：晚上八点答题不定期更新派发奖品</span></div>							
					</li>
					<div class="clearfix"></div>
				</ul>
				<ul>
					<li class="fl w15 photo-left">
						<span class="photo-per"><img src="../assets/images/center-photo.png"></span>
						<h3>王伟</h3>
					</li>
					<li class="fr w80 photo-right">
						<h2>这个什么时候可以答题？<span class="fr fr-time">30分钟前</span></h2>
						<div class="bg-per"> <span>管理员回复王伟：晚上八点答题不定期更新派发奖品</span></div>							
					</li>
					<div class="clearfix"></div>
				</ul>
				<ul>
					<li class="fl w15 photo-left">
						<span class="photo-per"><img src="../assets/images/center-photo.png"></span>
						<h3>王伟</h3>
					</li>
					<li class="fr w80 photo-right">
						<h2>这个什么时候可以答题？<span class="fr fr-time">30分钟前</span></h2>
						<div class="bg-per"> <span>管理员回复王伟：晚上八点答题不定期更新派发奖品</span></div>							
					</li>
					<div class="clearfix"></div>
				</ul>
			</div>
		</div>
	</div>
	<!-------->
</template>

<script>
</script>

<style>
#header{text-align: center; width:100%; margin:0 auto;  z-index:99; }
#header .header_con{width:100%; background:#35353a; max-width:640px; min-width:320px; color:#fff; margin:0 auto; position:fixed;top:0;
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
/*-------*/
#content_div_per {
    /*margin-top: 0.7rem;*/
    background-color: #efeff4;
    width: 100%;
    max-width: 640px;
    min-width: 320px;
    clear: both;
    overflow: hidden;
}

.per_list{
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    /*margin: 0.16rem 0 0 0;*/
    background-image:url(../assets/img/call-me_02.png);
    background-repeat: no-repeat;
    background-size:100%;
    height:254px;
    overflow: hidden;
    width:110%;
    padding-left: 0.16rem;
    }

.per_list dl dt, ul li{
	font-size: 0.3rem;
	color: #000;
}
.per_list dl dd{
	font-size: 0.28rem;
	color: #000;
}
/*-----*/
.fl{float: left;}
.fr{float: right;}
.clearfix{clear: both;}
.yy_jl_box{ padding-bottom:0.2rem;}
.yy_jl_tit {border-top:1px solid #f8f8f8;border-bottom:1px solid #f2f2f2;
padding:0 0.05rem; height:0.7rem; background:#fff; }
.yy_jl_tit a{ display:inline-block; width:2.1rem; height:0.66rem; margin:0 auto; text-align:center;}
.yy_jl_tit a span{ display:inline-block;font-size:0.26rem; min-width:1.08rem; height:0.62rem; line-height:0.62rem; color:#666; border-bottom:0.04rem solid #fff; }
.yy_jl_tit a.change_c span{ color:#d91d37; border-bottom:0.04rem solid #d91d37;}
/*----------*/
.per_jl_db {
    background: #fff;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #ededed;
    margin-top: 0.16rem;
}
.per_jl_db ul{
    position: relative;
    border-bottom:3px solid #e7e7e7;
    margin: 0;
}
.yy_jl_tit a {
    display: inline-block;
    width: 49%;
    height: 0.66rem;
    margin: 0 auto;
    text-align: center;
}
.photo-per{
	width:0.9rem;
    height:0.9rem;
    overflow: hidden;
    display: block;
    border-radius: 1rem;
}
.photo-per img{width: 100%;}
.per_jl_db ul{padding: 0.16rem 0.2rem 0.2rem 0.16rem;}
.photo-left{text-align: center;}
.photo-right{margin-top:-5px;}
.photo-left h3{margin-top:3px;font-size: 0.28rem;}
.photo-right h2{line-height:0.4rem;font-size: 0.3rem;}
.fr-time{font-size: 0.23rem;color: #999;line-height: 0.4rem;}
.w15{width:15%;}
.w80{width:80%;}
.bg-per{
	background-image: url(../assets/img/call-me1_01.png);
    background-repeat:no-repeat;
    position: relative;	
    width: 100%;
    height: 45px;
	}
.bg-per span{
	background-color:#f4f4f4;
	position: absolute;
	top: 10px;
	display: block;
	font-size: 0.25rem;
	color: #666;
	padding: 5px;
	width: 98%;
	}
</style>