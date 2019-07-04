<template>
	<div class="login">
		<header><span onclick="javascript:history.go(-1)"></span>登录</header>
		<div class="head"></div>
		<form action="">
        <ul class="form">
            <li><input type="text" placeholder="请输入手机号/用户名" v-model="username"></li>
            <li><input type="password" placeholder="请输入密码" v-model="password"></li>
            <li><input type="submit" value="登	录" @click="login"></li>
        </ul>
    </form>
    <ul class="fix miss">
        <li class="l"><a href="##">忘记密码？</a></li>
        <!--<li class="r"><a href="">账号注册</a></li>-->
        <router-link class="r" tag="li" to="/reg"><a href="">账号注册</a></router-link>
    </ul>
    <div id="fifth" class="g6"><span class="mr20"></span>第三方登录<span class="ml20"></span></div>
    <ul class="df jcsb" id="footer">
        <li><img src="../assets/imag/login/icon1.png" alt=""><p>QQ</p></li>
        <li><img src="../assets/imag/login/icon2.png" alt=""><p>微信</p></li>
        <li><img src="../assets/imag/login/icon3.png" alt=""><p>微博</p></li>
    </ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				username:'',
				password:'',
				mess:''
			}
		},
		methods:{
			login(){
				axios({
					url:'/smf/login',
					method:'post',
					data:{username:this.username,password:this.password,save:true}
				}).then(
					res=>{
						if(res.data.err===0){
							console.log(res.data)
							this.$router.push('/home')
						}else{
							console.log(res.data)
							this.mess = res.data.mess
						}
					}
				)
			}
		}
	}
</script>

<style>

.login{
	height:800px;
    padding-top: 0.88rem;
    background: #f2f2f2;
}
header{
    position: fixed;
    width: 100%;
    z-index: 99;
    text-align: center;
    line-height: 0.88rem;
    height: 0.88rem;
    font-size: 0.32rem;
    color: #fff;
    background: #2d9cff;
    top:0;
}
header span{
    width:0.27rem;
    height: 0.42rem;
    background:  url(../assets/imag/back.png) no-repeat center center;
    background-size: 100% 100%;
    -o-background-size: 100% 100%;
    -webkit-background-size: 100% 100%;
    float: left;
    position: relative;
    top:0.23rem;
    left: 0.3rem;
}
header:after{
    content:" ";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.head{
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 0.8rem;
    -moz-border-radius: 0.8rem;
    margin:0 auto;
    background: #fff url(../assets/imag/login/head.png) no-repeat center center;
    background-size: 0.68rem 0.82rem;
    -o-background-size:0.68rem 0.82rem ;
    -webkit-background-size: 0.68rem 0.82rem;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
}
.form li{
    padding: 0 0.3rem;
    margin-bottom: 0.2rem;
}
input[type='text'],input[type='password']{
    height: 0.88rem;
    line-height: 0.88rem;
    width: 100%;
    font-size: 0.26rem;
    color: #999;
    background: #fff;
    padding-left: 0.2rem;
    box-sizing: border-box;
    -moz-box-sizing:border-box ;
    -webkit-box-sizing:border-box ;
}
input[type="submit"]{
    margin-left: 0.1rem;
    margin-right: 0.3rem;
    line-height: 0.75rem;
    width: 5.6rem;
    border-radius: 0.1rem;
    height: 0.75rem;
    font-size: 0.26rem;
    background: #2d9cff;
    color: #fff;
    margin-top: 0.1rem;
}
/*.fix:after {
    display: table;
    content: '';
    clear: both;
   }*/
.miss{
	height:40px;
	
    padding:0 0.6rem;
}

.miss li:nth-child(1){
	float: left;
    padding:0 0.6rem;
}
.miss li:nth-child(2){
	float: left;
    padding:0 0.6rem;
}
.miss li a{
    font-size: 0.26rem;
    color: #2d9cff;
}
#fifth{
	
    font-size: 0.26rem;
    
}
#fifth span{
	
    display: inline-block;
    width: 2.4rem;
    height: 0.01rem;
    background: #ddd;
    vertical-align: middle;
}
#footer{
    margin-top: 0.7rem;
    padding:0 0.88rem;
}
#footer li{
   /*display: flex;justify-content: space-around;*/
  float: left;
  margin-bottom: 80px;
  margin-right:35px ;
}
#footer li img{
    width: 1.0rem;
    height: 1.0rem;
}
#footer li p{
    text-align: center;
    font-size:0.26rem ;
    color: #333;
    line-height: 0.26rem;
    margin-top: 0.4rem;
}
</style>