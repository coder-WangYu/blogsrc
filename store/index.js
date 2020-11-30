import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 开发环境下使用严格模式
  strict: process.env.NODE_ENV !== 'production',
  state: {
    changeLogSign: true, // 用于切换登录注册页面
    changeExpItem: 1, // 用于切换经验页面展示的内容
    changeHomeItem: '为你推荐', // 用于切换首页展示内容
  },
  getters: {

  },
  mutations: {
    logSignChange(state) {
      state.changeLogSign = !state.changeLogSign
    },
    expItemChange(state, arg) {
      state.changeExpItem = arg.status
    },
    homeItemChange(state, arg) {
      state.changeHomeItem = arg.status
    }
  },
  actions: {

  },
  modules: {

  },
})

export default store