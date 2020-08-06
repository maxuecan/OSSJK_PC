/*
 * @Author: your name axios封装
 * @Date: 2020-08-06 15:21:01
 * @LastEditTime: 2020-08-06 16:26:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oosjk_pc\oosjk_pc\src\api\apiConfig.js
 */
import axios from 'axios'
var httpRequest = axios.create({
    baseURL: 'http://vt.ossjk.com/',
    timeout: 6000,
    //formdata数据类型设置请求头
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});
export default httpRequest