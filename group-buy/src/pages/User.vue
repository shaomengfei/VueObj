<template>
	<div id="header">
		<div class="header_con">
			<div class="top_tit">个人中心</div>
			
		</div>
		<!------->
		<div id="content_div_b" class="p_bottom">
			<div class="cp_list">
				<ul class="photo-center" id="photo-center">
					<li><img src="../assets/images/center-photo.png"></li>
					<a href="#"><i>头像</i></a>
				</ul>
				<ul>
					<li><em></em> 昵称
						<a href="personal-name.html"><span>小扁豆</span></a>
					</li>
					<i></i>
				</ul>
				<ul>
					<li><em></em> 微信号
						<a href="#"><span>未绑定</span></a>
					</li>
					<a href="#"><i></i></a>
				</ul>
				<ul class="borefeff4">
					<li onclick="document.getElementById('bigbox').style.display='block'"><em></em> 性别 <span>男</span></li>
					<i></i>
				</ul>
				<ul>
					<li><em></em>年龄 <span style="margin-right: -0.1rem;">
						
						<select class="form-control">
							<option>18</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>7</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
						</select>						
					</span></li>
					<i></i>
				</ul>
				<ul>
					<li><em></em> 地区 <span style="margin-right: -0.4rem;" id="city_text1" class="r-tx-txt2 r-tx-txt2s fl">安徽省 六安市</span></li>
					<i></i>
				</ul>
				<ul class="borefeff4">
					<li><em></em> 系统默认时间为 <label id="useData">20:00</label><strong style="color: #C6C6C6;">（答题前两分钟提醒）</strong></li>
				</ul>
				<ul>
					<li><em></em> 震动 <span class="shock"></span></li>
				</ul>
				<ul>
					<li><em></em> 闹铃 <span class="clock"></span></li>
				</ul>
				<ul class="borefeff4">
					<li><em></em> 关于快答答题 </li>
					<a href="about.html"><i></i></a>
				</ul>
			</div>
			<div class="button-setup" @click="logout">退出</div>
		</div>
	</div>

</template>

<script>
	//	组件守卫
	export default {
//		data(){
//			return {
//				data:{}
//			}
//		},
		methods:{
			logout(){
//				console.log("123")
				axios({
					url:"api/logout",
					method:"put"
				}).then(
					res=>{
						console.log(res)
						if(res.data.error ===0){
							this.$router.push('/login')
						}
					}
				)
			}
		},
		beforeRouteenter(to,from,next){
			console.log("user beforerouteEnter")
			axios({
				url:"/api/user"
			}).then(
				res=>{
					if(res.data.error===1){
						console.log(res.data)
						next("/login")
					}else{
						console.log(res.data)
						next((_this)=>{_this.data=res.data.data})
					}
				}
			)
		}
		
	}
</script>

<style scoped>
	#content_div_b{
	margin-top:1rem;
	background-color: #efeff4;
	min-height: 9rem;
	}
.cp_list ul i {
    background: url(../assets/images/right_01.png) no-repeat;
    background-size: 0.19rem 0.3rem;
    top: 0.23rem;
    right: 0.1rem;
}
.cp_list ul li {
    padding-left: 0.38rem;
    position: relative;
    line-height: 0.76rem;
    font-size: 0.26rem;
    color: #666;
}
#photo-center{height: 1.2rem;line-height: 1.2rem;}

.photo-center li {
    display: block;
    height: 1rem;
    width:1rem;
    overflow: hidden;
    background-color: #000;
    border-radius: 5px;
    margin-top: 10px;
}
ul#photo-center li img {
    width: 100%;
    display: block;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
}

