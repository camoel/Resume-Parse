import { post } from './base'
import request from './request'
import type { ILoginParams, IRegisterParams } from './type'

export const getCaptcha = async () => {
  const res = await request.get('/login/captcha', {
    responseType: 'blob',
  })
  //  成功码看具体情况是啥改了就行
  const successCode = 200
  if (res.status === successCode) {
    return res.data
  }
  return null
}

export const register = async (params: IRegisterParams) => {
  const url =
    params.role === 'business' ? '/company/register' : '/personal/register'
  const res = await post(url, params)
  if (res.status === 200) return res.data
  return null
}

export const login = async (params: ILoginParams) => {
  const res = await post('/login', params)
  console.log('🚀 ~ login res:', res)
  if (res.status === 200) return res.data
  return null
}
