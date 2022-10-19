import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/reset.scss'

//饿了么三方包
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//axios请求
import Http from '@/api/setAxios'
Vue.prototype.$http = Http
//mock
import '@/mock'
Vue.config.productionTip = false
Vue.use(ElementUI)

let str = '2022-01-25'
let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
let res = str.replace(reg, '$<year>/$<month>/$<day>')
res = str.replace(reg, (...args) => {
  console.log(args)
  let { year, month, day } = args[args.length - 1]
  return `${year}/${day}/${month}`
})
console.log(res)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
