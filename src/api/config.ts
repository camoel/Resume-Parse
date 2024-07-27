
// src/utils/request.js

import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建 axios 实例
const Service = axios.create({
  baseURL: "/api", // api 的 base_url
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  },
  timeout: 10000, // 请求超时时间
})

// 请求拦截器
/* 在每次请求之前，
拦截器会从 window.sessionStorage 中获取 token 
并将其添加到请求头的 Authorization 字段中。
如果没有 token，请求头中不会添加此字段。 */
Service.interceptors.request.use(
  config => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
      config.headers.common['Authorization'] = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
/* 在每次响应之后，拦截器会检查响应数据的 status 字段。
如果 status 为 0，表示请求成功并返回数据；否则，
使用 ElMessage 显示错误消息并返回一个被拒绝的 Promise。 */
Service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status === 0) {
      return res
    } else {
      ElMessage.error(res.message || '网络异常')
      return Promise.reject(new Error(res.message || '网络异常'))
    }
  },
  error => {
    ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export default Service
