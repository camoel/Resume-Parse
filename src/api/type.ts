import type { UserRole } from '@/stores/user'

export interface IRegisterParams {
  userName: string
  password: string
  role: UserRole
  companyDescription: string
}

export interface ILoginParams {
  userName: string
  password: string
  captchaResult: string
  role: UserRole
}
