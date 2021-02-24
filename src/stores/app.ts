import { makeAutoObservable } from 'mobx'

class AppStore {
  isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }
}

export const appStore = new AppStore()
