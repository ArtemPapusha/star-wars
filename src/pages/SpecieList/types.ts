export interface SpecieType {
  message: string
  result: Result
}

export interface Result {
  properties: Properties
  description: string
  _id: string
  uid: string
  __v: number
}

export interface Properties {
  classification: string
  designation: string
  average_height: string
  average_lifespan: string
  hair_colors: string
  skin_colors: string
  eye_colors: string
  homeworld: string
  language: string
  people: string[]
  created: string
  edited: string
  name: string
  url: string
}