import { Dimensions, Platform } from 'react-native'

export const SERVER_BASE_URL = __DEV__
  ? 'http://localhost:3000/api'
  : 'http://localhost:3000/api'

export const WINDOW_WIDTH = Dimensions.get('window').width
export const WINDOW_HEIGHT = Dimensions.get('window').height

export const isIOS = Platform.OS === 'ios'
export const isAOS = Platform.OS === 'android'

export const BACK_BUTTON_EXIT_RESET_TIME = 1000
