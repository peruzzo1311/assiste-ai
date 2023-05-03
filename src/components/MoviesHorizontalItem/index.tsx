import { useNavigation } from '@react-navigation/native'
import { AspectRatio, Image } from 'native-base'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import IListMovies from '../../interfaces/IListMovies'

export default function MoviesHorizontalItem(movie: IListMovies) {
  const urlImage = 'https://image.tmdb.org/t/p/w500'
  const navigation = useNavigation<any>()

  if (movie) {
    return (
      <TouchableOpacity
        onPress={() => navigation.push('Details', { id: movie.id })}
        style={{ margin: 12 }}
      >
        <AspectRatio
          ratio={1 / 1.33}
          height={250}
          rounded={'2xl'}
          overflow={'hidden'}
        >
          <Image
            resizeMode='cover'
            source={{ uri: `${urlImage}${movie.poster_path}` }}
            alt={`${movie.title}`}
          />
        </AspectRatio>
      </TouchableOpacity>
    )
  }
}
