<template>
  <div id="app">

    <!--<Swiper></Swiper>
    <List></List>-->
    <!--<Home></Home>-->
    <router-view></router-view>
    <!--<Jifen></Jifen>-->
    <!--<Contact></Contact>-->
    <!--<User></User>-->
    <Footer></Footer>
  </div>
</template>

<script>
//import Home from "./pages/Home"
//import Jifen from "./pages/Jifen"
//import User from "./pages/User"
//import Contact from "./pages/Contact"


import Footer from "./components/Footer"

export default {
  name: 'app',
  components: {

//  Swiper,
//  List,
//		Home,
//		Jifen,
//			User,
//		Contact,
    Footer
  }
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
</style>
