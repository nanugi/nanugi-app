/**
 * @format
 */

import 'mobx-react-lite/batchingForReactNative'
import { AppRegistry } from 'react-native'
import { App } from './App'
import { name as appName } from './app.json'

let app = App

AppRegistry.registerComponent(appName, () => app)
