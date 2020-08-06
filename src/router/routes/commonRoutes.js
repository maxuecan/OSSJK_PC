/*
 * @Author: your name 公共路由
 * @Date: 2020-08-06 10:48:18
 * @LastEditTime: 2020-08-06 19:29:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oosjk_pc\oosjk_pc\src\router\routes\commonRoutes.js
 */
import layout from '@/components/layout/layout'
export const routes = [{
    path:'/login',//登陆页
    name:'login',
    alias:'/',
    component:() =>import('@/pages/login')
},{
    path:'/main',//主要内容
    name:'main',
    component:layout,
    children:[{
        path:'/home',//首页
        alias:'/main',
        name:'home',
        component:()=>import('@/pages/home')
    },{
        path:'/exam',//考试列表页
        name:'exam',
        component:()=>import('@/pages/exam')
    },{
        path:'/examDetails',//老师详情页
        name:'examDetails',
        component:()=>import('@/pages/examDetails')
    },{
        path:'/history',//历史列表页
        name:'history',
        component:()=>import('@/pages/history')
    },{
        path:'/historyDetails',//历史详情页
        name:'historyDetails',
        component:()=>import('@/pages/historyDetails')
    }]
},{
    path:'*',//404
    name:'404',
    component:()=>import('@/pages/404')
},]