export interface VehicleType {
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
  model: string
  vehicle_class: string
  manufacturer: string
  cost_in_credits: string
  length: string
  crew: string
  passengers: string
  max_atmosphering_speed: string
  cargo_capacity: string
  consumables: string
  films: string[]
  pilots: string[]
  created: string
  edited: string
  name: string
  url: string
}