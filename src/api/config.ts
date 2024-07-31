// src/utils/.js

import Service from "./request";

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
