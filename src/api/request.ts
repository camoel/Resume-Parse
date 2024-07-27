// src/utils/request.js

import Service from "./config";

// 封装 GET 请求
const get = (config:any) => {
  return Service({
    ...config,
    method: "get",
    params: config.data,
  });
};

// 封装 POST 请求
const post = (config:any) => {
  return Service({
    ...config,
    method: "post",
    data: config.data,
  });
};

export default { get, post };
