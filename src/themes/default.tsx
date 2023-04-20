import { extendTheme } from 'native-base'

export const theme = extendTheme({
  fontConfig: {
    Montserrat: {
      400: {
        normal: 'Montserrat-Regular',
      },
      600: {
        normal: 'Montserrat-SemiBold',
      },
      700: {
        normal: 'Montserrat-Bold',
      },
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
    mono: 'Montserrat',
  },
})
