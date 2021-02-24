import React from 'react'
import { Layout } from '@ui-kitten/components'
import { StyleSheet, Text } from 'react-native'

export const HomeScreen = () => {
  return (
    <Layout style={styles.layout}>
      <Text>Home</Text>
    </Layout>
  )
}

const styles = StyleSheet.create({
  layout: { flex: 1 },
})
