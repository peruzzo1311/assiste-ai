import { AspectRatio, Badge, Box, HStack, Image, ScrollView } from 'native-base'
import React, { useEffect, useState } from 'react'

import { getTopRatedMovies } from '../../api/TMDB'
import ITopRatedMovies from '../../interfaces/ITopRatedMovies'
import styles from './styles'

export default function ListTopRated() {
  const [topRatedMovies, setTopRatedMovies] = useState<ITopRatedMovies[]>([])
  const urlImage = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    getTopRatedMovies()
      .then((movies) => {
        let top10 = movies.slice(0, 10)

        setTopRatedMovies(top10)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <ScrollView horizontal>
      <HStack space={8} bgColor={'muted.800'} p={4} rounded={'2xl'}>
        {topRatedMovies.map((movie, index) => (
          <Box key={movie.id}>
            <AspectRatio
              ratio={1 / 1.33}
              height={350}
              rounded={'3xl'}
              overflow={'hidden'}
            >
              <Image
                resizeMode='cover'
                source={{ uri: `${urlImage}${movie.poster_path}` }}
                alt={movie.title}
              />
            </AspectRatio>

            <Badge
              rounded={'full'}
              style={styles.Badge}
              shadow={3}
              _text={{
                color: 'muted.900',
                fontWeight: 'bold',
                fontSize: '2xl',
              }}
            >
              {index + 1}
            </Badge>
          </Box>
        ))}
      </HStack>
    </ScrollView>
  )
}
