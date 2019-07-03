//4.引入
import * as types from "./types";
export default {
//	mutations拿state里面的数据过来突变,payload是传过来的数据
	[types.UPDATE_HOME]:(state,payload)=>state.home = payload,
	[types.UPDATE_BANNER]:(state,payload)=>state.banner = payload,
	[types.UPDATE_DETAIL]:(state,payload)=>state.detail=payload,
	[types.VIEW_FOOT] : (state,payload) => state.bFoot = payload ,
  [types.VIEW_LOADING] : (state,payload) => state.bLoading = payload 
}
