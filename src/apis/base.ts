import { SERVER_BASE_URL } from 'infra/constants'

// BaseApi should be a leaf node in dependency graph
let token: string | null = null
export const setToken = (t: string | null) => {
  token = t
}

export interface NetworkMessage {
  code: number
  success: boolean
  data?: any
  msg?: string
}

export class BaseApi {
  get commonHeaders() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-AUTH-TOKEN': token || '',
    }
  }

  get commonFormDataHeaders() {
    return {
      'Content-Type': 'multipart/form-data',
      'X-AUTH-TOKEN': token || '',
    }
  }

  protected async get(path: string): Promise<NetworkMessage> {
    const res = await fetch(`${SERVER_BASE_URL}${path}`, {
      method: 'GET',
      headers: this.commonHeaders,
    })
    return await res.json()
  }

  async post(path: string, body?: object): Promise<NetworkMessage> {
    const res = await fetch(`${SERVER_BASE_URL}${path}`, {
      method: 'POST',
      headers: this.commonHeaders,
      body: JSON.stringify(body),
    })
    return await res.json()
  }

  async postFormData(
    path: string,
    data: Map<string, any>,
  ): Promise<NetworkMessage> {
    const formData = new FormData()
    data.forEach((value, key) => {
      formData.append(key, value)
    })
    const res = await fetch(`${SERVER_BASE_URL}${path}`, {
      method: 'POST',
      headers: this.commonFormDataHeaders,
      body: formData,
    })
    return await res.json()
  }

  async put(path: string, body: object): Promise<NetworkMessage> {
    const res = await fetch(`${SERVER_BASE_URL}${path}`, {
      method: 'PUT',
      headers: this.commonHeaders,
      body: JSON.stringify(body),
    })
    return await res.json()
  }

  async delete(path: string, body: object): Promise<NetworkMessage> {
    const res = await fetch(`${SERVER_BASE_URL}${path}`, {
      method: 'DELETE',
      headers: this.commonHeaders,
      body: JSON.stringify(body),
    })
    return await res.json()
  }
}
