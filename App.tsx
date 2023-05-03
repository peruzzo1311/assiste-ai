import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import { theme } from './src/themes/default'
import { useEffect, useState } from 'react'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import AppRoutes from './src/routes'

const customFonts = {
  'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-SemiBold': require('./src/assets/fonts/Montserrat-SemiBold.ttf'),
  'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
}

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false)

  useEffect(() => {
    const LoadFonts = async () => {
      await Font.loadAsync(customFonts)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      await SplashScreen.hideAsync()
      setIsFontLoaded(true)
    }

    LoadFonts()
  }, [])

  if (isFontLoaded) {
    return (
      <NativeBaseProvider theme={theme}>
        <AppRoutes />
        <StatusBar style='light' />
      </NativeBaseProvider>
    )
  }
}
