export type Restaurants = Restaurant[]

export interface Restaurant 
{
  id: number
  name: string
  address: string
  postalCode: string
  town: string
  schedules: Schedule[]
  tables: Table[]
}

export interface Schedule 
{
  id: number
  openHour: string
  closeHour: string
}

export interface Table 
{
  id: number
  numberPlace: number
  state?: string | null
}