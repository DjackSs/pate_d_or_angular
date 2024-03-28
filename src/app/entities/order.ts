export type Orders = Order[];


export interface Order {
    id: number
    state: string
    table: OrderTable
    dishes: Dish[]
  }
  
  export interface OrderTable {
    id: number
    numberPlace: number
    state: string
    restaurant: Restaurant
  }
  
  export interface Restaurant {
    id: number
    name: string
    address: string
    postalCode: string
    town: string
    card: Card
  }
  
  export interface Card {
    id: number
    name: string
    dishes: Dish[]
  }
  
  export interface Dish {
    id: number
    name: string
    price: number
    description: string
    category: string
  }
  
