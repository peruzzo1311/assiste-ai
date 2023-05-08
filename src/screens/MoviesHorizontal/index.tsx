import { FlatList } from 'native-base'
import React from 'react'

import MoviesHorizontalItem from '../../components/MoviesHorizontalItem'
import Spinner from '../../components/Spinner'
import IListMovies from '../../interfaces/IListMovies'

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
