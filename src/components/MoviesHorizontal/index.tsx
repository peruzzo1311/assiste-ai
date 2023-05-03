import { FlatList } from 'native-base'
import React from 'react'

import Spinner from '../Spinner'
import IListMovies from '../../interfaces/IListMovies'
import MoviesHorizontalItem from '../MoviesHorizontalItem'

type Props = {
  movies: IListMovies[]
}

export default function MoviesHorizontal({ movies }: Props) {
  const renderItem = ({ item }: { item: IListMovies }) => (
    <MoviesHorizontalItem {...item} />
  )

  return (
    <FlatList
      horizontal
      keyExtractor={(item) => item.id.toString()}
      data={movies}
      renderItem={renderItem}
      ListEmptyComponent={<Spinner />}
    />
  )
}
