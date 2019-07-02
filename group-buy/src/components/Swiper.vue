<template>
	<!--<div class="top_pic">
		<div class="carousel-image" id="scroll_img" style="height: 204px;">
			<div style="width: 2040px; position: absolute; left: -1020px;"><a href="#" style="width: 510px; position: relative; height: 204px;"><img src="../assets/img/banner.png" class="carousel-0" data-index="0" style="left: 0px; top: 0px; position: absolute;"></a>
				<a href="#" style="width: 510px; position: relative; height: 204px;"><img src="../assets/img/banner.png" class="carousel-1" data-index="1" style="left: 0px; top: 0px; position: absolute;"></a>
                <a href="#" style="width: 510px; position: relative; height: 204px;"><img src="../assets/img/banner.png" class="carousel-2" data-index="2" style="left: 0px; top: 0px; position: absolute;"></a> 
			<a href="#" style="width: 510px; position: relative; height: 204px;"><img src="../assets/img/banner.png" class="carousel-3" data-index="3" style="left: 0px; top: 0px; position: absolute;"></a></div>
			<span class="carousel-num"><i class="">1</i><i class="current">2</i></span>
		</div>
	</div>-->
	<div class="banner" ref="f1">
    <ul class="clearfix">
      <li>
        <img src="../assets/img/banner.png" alt="">
        <div class="text-box">
          <h2>1111111</h2>
          <!--<p>刘德华11 / 文</p>-->
        </div>
      </li>
      <li>
        <img src="../assets/img/banner.png" alt="">
        <div class="text-box">
          <h2>2222222</h2>
          <!--<p>刘德华11 / 文</p>-->
        </div>
      </li>
      <li>
        <img src="../assets/img/banner.png" alt="">
        <div class="text-box">
          <h2>3333333</h2>
          <!--<p>刘德华11 / 文</p>-->
        </div>
      </li>
      <li>
        <img src="../assets/img/banner.png" alt="">
        <div class="text-box">
          <h2>444444</h2>
          <!--<p>刘德华11 / 文</p>-->
        </div>
      </li>
    </ul>
  </div>
	
</template>

<script>
import Swipe from  '../assets/js/swipe.js';
export default{
		mounted(){
			new Swipe(this.$refs.f1, {
		      auto: 2000,
		      continuous: true,
		      stopPropation: true,
//		      callback: function(index, element) {
//		        $(".banner ol li").removeClass("active");
//		        $(".banner ol li")
//		          .eq(index)
//		          .addClass("active");
//		      }
		    });
		}
	}

</script>

<style>
	/*.top_pic{ position:relative;}
.top_pic .left_i{position:absolute; top:0.2rem; left:0.2rem;
    display: inline-block;
	background: url(../assets/images/fx_icon.png) no-repeat;
	background-size: 1.2rem 1.2rem;
	width: 0.6rem;
	height: 0.6rem;
	background-position: 0rem 0rem;
	z-index:105;
		}

.top_pic .right_i{position:absolute; top:0.2rem; right:0.2rem;
    display: inline-block;
	background: url(../assets/images/fx_icon.png) no-repeat;
	background-size: 1.2rem 1.2rem;
	width: 0.6rem;
	height: 0.6rem;
	background-position: -0.6rem 0rem;
	z-index:105;
		}
.carousel-image{width:100%;overflow: hidden;position: relative;}
.carousel-image div{position: absolute;}
.carousel-image a{display: block;float:left;background-color: #f2f2f2;}
.carousel-image a img{margin:0;border:none;}
.carousel-num {position: absolute;bottom:0.2rem;margin:0 auto;width:100%;text-align: center;}
.carousel-num i{font-size:0px;cursor: pointer; font-style:normal;background-color:#fff;color:#fff;font-size: 0;height:0.1rem;width:0.1rem;border-radius:0.05rem;overflow: hidden;margin-left: 5px;display: inline-block;background-clip:padding-box;}
.carousel-num i.current{background-color: #5496f9;}*/
.banner {
  margin-top: 0.6rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.banner ul li {
  width: 6.4rem;
  float: left;
  position: relative;
}
.banner ul li img {
  width: 100%;
  display: block;
}
.banner ul li .text-box {
  width: 5.8rem;
  padding: 0 0.3rem;
  height: .6rem;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}

.banner ol {
  position: absolute;
  right: 0.2rem;
  bottom: 0.2rem;
}
.banner ol li {
  width: 0.15rem;
  height: 0.15rem;
  background: #5477b2;
  float: left;
  border-radius: 50%;
  margin-right: 0.08rem;
}
.banner ol li.active {
  background: #fff;
}
</style>
