import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import {
  HomeNavigation,
  SearchNavigation,
  WatchListNavigation,
} from './StackNavigation'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffcc00',
        tabBarInactiveTintColor: '#a3a3a3',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#171717',
          borderTopColor: '#262626',
          height: 60,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name='homeNavigation'
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='SearchNavigation'
        component={SearchNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search' size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='WatchListNavigation'
        component={WatchListNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
