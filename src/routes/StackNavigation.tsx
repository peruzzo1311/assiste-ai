import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'

import Details from '../screens/Details'
import Home from '../screens/Home'
import MoviesHorizontal from '../screens/MoviesHorizontal'
import MoviesVertical from '../screens/MoviesVertical'
import Person from '../screens/Person'
import Search from '../screens/Search'
import WatchList from '../screens/WatchList'

const Stack = createStackNavigator()

export function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Person' component={Person} />
      <Stack.Screen name='Details' component={Details} />
      <Stack.Screen name='MoviesVertical' component={MoviesVertical} />
      <Stack.Screen name='MoviesHorizontal' component={MoviesHorizontal} />
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
