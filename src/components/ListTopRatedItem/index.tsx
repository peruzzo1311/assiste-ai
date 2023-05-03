import { AspectRatio, Badge, Image } from 'native-base'
import React from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import IListMovies from '../../interfaces/IListMovies'

export default function ListTopRatedItem(movie: IListMovies) {
  const urlImage = 'https://image.tmdb.org/t/p/w500'
  const navigation = useNavigation<any>()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', { id: movie.id })}
      style={{ margin: 12 }}
    >
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
        {movie.index}
      </Badge>
    </TouchableOpacity>
  )
}
