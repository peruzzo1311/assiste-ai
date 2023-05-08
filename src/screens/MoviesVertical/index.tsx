import {
  Box,
  Divider,
  FlatList,
  Modal,
  Pressable,
  Text,
  VStack,
} from 'native-base'
import React, { useEffect, useState } from 'react'

import {
  getGenreName,
  getPopularMovies,
  getSimilarMovies,
  getUpComingMovies,
} from '../../api/TMDB'
import Header from '../../components/Header'
import MoviesVerticalItem from '../../components/MoviesVerticalItem'
import Spinner from '../../components/Spinner'
import IListMovies from '../../interfaces/IListMovies'

type Props = {
  route: {
    params: {
      type: any
      movies?: IListMovies[]
    }
  }
}

export default function MoviesVertical({ route }: Props) {
  const [movieList, setMovieList] = useState<IListMovies[]>([])
  const [title, setTitle] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const { type, movies } = route.params

  const renderItem = ({ item }: { item: IListMovies }) => (
    <MoviesVerticalItem {...item} />
  )

  const getMovies = () => {
    switch (type) {
      case 'Populares':
        getPopularMovies(page)
          .then((movies) => {
            setMovieList([...movieList, ...movies])
            setTitle('Populares')

            setPage(page + 1)
          })
          .catch((error) => console.log(error.message))
        break

      case 'UpComing':
        getUpComingMovies(page)
          .then((movies) => {
            setMovieList([...movieList, ...movies])
            setTitle('Próximos lançamentos')

            setPage(page + 1)
          })
          .catch((error) => console.log(error.message))
        break

      case 'Pesquisa':
        setMovieList(movies)

        setTitle('Pesquisa')
        break

      default:
        getSimilarMovies(type, page)
          .then((movies) => {
            setMovieList([...movieList, ...movies])
            getGenreName(type).then((genre) => setTitle(genre))

            setPage(page + 1)
          })
          .catch((error) => console.log(error.message))
        break
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Box safeAreaTop flex={1} bg={'muted.900'} p={4}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={movieList}
        renderItem={renderItem}
        onEndReached={type != 'Pesquisa' && getMovies}
        onEndReachedThreshold={0.5}
        ListFooterComponent={type != 'Pesquisa' && <Spinner />}
        ListHeaderComponent={<Header title={title} movies={movies} />}
        stickyHeaderIndices={[0]}
      />
    </Box>
  )
}
