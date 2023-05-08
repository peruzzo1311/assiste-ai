export default interface IListMovies {
  id: number
  title: string
  poster_path: string
  backdrop_path: string
  index?: number
  genres?: [
    {
      id: number
      name: string
    }
  ]
  genre_ids?: number[]
  vote_average?: number
  release_date?: string
  popularity?: number
}
