import AsyncStorage from '@react-native-community/async-storage'

export type StorageKey = string

export const TOKEN_KEY: StorageKey = 'user.token'
export const USER_ID_KEY: StorageKey = 'user.id'
export const USER_PW_KEY: StorageKey = 'user.pw'

export const storage = {
  get: async (key: StorageKey) => {
    try {
      return await AsyncStorage.getItem(key)
    } catch (e) {
      return null
    }
  },
  set: async (key: StorageKey, value: string) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {}
  },
  remove: async (key: StorageKey) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch (e) {
      throw e
    }
  },
}
