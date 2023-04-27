import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabs } from './bottomTab'

export default function AppRoutes(props) {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  )
}
