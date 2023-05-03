import { Box, Text } from 'native-base'
import React from 'react'
import IListMovies from '../../interfaces/IListMovies'

type Props = {
  route: {
    params: {
      movies: IListMovies
    }
  }
  navigation: any
}

export default function MovieList({ route, navigation }: Props) {
  const { movies } = route.params

  return (
    <Box safeAreaTop flex={1} bg={'muted.900'} p={4}>
      <Text color={'white'}>{movies.title}</Text>
    </Box>
  )
}
