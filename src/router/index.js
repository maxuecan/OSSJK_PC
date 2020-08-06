/*
 * @Author: your name 路由唯一出口
 * @Date: 2020-08-06 10:48:06
 * @LastEditTime: 2020-08-06 17:24:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oosjk_pc\oosjk_pc\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './routes/commonRoutes.js'
Vue.use(VueRouter)

export default new VueRouter({
    routes
})