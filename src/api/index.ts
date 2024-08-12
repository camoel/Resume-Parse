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

// 类型自己补充
export const formResume = async (params: any) => {
  const res = await post('/resumes/formResume', params)
  if (res.status === 200) return res.data
  return null
}

// 下面的自己仿造着写吧
export const analysis = async (params: any) => {
  const res = await post('/resume/analysis', params)
  if (res.status === 200) return res.data
  return null
}
