import { NetworkMessage } from './base'

export class InputError extends Error {
  constructor(msg: string = '올바르게 입력해주세요!') {
    super(msg)
    this.name = 'InputError'
  }
}

export class ApiError extends Error {
  constructor(res: NetworkMessage) {
    super(`${res.msg}`)
    this.name = 'ApiError'
  }
}

export class NoLocationError extends Error {
  constructor() {
    super(
      '위치정보가 수집되지 않았습니다. 휴대폰 내 GPS/WiFi를 활성화 한 후 다시 시도해주세요! ' +
        '아이폰의 경우 반드시 위치 권한을 `앱을 사용하는 동안만`으로 설정해주세요.',
    )
    this.name = 'NoLocationError'
  }
}
