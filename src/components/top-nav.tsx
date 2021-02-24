import { Text } from '@ui-kitten/components'
import { navigation } from 'infra/navigation'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { DrawerMenuIcon, SmartKeyIcon } from 'components/icon-grigo'
import { COLOR } from 'infra/color'
import { userStore } from 'stores/user'

const LeftButton = () => (
  <View style={{ padding: 10 }}>
    <TouchableOpacity
      hitSlop={{ top: 10, right: 20, bottom: 20, left: 10 }}
      onPress={() => navigation.openDrawer()}
    >
      <DrawerMenuIcon style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
  </View>
)

const RightButton = () => (
  <View style={{ padding: 10 }}>
    <TouchableOpacity
      hitSlop={{ top: 10, right: 20, bottom: 20, left: 10 }}
      onPress={() =>
        userStore.confirmLoginStatus(() => navigation.navigate('SmartKeys'))
      }
    >
      <SmartKeyIcon style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
  </View>
)

export const TopNav = () => (
  <View
    style={{
      height: 44,
      backgroundColor: COLOR.white,
      elevation: 0,
      borderBottomWidth: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <LeftButton />
    {/*// TODO: Need Title content*/}
    <RightButton />
  </View>
)

export const TopNavTitle: React.FC<{ title: string }> = ({ title }) => (
  <View
    style={{
      position: 'absolute',
      alignItems: 'center',
      width: '100%',
      top: 12,
      elevation: 5,
    }}
    pointerEvents='box-none'
  >
    <Text
      style={{
        fontSize: 16,
        fontFamily: 'NotoSansKR-Bold',
        textAlign: 'center',
        color: COLOR.dark,
      }}
    >
      {title}
    </Text>
  </View>
)
