import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'

import Details from '../screens/Details'
import Home from '../screens/Home'
import MovieList from '../screens/MovieList'
import Search from '../screens/Search'
import WatchList from '../screens/WatchList'

const Stack = createStackNavigator()

export function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
      <Stack.Screen name='MovieList' component={MovieList} />
    </Stack.Navigator>
  )
}

export function SearchNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Search' component={Search} />
    </Stack.Navigator>
  )
}

export function WatchListNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='WatchList' component={WatchList} />
    </Stack.Navigator>
  )
}
