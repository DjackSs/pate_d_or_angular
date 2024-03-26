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
