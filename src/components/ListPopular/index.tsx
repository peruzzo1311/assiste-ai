import { FlatList, Spinner, VStack } from 'native-base'
import React, { useEffect, useState } from 'react'

import { getGenresName, getPopularMovies } from '../../api/TMDB'
import IGenres from '../../interfaces/IGenres'
import IPopularMovies from '../../interfaces/IPopularMovies'
import ListPopularItem from '../ListPopularItem'

export default function ListPopular() {
  const [popularMovies, setPopularMovies] = useState<IPopularMovies[]>([])
  const [genres, setGenres] = useState<IGenres[]>([])
  const [page, setPage] = useState<number>(1)

  const getGenresNames = (genresIds: number[]): string[] => {
    var genreNames: string[] = []

    genresIds.forEach((genreId) => {
      const genre = genres.find((genre) => genre.id === genreId)

      if (genre) {
        genreNames.push(genre.name)
      }
    })

    genreNames = genreNames.slice(0, 2)

    return genreNames
  }

  const addGenreNames = (movies: IPopularMovies[]): IPopularMovies[] => {
    movies.forEach((movie) => {
      try {
        const genreNames = getGenresNames(movie.genre_ids)

        movie.genre_names = genreNames
      } catch (error) {
        console.error(error.message)
      }
    })

    return movies
  }

  const renderItem = ({ item }: { item: IPopularMovies }) => (
    <ListPopularItem {...item} />
  )

  const getMovies = () => {
    console.log('requisição')

    getPopularMovies(page)
      .then((movies) => {
        setPopularMovies((prev) => {
          const newMovies = movies.filter(
            (movie: IPopularMovies) =>
              !prev.some((prevMovie) => prevMovie.id === movie.id)
          )

          return [...prev, ...new Set<IPopularMovies>(newMovies)]
        })
        setPage((prev) => prev + 1)
      })
      .catch((error) => console.log(error.message))
  }

  useEffect(() => {
    getGenresName()
      .then((genres) => setGenres(genres))
      .catch((error) => console.log(error.message))

    getMovies()
  }, [])

  const data: IPopularMovies[] = addGenreNames(popularMovies)

  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={data}
      renderItem={renderItem}
      onEndReached={getMovies}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <Spinner
          color={'#FFCC00'}
          size={'lg'}
          marginBottom={24}
          marginTop={4}
        />
      }
    />
  )
}
