import { BaseApi } from './base'
import { ApiError, InputError } from './error'

class UserApi extends BaseApi {
  async signUp(email: string, pwd: string, name: string) {
    if (!email || !pwd) throw new InputError()
    const res = await this.post('/user/signup', {
      email,
      pwd,
      name,
    })
    if (res.code !== 200) throw new ApiError(res)
    return res.data
  }

  async signIn(email: string, pwd: string): Promise<string> {
    if (!email || !pwd) throw new InputError()
    const res = await this.post('/v1/signin', {
      email,
      pwd,
    })

    if (res.code !== 200) throw new ApiError(res)
    return res.data.token
  }

  async getProfile() {
    const res = await this.get('/users')
    if (res.code !== 200) throw new ApiError(res)
    return res.data
  }
}

export const userApi = new UserApi()
