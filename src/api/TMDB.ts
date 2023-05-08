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
    .then((response) => response.data.results)
    .catch((err) => console.log(err))
}

export async function getPopularMovies(page: number) {
  const config = {
    method: 'GET',
    url: `${baseUrl}trending/all/week?api_key=${apiKey}&language=pt-BR&region=BR&page=${page}`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => response.data.results)
    .catch((err) => console.log(err))
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
    .then((response) => response.data.genres)
    .catch((err) => console.log(err))
}

export async function getGenreName(id: number) {
  const config = {
    method: 'GET',
    url: `${baseUrl}genre/movie/list?api_key=${apiKey}&language=pt-BR`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => {
      const genre = response.data.genres.find((genre) => genre.id === id)

      return genre.name
    })
    .catch((err) => {
      console.log(err)
    })
}

export async function getMovieDetails(movieId: number): Promise<ISingleMovie> {
  const config = {
    method: 'GET',
    url: `${baseUrl}movie/${movieId}?api_key=${apiKey}&language=pt-BR`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => response.data)
    .catch((err) => console.log(err))
}

export async function getWatchProviders(movieId: number) {
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

export async function getCredits(movieId: number) {
  const config = {
    method: 'GET',
    url: `${baseUrl}movie/${movieId}/credits?api_key=${apiKey}`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => response.data.cast)
    .catch((err) => console.log(err))
}

export async function getSimilarMovies(idGenre: number, page: number) {
  const config = {
    method: 'GET',
    url: `${baseUrl}discover/movie?with_genres=${idGenre}&api_key=${apiKey}&language=pt-BR&region=BR&page=${page}`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => response.data.results)
    .catch((err) => console.log(err))
}

export async function getTrailer(id: number) {
  const config = {
    method: 'GET',
    url: `${baseUrl}movie/${id}/videos?api_key=${apiKey}&language=pt-BR`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => {
      const res = {
        key: response.data.results[0].key,
        site: response.data.results[0].site,
      }

      return res
    })
    .catch((err) => console.log(err))
}

export async function getUpComingMovies(page: number) {
  const config = {
    method: 'GET',
    url: `${baseUrl}movie/upcoming?api_key=${apiKey}&language=pt-BR&region=BR&page=${page}`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => response.data.results)
    .catch((err) => console.log(err))
}

export async function getPerson(id: number) {
  const config = {
    method: 'GET',
    url: `${baseUrl}person/${id}?api_key=${apiKey}&language=pt-BR`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => response.data)
    .catch((err) => console.log(err))
}

export async function getPersonMovies(id: number) {
  const config = {
    method: 'GET',
    url: `${baseUrl}person/${id}/combined_credits?api_key=${apiKey}&language=pt-BR`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => response.data.cast)
    .catch((err) => console.log(err))
}

export async function getSearchMovies(Search: string) {
  const config = {
    method: 'GET',
    url: `${baseUrl}search/movie?api_key=${apiKey}&language=pt-BR&query=${Search}&page=1`,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  return await axios(config)
    .then((response) => response.data.results)
    .catch((err) => console.log(err))
}