ul#photo-center i {
    line-height: 0.4rem;
    position: absolute;
    top: 0.3rem;
    right: 0.15rem;
    color: #000;
    font-style: normal;
    width: 1.25rem;
    background-position: 0.85rem;
}
.cp_list ul li span {
    font-size:normal;
    color: #666;
    float: right;
    padding-right: 0.6rem;
}
.cp_list ul li em {
    position: absolute;
    left: -0.1rem;
    top: 0.13rem;
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    background: url(../assets/images/icons_os1.png) no-repeat;
    background-size: 1.8rem 1.8rem;
}
.cp_list ul:nth-of-type(2) li em {
    background-position: -0.45rem -0.4rem;
}
.cp_list ul:nth-of-type(3) li em {
    background-position: -0.9rem -0.4rem;
}
.cp_list ul:nth-of-type(4) li em {
    background-position: -1.38rem -0.4rem;
}
.cp_list ul:nth-of-type(6) li em {
    background-position: -0.46rem 0rem;
}
.cp_list ul:nth-of-type(7) li em {
    background-position: -0.9rem 0rem;
}
.cp_list ul:nth-of-type(8) li em {
    background-position: -0.0rem  -0.4rem;
}
.cp_list ul:nth-of-type(9) li em {
    background-position:-1.35rem -0rem;
}
.cp_list ul:nth-of-type(10) li em {
    background-position:-0.0rem -0.86rem;
}
.shock, .clock{
    width: 0.65rem;
    position: absolute;
    right: 0.2rem;
    top:0.15rem;
    overflow: hidden;
}
.shock{
	background: url(../assets/img/center18.png);
    background-repeat: no-repeat;
    background-size: 0.65rem 0.4rem;
    width: 0.65rem;
    height: 0.4rem;
    cursor: pointer;
      display: block;
    }
 .shock-off{
	background: url(../assets/img/center110.png);
    background-repeat: no-repeat;
    background-size: 0.65rem 0.4rem;
    display: block;
    width: 0.65rem;
    height: 0.4rem;
    }
.clock{
	background-image:url(../assets/img/center110.png);
	background-repeat: no-repeat;
    background-size: 0.65rem 0.4rem;
    display: block;
    width: 0.65rem;
    height: 0.4rem;
    cursor: pointer;
    }
.clock-on{
	background-image:url(../assets/img/center18.png);
	background-repeat: no-repeat;
    background-size: 0.65rem 0.4rem;
    display: block;
    width: 0.65rem;
    height: 0.4rem;
    }
.borefeff4{border-top: solid 5px #EFEFF4;}
.cp_list ul {
    height: 0.76rem;
    padding-left: 0.26rem;
    border-bottom: 1px solid #EFEFF4;
    position: relative;
}
.button-setup{
	width:86%;
	margin:auto;
	background-color: #f00;
	border-radius:50px;
	height:46px;
	line-height:46px;
	font-size:22px;
	color: #fff;
	text-align: center;
	margin-top: 25px;
	}
	/*--------------*/
	
#header .header_con{width:100%; background:#35353a; max-width:640px; min-width:320px; color:#fff; margin:0 auto; position:fixed;
height:0.88rem;font-size:0.32rem;z-index: 99;
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



.header_con .top_tit{ line-height:0.88rem;}
/*-------*/
/*.fl{float: left;}
.fr{float: right;}
.clearfix{clear: both;}*/
#content_div_b{
	/*margin-top: 0.7rem;*/
	background-color: #fff;
	min-height: 9rem;
	}
.cp_list ul i {
    background: url(../assets/images/right_01.png) no-repeat;
    background-size: 0.19rem 0.3rem;
    top: 0.23rem;
    right: 0.1rem;
}
.cp_list ul li {
    padding-left: 0.38rem;
    position: relative;
    line-height: 0.76rem;
    font-size: 0.26rem;
    color: #666;
}
#photo-center{height: 1.2rem;line-height: 1.2rem;}

.photo-center li {
    display: block;
    height: 1rem;
    width:1rem;
    overflow: hidden;
    background-color: #000;
    border-radius: 5px;
    margin-top: 10px;
}
ul#photo-center li img {
    width: 100%;
    display: block;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
}

