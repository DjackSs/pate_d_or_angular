export type Orders = Order[];


export class Order {
    id!: number
    state!: string
    table!: OrderTable
    dishes!: Dish[]
  }
  
  export class OrderTable {
    id!: number
    numberPlace!: number
    state!: string
    restaurant!: Restaurant
  }
  
  export class Restaurant {
    id!: number
    name!: string
    address!: string
    postalCode!: string
    town!: string
    card!: Card
  }
  
  export class Card {
    id!: number
    name!: string
    dishes!: Dish[]
  }
  
  export class Dish {
    id!: number
    name!: string
    price!: number
    description!: string
    category!: string
  }
  
