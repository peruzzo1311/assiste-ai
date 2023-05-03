import axios from 'axios'
import ISingleMovie from '../interfaces/ISingleMovie'

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

export async function getPopularMovies() {
  const config = {
    method: 'GET',
    url: `${baseUrl}trending/all/week?api_key=${apiKey}&language=pt-BR&region=BR&page=1`,
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

export async function getMovieDetails(movieId: Number): Promise<ISingleMovie> {
  const config = {
    method: 'GET',
    url: `${baseUrl}movie/${movieId}?api_key=${apiKey}&language=pt-BR`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.log(err)
    })
}

export async function getWatchProviders(movieId: Number) {
  const config = {
    method: 'GET',
    url: `${baseUrl}movie/${movieId}/watch/providers?api_key=${apiKey}`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => {
      if (response.data.results.BR) {
        return response.data.results.BR.buy
      } else {
        return response.data.results.US.buy
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

export async function getCredits(movieId: Number) {
  const config = {
    method: 'GET',
    url: `${baseUrl}movie/${movieId}/credits?api_key=${apiKey}`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => {
      return response.data.cast
    })
    .catch((err) => {
      console.log(err)
    })
}

export async function getSimilarMovies(idGenre: Number) {
  const config = {
    method: 'GET',
    url: `${baseUrl}discover/movie?with_genres=${idGenre}&api_key=${apiKey}&language=pt-BR&region=BR`,
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
