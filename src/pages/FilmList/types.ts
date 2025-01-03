export interface FilmDataType {
  message: string
  result: ResultFilmType[]
}

export interface ResultFilmType {
  properties: FilmType
  description: string
  _id: string
  uid: string
  __v: number
}

export interface FilmType {
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: string
  edited: string
  producer: string
  title: string
  episode_id: number
  director: string
  release_date: string
  opening_crawl: string
  url: string
}