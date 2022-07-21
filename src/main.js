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

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
