import AuthStore from "./stores/AuthStore"
import UserStore from "./stores/UserStore"
import StoriesStore from "./stores/StoriesStore"
import CardsStore from "./stores/CardsStore"

export interface IUser {
  _id: string
  name: string
  username: string
  email: string
  password: string
}

export interface IUserData {
  user: IUser
}

export interface ILoginData {
  email: string
  password: string
}

export interface IStory {
  id: string
  title: string
  story: string
}

export interface ICard {
  balance: number
  cardNumber: string
  currency: string
  name: string

}

export interface IStore {
  auth: typeof AuthStore
  user: typeof UserStore
  stories: typeof StoriesStore
  cards: typeof CardsStore
}