import request from './request'

export const get = (url: string, params: Record<string, any>) =>
  request.get(url, { params })

export const post = (
  url: string,
  data: Record<string, any>,
  params?: Record<string, any>
) => request.post(url, { data, params })
