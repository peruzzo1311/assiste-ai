import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },

  watchProviders: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 12,

    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#525252',
  },

  actor: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 12,
  },
})

export default styles
