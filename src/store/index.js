import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)


const store=new Vuex.Store({
  state:{
    defaultname:"仓库里面的何运正"//这是一个默认值
  },
  mutations:{
      add(state,action){
       state.defaultname=action.payload
      }
  }
})
Vue.$Store=store
export default store
