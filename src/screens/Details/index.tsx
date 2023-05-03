import { Ionicons } from '@expo/vector-icons'
import {
  AspectRatio,
  Box,
  HStack,
  Icon,
  Image,
  ScrollView,
  Text,
  View,
} from 'native-base'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { getMovieDetails, getSimilarMovies } from '../../api/TMDB'
import WatchProviders from '../../components/WatchProviders'
import ISingleMovie from '../../interfaces/ISingleMovie'
import styles from './styles'
import Credits from '../../components/Credits'
import Spinner from '../../components/Spinner'
import MoviesHorizontal from '../../components/MoviesHorizontal'
import IListMovies from '../../interfaces/IListMovies'

export default function Details({ route, navigation }) {
  const [movie, setMovie] = React.useState<ISingleMovie>()
  const [similarMovies, setSimilarMovies] = React.useState<
    IListMovies[] | null
  >(null)
  const [showWatchProviders, setShowWatchProviders] =
    React.useState<boolean>(false)
  const urlImage = 'https://image.tmdb.org/t/p/w500'
  const { id } = route.params

  const getSimilar = (genreId: number) => {
    getSimilarMovies(genreId)
      .then((movies) => {
        let arrayMovies = []
        for (let movie of movies) {
          if (movie.id != id) {
            arrayMovies.push(movie)
          }
        }

        setSimilarMovies(arrayMovies)
      })
      .catch((error) => console.log(error.message))
  }

  useEffect(() => {
    getMovieDetails(id)
      .then((res) => {
        if (res.genres.length > 0) {
          getSimilar(res.genres[0].id)
        }

        setMovie(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Box flex={1} bg={'muted.900'}>
      {movie ? (
        <ScrollView>
          <AspectRatio ratio={16 / 9} overflow={'hidden'} opacity={0.4}>
            <Image
              source={{
                uri: movie.backdrop_path
                  ? `${urlImage}${movie.backdrop_path}`
                  : `${urlImage}${movie.poster_path}`,
              }}
              alt={`${movie.title}`}
              resizeMode={'cover'}
            />
          </AspectRatio>

          <Box px={4} mt={-24} flexDirection={'row'}>
            <AspectRatio
              ratio={1 / 1.33}
              size={150}
              rounded={'2xl'}
              overflow={'hidden'}
            >
              <Image
                resizeMode='cover'
                source={{ uri: `${urlImage}${movie.poster_path}` }}
                alt={`${movie.title}`}
              />
            </AspectRatio>

            <View style={styles.title}>
              <Text
                marginLeft={2}
                marginBottom={8}
                color={'muted.100'}
                textAlign={'center'}
                fontSize={'lg'}
                fontWeight={'bold'}
              >
                {movie.title}
              </Text>
            </View>
          </Box>

          <Box
            safeArea
            justifyContent={'center'}
            alignContent={'center'}
            flexDirection={'row'}
          >
            <HStack space={4} alignItems={'center'}>
              <HStack alignItems={'center'} space={2}>
                <Icon
                  as={<Ionicons name='calendar-outline' />}
                  color={'muted.200'}
                  size={'md'}
                />

                <Text color={'muted.200'} fontSize={'sm'}>
                  {movie.release_date && movie.release_date.substring(0, 4)}
                </Text>
              </HStack>

              <Text color={'muted.200'} fontSize={'md'}>
                |
              </Text>

              <HStack alignItems={'center'} space={2}>
                <Icon
                  as={<Ionicons name='time-outline' />}
                  color={'muted.200'}
                  size={'md'}
                />

                <Text color={'muted.200'} fontSize={'sm'}>
                  {movie.runtime && movie.runtime} Minutes
                </Text>
              </HStack>

              <Text color={'muted.200'} fontSize={'md'}>
                |
              </Text>

              <HStack alignItems={'center'} space={2}>
                <Icon
                  as={<Ionicons name='film-outline' />}
                  color={'muted.200'}
                  size={'md'}
                />

                <Text color={'muted.200'} fontSize={'sm'}>
                  {movie.genres && movie.genres[0].name}
                </Text>
              </HStack>
            </HStack>
          </Box>

          <Box safeArea mx={4}>
            <Text color={'muted.300'}>{movie.overview}</Text>
          </Box>

          <Box safeArea marginTop={8}>
            <TouchableOpacity
              style={styles.watchProviders}
              onPress={() => setShowWatchProviders(!showWatchProviders)}
            >
              <Text color={'muted.200'} fontSize={'lg'} fontWeight={'bold'}>
                Onde assistir?
              </Text>

              <Icon
                as={
                  <Ionicons
                    name={showWatchProviders ? 'chevron-up' : 'chevron-down'}
                  />
                }
                color={'muted.200'}
                size={'md'}
                marginRight={4}
              />
            </TouchableOpacity>

            <Box
              style={{
                display: showWatchProviders ? 'flex' : 'none',
              }}
            >
              <WatchProviders show={showWatchProviders} id={movie.id} />
            </Box>
          </Box>

          <Box safeArea marginTop={8}>
            <Text
              color={'muted.200'}
              fontSize={'lg'}
              fontWeight={'bold'}
              mx={4}
              mb={4}
            >
              Elenco
            </Text>

            <Credits id={movie.id} />
          </Box>

          <Box safeArea marginTop={8}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MovieList', { movies: similarMovies })
              }
            >
              <View
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                px={4}
              >
                <Text color={'muted.100'} fontSize={'xl'} fontWeight={'bold'}>
                  Relacionados
                </Text>

                <Text color={'#FFCC00'} fontSize={'sm'} fontWeight={'bold'}>
                  Ver mais
                </Text>
              </View>
            </TouchableOpacity>

            <MoviesHorizontal movies={similarMovies} />
          </Box>
        </ScrollView>
      ) : (
        <Box
          flex={1}
          bg={'muted.900'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Spinner />
        </Box>
      )}
    </Box>
  )
}
