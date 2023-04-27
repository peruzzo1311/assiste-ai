import axios from 'axios'

const apiKey = 'da4caceeacb093a5ca93483f8d5451b4'
const baseUrl = 'https://api.themoviedb.org/3/'

export async function getTopRatedMovies() {
  const config = {
    method: 'GET',
    url: `${baseUrl}movie/top_rated?api_key=${apiKey}&language=pt-BR&region=BR`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => {
      return response.data.results
    })
    .catch((err) => {
      console.log(err)
    })
}

export async function getPopularMovies(page: number) {
  const config = {
    method: 'GET',
    url: `${baseUrl}movie/popular?api_key=${apiKey}&language=pt-BR&region=BR&page=${page}`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => {
      return response.data.results
    })
    .catch((err) => {
      console.log(err)
    })
}

export async function getGenresName() {
  const config = {
    method: 'GET',
    url: `${baseUrl}genre/movie/list?api_key=${apiKey}&language=pt-BR`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => {
      return response.data.genres
    })
    .catch((err) => {
      console.log(err)
    })
}
