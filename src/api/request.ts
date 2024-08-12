

import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建 axios 实例
const Service = axios.create({
  baseURL: "/api", // api 的 base_url
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  },
  timeout: 120000, // 请求超时时间
})

// 请求拦截器
/* 在每次请求之前，
拦截器会从 window.sessionStorage 中获取 token 
并将其添加到请求头的 Authorization 字段中。
如果没有 token，请求头中不会添加此字段。 */
Service.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      (config.headers as any)['Authorization'] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
/* 在每次响应之后，拦截器会检查响应数据的 status 字段。
如果 code 为 200，表示请求成功并返回数据；否则，
使用 ElMessage 显示错误消息并返回一个被拒绝的 Promise。 */
// 响应拦截器
Service.interceptors.response.use(
  response => {
    // 如果响应类型是 blob，不检查 res.code
    if (response.config.responseType === 'blob') {
      return response;
    }
    
    const res = response.data;
    if (res.code === 200) { // 判断成功的条件
      return res.data; // 返回 data 字段中的数据
    } else {
      // 处理失败的情况
      ElMessage.error(res.msg || '网络异常');
      return Promise.reject(new Error(res.msg || '网络异常'));
    }
  },
  error => {
    // 处理请求错误
    if (error.response) {
      // 服务器响应了状态码，但状态码超出了 2xx 范围
      ElMessage.error(`请求失败，状态码: ${error.response.status}`);
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      ElMessage.error('没有收到响应');
    } else {
      // 其他错误
      ElMessage.error(error.message);
    }
    return Promise.reject(error);
  }
);

export default Service
