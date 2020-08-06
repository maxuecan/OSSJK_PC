/*
 * @Author: your name 登陆接口
 * @Date: 2020-08-06 15:55:01
 * @LastEditTime: 2020-08-06 16:30:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oosjk_pc\oosjk_pc\src\api\apiList\login.js
 */
/**
 * @description: login
 * @param {lname:string} 登录名
 * @param {pwd:string} 密码
 * @return {type} 
 */
import { ajaxPost } from '@/utils/request.js'
export function login(data,config){
    const url = 'pc/user/login'
    return ajaxPost(url,data,config)
}


