import AuthStore from "./stores/AuthStore"
import UserStore from "./stores/UserStore"
import StoriesStore from "./stores/StoriesStore"
import CardsStore from "./stores/CardsStore"
import CurrenciesStore from "./stores/CurrenciesStore"
import { MaterialIcons } from '@expo/vector-icons'

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
  id: string
  balance: number
  cardNumber: string
  currency: string
  name: string

}

export interface QueryCurrencies {
  apikey: string
  timestamp: number
  base_currency: string
}

export interface CurrenciesResponse  {
  query: QueryCurrencies
  data: {
    USD: number
    EUR: number
    GBP: number
  }
}

export type Currency = {
	name: 'USD' | 'EUR' | 'GBP'
  value: string | number
}

export interface IMoreItem {
	title: string
	description: string
	iconName: keyof typeof MaterialIcons.glyphMap
	link: string
}

export interface IStore {
  auth: typeof AuthStore
  user: typeof UserStore
  stories: typeof StoriesStore
  cards: typeof CardsStore
  currencies: typeof CurrenciesStore
}