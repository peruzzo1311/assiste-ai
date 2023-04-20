import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Home from './screens/Home'
import React from 'react'

const Tab = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Home' component={Home} />
      {/* <Tab.Screen name='SignIn' component={SignIn} /> */}
    </Tab.Navigator>
  )
}
