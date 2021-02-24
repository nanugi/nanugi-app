import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { HomeScreen } from 'screens/home'
import { observer } from 'mobx-react'

const Stack = createStackNavigator()
export const HomeStack = observer(() => {
  useEffect(() => {}, [])

  return (
    <Stack.Navigator
      screenOptions={() => ({
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      })}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
})
