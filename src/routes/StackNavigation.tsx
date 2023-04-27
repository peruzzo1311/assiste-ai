import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Search from '../screens/Search'
import WatchList from '../screens/WatchList'
import Details from '../screens/Details'

const Stack = createStackNavigator()

export function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export function SearchNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Search' component={Search} />
    </Stack.Navigator>
  )
}

export function WatchListNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='WatchList' component={WatchList} />
    </Stack.Navigator>
  )
}
