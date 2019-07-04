import axios from 'axios';
//2.引入
import {UPDATE_HOME,UPDATE_BANNER,UPDATE_DETAIL,VIEW_FOOT,VIEW_LOADING} from "./types"
export default{
//	键:回调函数({state,commit},payload)=>{
//				请求数据
//			}
//	用了types,所以要用访问属性的方法[]，大写的名字跟随组件home，1
	[UPDATE_HOME]:({state,commit},payload)=>{
		axios({
			url:"/api/home",
			params:{_limit:15,_page:1}
		}).then(
			(res)=>{
//				3自定义的名字:(大写)，后面传数据
				commit(UPDATE_HOME,res.data.data)
			}
		)
	},
	[UPDATE_BANNER]:({state,commit},payload)=>{
		axios({
			url:"/api/banner",
			params:{_limit:20,_page:1}
		}).then(
			(res)=>{
				commit(UPDATE_BANNER,res.data.data)
			}
		)
	},
	[UPDATE_DETAIL]:({state,commit},payload)=>{
		axios({
			url:`/api/${payload.dataName}/${payload.id}`

		}).then(
			res=>commit(UPDATE_DETAIL,res.data.data)
		)
	},
//	[UPDATE_DETAIL] : async ({state,commit},{dataName,id}) => {
//  let res = await axios({url:`/api/${dataName}/${id}`});
//  commit(UPDATE_DETAIL,res.data.data)
//},
  
	[VIEW_FOOT] : ({state,commit},payload) => commit(VIEW_FOOT,payload),

  [VIEW_LOADING] : ({state,commit},payload) => commit(VIEW_LOADING,payload),
	
}
