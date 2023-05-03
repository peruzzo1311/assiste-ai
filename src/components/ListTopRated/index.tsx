import { FlatList } from 'native-base'
import React, { useEffect, useState } from 'react'

import { getTopRatedMovies } from '../../api/TMDB'
import ITopRatedMovies from '../../interfaces/ITopRatedMovies'
import ListTopRatedItem from '../ListTopRatedItem'
import Spinner from '../Spinner'

export default function ListTopRated() {
  const [topRatedMovies, setTopRatedMovies] = useState<ITopRatedMovies[]>([])

  const renderItem = ({ item }: { item: ITopRatedMovies }) => (
    <ListTopRatedItem {...item} />
  )

  useEffect(() => {
    getTopRatedMovies()
      .then((movies) => {
        let top10 = movies.splice(0, 10)

        for (let movie of top10) {
          movie.index = top10.indexOf(movie) + 1
        }

        setTopRatedMovies(top10)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <FlatList
      horizontal
      keyExtractor={(item) => item.id.toString()}
      data={topRatedMovies}
      renderItem={renderItem}
      ListEmptyComponent={<Spinner />}
    />
  )
}
