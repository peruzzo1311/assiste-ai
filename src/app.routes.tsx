import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Home from './screens/Home'
import React from 'react'
import Search from './screens/Search'
import WatchList from './screens/WatchList'

const Tab = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f5f5f5',
        tabBarInactiveTintColor: '#a3a3a3',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#262626',
          borderTopColor: '#737373',
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name='Search'
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            )
          },
        }}
      />

      <Tab.Screen
        name='MyMovies'
        component={Search}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name={focused ? 'search' : 'search-outline'}
                size={size}
                color={color}
              />
            )
          },
        }}
      />

      <Tab.Screen
        name='Home'
        component={WatchList}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name={focused ? 'bookmark' : 'bookmark-outline'}
                size={size}
                color={color}
              />
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}
