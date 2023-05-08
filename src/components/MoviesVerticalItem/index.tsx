import { Ionicons } from '@expo/vector-icons'
import {
  AspectRatio,
  Box,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
} from 'native-base'
import React, { useEffect, useState } from 'react'

import IListMovies from '../../interfaces/IListMovies'
import styles from './styles'
import { getGenresName } from '../../api/TMDB'

type genre = {
  id: number
  name: string
}

export default function ListPopularItem(movie: IListMovies) {
  const [genresName, setGenresName] = useState<genre[]>([])
  const urlImage = 'https://image.tmdb.org/t/p/w500'

  const findGenreName = (id: number) => {
    const genre = genresName.find((genre) => genre.id === id)

    return genre?.name
  }

  useEffect(() => {
    getGenresName()
      .then((res) => {
        setGenresName(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  if (movie.title) {
    return (
      <Pressable>
        <Box
          style={styles.Container}
          padding={4}
          bgColor={'muted.800'}
          borderRadius={'2xl'}
        >
          <AspectRatio ratio={1 / 1.5} height={220}>
            <Image
              source={{ uri: `${urlImage}${movie.poster_path}` }}
              alt={`${movie.title}`}
              resizeMode='cover'
              rounded={'2xl'}
              overflow={'hidden'}
            />
          </AspectRatio>

          <Box style={styles.info}>
            <Text color={'muted.100'} fontSize={'md'} fontWeight={'bold'}>
              {movie.title}
            </Text>

            {movie.vote_average > 0 && (
              <HStack alignItems={'center'} space={2}>
                <Icon
                  as={<Ionicons name='star-outline' />}
                  color={'#ffcc00'}
                  size={'md'}
                />

                <Text color={'muted.200'} fontSize={'sm'}>
                  {movie.vote_average.toFixed(1)}
                </Text>
              </HStack>
            )}

            <HStack alignItems={'center'} space={2}>
              <Icon
                as={<Ionicons name='film-outline' />}
                color={'muted.200'}
                size={'md'}
              />

              <Text color={'muted.200'} fontSize={'sm'}>
                {movie.genre_ids && findGenreName(movie.genre_ids[0])}
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
          </Box>
        </Box>
      </Pressable>
    )
  }
}
