import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'

import {
  HomeNavigation,
  SearchNavigation,
  WatchListNavigation,
} from './StackNavigation'

const Tab = createBottomTabNavigator()

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#171717',
        tabBarInactiveTintColor: '#a3a3a3',
        unmountOnBlur: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tabBarStyle, marginHorizontal: '20%' },
      }}
    >
      <Tab.Screen
        name='HomeTab'
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View style={focused ? styles.tabBarIcon : null}>
                <Ionicons name={'home'} size={size} color={color} />
              </View>
            )
          },
        }}
      />

      <Tab.Screen
        name='SearchTab'
        component={SearchNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View style={focused ? styles.tabBarIcon : null}>
                <Ionicons name={'search'} size={size} color={color} />
              </View>
            )
          },
        }}
      />

      <Tab.Screen
        name='WatchListTab'
        component={WatchListNavigation}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <View style={focused ? styles.tabBarIcon : null}>
                <Ionicons name={'bookmark'} size={size} color={color} />
              </View>
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: '#404040',
    borderTopWidth: 0,
    borderRadius: 24,
    bottom: 24,
    width: '60%',
    height: 60,
  },
  tabBarIcon: {
    backgroundColor: '#FFCC00',
    padding: 12,
    borderRadius: 100,
    transform: [{ translateY: -12 }],
  },
})
