<template>
	<div class="reg">
		<header><span onclick="javascript:history.go(-1)"></span>注册</header>
		<form action="">
        <ul class="form">
        <router-link class="hah" tag="li" to="/login"><a>有账号，去登录</a></router-link>
            <li><input type="text" placeholder="请输入账号" v-model="username"></li>
           <!--<span></span>-->
            <!--<li><input type="text" placeholder="请输入验证码"><span id="confirm">获取验证码</span></li>-->
            <li><input type="password" placeholder="请输入密码" v-model="password"></li>
            <!--<li><input type="password" placeholder="请确认密码"></li>-->
            <li><input type="submit" value="完	成" @click="reg"></li>
        </ul>
    </form>
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
			reg(){
				axios({
					url:"/smf/reg",
					method:'post',
					data:{
						username:this.username,
						password:this.password
					}
				}).then(
					res=>{
						if(res.data.err===0){
							 console.log(res.data)
            							this.$router.push('/login')
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
.hah a{
    font-size: 0.26rem;
    color: #2d9cff;
}
.reg{
	height:530px;
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
.form li{
    padding: 0 0.3rem;
    margin-top: 0.2rem;
    position: relative;
}
input[type='text'],input[type='password']{
    height: 0.8rem;
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
    /*margin-left: 0.3rem;*/
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
#confirm{
    position: absolute;
    width: 2rem;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.26rem;
    color: #fff;
    background: #2d9cff;
    border-radius: 0.08rem;
    right:0.5rem;
    top:0.14rem;
}

</style>