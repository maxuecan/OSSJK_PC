/*
 * @Author: your name
 * @Date: 2020-08-06 10:32:30
 * @LastEditTime: 2020-08-06 19:54:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oosjk_pc\oosjk_pc\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

import '@/style/reset.scss'//样式
import router from '@/router/index.js'//路由
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
