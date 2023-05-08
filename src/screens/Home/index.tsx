import { Box, ScrollView, Text, View } from 'native-base'
import React, { useEffect, useState } from 'react'
import ListTopRated from '../../components/ListTopRated/'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getPopularMovies, getUpComingMovies } from '../../api/TMDB'
import MoviesHorizontal from '../MoviesHorizontal'
import IListMovies from '../../interfaces/IListMovies'

export default function Home({ navigation }) {
  const [popularMovies, setPopularMovies] = useState<IListMovies[]>([])
  const [upComingMovies, setUpComingMovies] = useState<IListMovies[]>([])

  useEffect(() => {
    getPopularMovies(1)
      .then((movies) => setPopularMovies(movies))
      .catch((error) => console.log(error.message))

    getUpComingMovies(1)
      .then((movies) => setUpComingMovies(movies))
      .catch((error) => console.log(error.message))
  }, [])

  return (
    <Box safeAreaTop flex={1} bg={'muted.900'} p={4}>
      <ScrollView>
        <View>
          <Text color={'muted.100'} fontSize={'xl'} fontWeight={'bold'} px={4}>
            Melhores avaliados
          </Text>

          <ListTopRated />
        </View>

        <View mt={8}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MoviesVertical', {
                type: 'Populares',
              })
            }
          >
            <View
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              px={4}
            >
              <Text color={'muted.100'} fontSize={'xl'} fontWeight={'bold'}>
                Populares
              </Text>

              <Text color={'#FFCC00'} fontSize={'sm'} fontWeight={'bold'}>
                Ver mais
              </Text>
            </View>
          </TouchableOpacity>

          <MoviesHorizontal movies={popularMovies} />
        </View>

        <View mt={8}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MoviesVertical', {
                type: 'Em breve',
              })
            }
          >
            <View
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
              px={4}
            >
              <Text color={'muted.100'} fontSize={'xl'} fontWeight={'bold'}>
                Em breve
              </Text>

              <Text color={'#FFCC00'} fontSize={'sm'} fontWeight={'bold'}>
                Ver mais
              </Text>
            </View>
          </TouchableOpacity>

          <MoviesHorizontal movies={upComingMovies} />
        </View>
      </ScrollView>
    </Box>
  )
}
