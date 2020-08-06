/*
 * @Author: your name 请求封装
 * @Date: 2020-08-06 15:26:02
 * @LastEditTime: 2020-08-06 16:28:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oosjk_pc\oosjk_pc\src\utils\request.js
 */
import httpRequest from '@/api/apiConfig.js'
//get封装
export async function ajaxGet(url,config){
    try{
        let res = await httpRequest.get(url,config)
        return {res:res.data.data}
    }catch(err){
        return {err}
    }
}
//post封装
export async function ajaxPost(url,data,config){
    try{
        let res = await httpRequest.post(url,data,config)
        return {res:res.data.data}
    }catch(err){
        return {err}
    }
}