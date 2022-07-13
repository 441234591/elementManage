import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  state: {
    menu: [],
    currentMenu: null,
    tabList: [{ path: '/', label: '首页', icon: 'home' }],
  },
  getters: {},
  mutations: {
    selectMenu(state, val) {
      console.log(state, val)
      if (val.label == '首页') {
        state.currentMenu = null
      } else {
        state.currentMenu = val
        let res = state.tabList.findIndex((item) => item.label === val.label)
        res == -1 ? state.tabList.push(val) : ''
      }
    },
    closeTab(state, val) {
      let res = state.tabList.findIndex((item) => item.label === val.label)
      state.tabList.splice(res, 1)
    },
  },
  actions: {},
  modules: {},
}