ul#photo-center i {
    line-height: 0.4rem;
    position: absolute;
    top: 0.3rem;
    right: 0.15rem;
    color: #000;
    font-style: normal;
    width: 1.25rem;
    background-position: 0.85rem;
}
.cp_list ul li span {
    font-size:normal;
    color: #666;
    float: right;
    padding-right: 0.6rem;
}
.cp_list ul li em {
    position: absolute;
    left: -0.1rem;
    top: 0.13rem;
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    background: url(../assets/images/icons_os1.png) no-repeat;
    background-size: 1.8rem 1.8rem;
}
.cp_list ul:nth-of-type(2) li em {
    background-position: -0.45rem -0.4rem;
}
.cp_list ul:nth-of-type(3) li em {
    background-position: -0.9rem -0.4rem;
}
.cp_list ul:nth-of-type(4) li em {
    background-position: -1.38rem -0.4rem;
}
.cp_list ul:nth-of-type(6) li em {
    background-position: -0.46rem 0rem;
}
.cp_list ul:nth-of-type(7) li em {
    background-position: -0.9rem 0rem;
}
.cp_list ul:nth-of-type(8) li em {
    background-position: -0.0rem  -0.4rem;
}
.cp_list ul:nth-of-type(9) li em {
    background-position:-1.35rem -0rem;
}
.cp_list ul:nth-of-type(10) li em {
    background-position:-0.0rem -0.86rem;
}
.shock, .clock{
    width: 0.65rem;
    position: absolute;
    right: 0.2rem;
    top:0.15rem;
    overflow: hidden;
}
.shock{
	background: url(../assets/img/center18.png);
    background-repeat: no-repeat;
    background-size: 0.65rem 0.4rem;
    width: 0.65rem;
    height: 0.4rem;
    cursor: pointer;
      display: block;
    }
 .shock-off{
	background: url(../assets/img/center110.png);
    background-repeat: no-repeat;
    background-size: 0.65rem 0.4rem;
    display: block;
    width: 0.65rem;
    height: 0.4rem;
    }
.clock{
	background-image:url(../assets/img/center110.png);
	background-repeat: no-repeat;
    background-size: 0.65rem 0.4rem;
    display: block;
    width: 0.65rem;
    height: 0.4rem;
    cursor: pointer;
    }
.clock-on{
	background-image:url(../assets/img/center18.png);
	background-repeat: no-repeat;
    background-size: 0.65rem 0.4rem;
    display: block;
    width: 0.65rem;
    height: 0.4rem;
    }
.borefeff4{border-top: solid 5px #EFEFF4;}
.cp_list ul {
    height: 0.76rem;
    padding-left: 0.26rem;
    border-bottom: 1px solid #EFEFF4;
    position: relative;
}
.button-setup{
	width:86%;
	margin:auto;
	background-color: #f00;
	border-radius:50px;
	height:46px;
	line-height:46px;
	font-size:22px;
	color: #fff;
	text-align: center;
	margin-top: 25px;
	}
#foot_div{height: 1rem;}
#foot_div .home_foot {
    background: #ffffff;
    height: 1rem;
    border-top: 1px solid #e7e7e7;
    width: 100%;
    max-width: 640px;
    min-width: 320px;
    margin: 0 auto;}
.home_foot li{
	float: left;
	width: 25%;
	}
.home_foot a {
    text-align: center;
    line-height: 0.86rem;
    font-size: 0.28rem;
    color: #393946;
    display: inline-block;
    width: 100%;
    padding-top:18px;
}
.hf1{    
	background-image: url(../assets/img/icon-bottom_01.png);
    background-repeat: no-repeat;
    background-size:26%;
    background-position: 50% 13%;
    }
.hf2{    
	background-image: url(../assets/img/icon-bottom_03.png);
    background-repeat: no-repeat;
    background-size:26%;
    background-position: 50% 13%;
    }
.hf3{    
	background-image: url(../assets/img/icon-bottom_05.png);
    background-repeat: no-repeat;
    background-size:26%;
    background-position: 50% 13%;
    }
.hf4{    
	background-image: url(../assets/img/icon-bottom1_07.png);
    background-repeat: no-repeat;
    background-size:26%;
    background-position: 50% 13%;
    }

#color-blue{color:#5497fa;}
.button-setup{
	width:86%;
	margin:auto;
	background-color: #f00;
	border-radius:50px;
	height:46px;
	line-height:46px;
	font-size:22px;
	color: #fff;
	text-align: center;
	margin-top: 25px;
	margin-bottom:85px ;
	}
</style>