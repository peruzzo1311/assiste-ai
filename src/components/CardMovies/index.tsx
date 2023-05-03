import { Ionicons } from '@expo/vector-icons'
import {
  AspectRatio,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  View,
} from 'native-base'
import React from 'react'

import IPopularMovies from '../../interfaces/IPopularMovies'
import styles from './styles'

export default function ListPopularItem(movie: IPopularMovies) {
  const urlImage = 'https://image.tmdb.org/t/p/w500'

  return (
    <Pressable onPress={() => console.log(movie.id)}>
      <View
        style={styles.Container}
        padding={4}
        bgColor={'muted.800'}
        borderRadius={'2xl'}
      >
        <AspectRatio ratio={1 / 1.5} height={220}>
          <Image
            source={{ uri: `${urlImage}${movie.poster_path}` }}
            alt={movie.title}
            resizeMode='cover'
            rounded={'2xl'}
            overflow={'hidden'}
          />
        </AspectRatio>

        <View style={styles.info}>
          <Text color={'muted.100'} fontSize={'md'} fontWeight={'bold'}>
            {movie.title}
          </Text>

          <HStack alignItems={'center'} space={2}>
            <Icon
              as={<Ionicons name='star-outline' />}
              color={'#ffcc00'}
              size={'md'}
            />

            <Text color={'muted.200'} fontSize={'sm'}>
              {movie.vote_average}
            </Text>
          </HStack>

          <HStack alignItems={'center'} space={2}>
            <Icon
              as={<Ionicons name='film-outline' />}
              color={'muted.200'}
              size={'md'}
            />

            <Text color={'muted.200'} fontSize={'sm'}>
              {movie.genre_names[0]}
            </Text>
          </HStack>

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
        </View>
      </View>
    </Pressable>
  )
}
