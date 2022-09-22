import  UserStore  from "./stores/UserStores"

interface IUser {
  _id: string
  email: string
  isAdmin: boolean
}

export interface IUserData {
  user: IUser
}

export interface ILoginData {
  email: string
  password: string
}

export interface IStore {
  user: typeof UserStore
}