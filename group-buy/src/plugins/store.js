//1.引入vue,引入vuex,安装vuex
//2.引入状态管理的actions,mutations,getters,state等角色
//3.创建一个实例store,new Vuex.Store({放几个状态管理的键值对})
//4.导出实例store

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import actions from "../store/actions";
import mutations from "../store/mutations";
import getters from "../store/getters";
import state from "../store/state";

let store = new Vuex.Store({
	actions,mutations,getters,state
})

export default store;


