import React from 'react'
import { StatusBar, StatusBarProps, StyleSheet, View } from 'react-native'
import { WINDOW_HEIGHT, WINDOW_WIDTH, isIOS } from 'infra/constants'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const MyStatusBar = (props: StatusBarProps) => (
  <View style={[styles.statusBar, { backgroundColor: props.backgroundColor }]}>
    <StatusBar backgroundColor={props.backgroundColor} {...props} />
  </View>
)

const aspectRatio = WINDOW_HEIGHT / WINDOW_WIDTH

const styles = StyleSheet.create({
  statusBar: {
    height: aspectRatio > 1.6 ? (isIOS ? getStatusBarHeight(true) : 0) : 0,
  },
})
