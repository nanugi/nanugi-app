import React, { useEffect } from 'react'
import * as eva from '@eva-design/eva'
import SplashScreen from 'react-native-splash-screen'
import { _navigationRef, setIsNavigationReady } from 'infra/navigation'
import { MyStatusBar } from 'components/status-bar'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { mapping, theme } from 'infra/theme'
import { NavigationContainer } from '@react-navigation/native'
import { HomeStack } from 'navigators/home-stack'
import { Toast } from 'components/toast'
import { Alert } from 'components/alert'
import { Confirm } from 'components/confirm'

export const App = () => {
  useEffect(() => {
    setIsNavigationReady(true)
    SplashScreen.hide()
    return () => {
      setIsNavigationReady(false)
    }
  }, [])

  return (
    <>
      <MyStatusBar barStyle='dark-content' backgroundColor='#FFF' />
      <IconRegistry icons={[EvaIconsPack]} />
      <ApplicationProvider
        {...eva}
        theme={{ ...eva.light, ...theme }}
        // @ts-ignore
        customMapping={mapping}
      >
        <NavigationContainer ref={_navigationRef}>
          <HomeStack />
        </NavigationContainer>
      </ApplicationProvider>
      <Toast />
      <Alert />
      <Confirm />
    </>
  )
}
