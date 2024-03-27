export type Reservations = Reservation[];

export interface Reservation {
  id: number;
  reservationTime: string;
  state: string;
  table: Table;
  user: User;
}

export interface Table {
  id: number;
  numberPlace: number;
  state: string;
  restaurant: Restaurant;
}

export interface Restaurant {
  id: number;
  name: string;
  address: string;
  postalCode: string;
  town: string;
  card: Card;
}

export interface Card {
  id: number;
  name: string;
  dishes: Dish[];
}

export interface Dish {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  token: any;
  expirationTime: any;
  role: string;
  messages: Message[];
}

export interface Message {
  id: number;
  object: string;
  content: string;
}
