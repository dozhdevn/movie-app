import axios from "axios";
import { ILoginData, IUserData } from "../interfaces";


export class UserService {
  static endpoint = 'http://localhost:4200/api/auth/login'

  static async login(loginData: ILoginData) {
    const { data } = await axios.post<IUserData>(this.endpoint, loginData)
    return data
  }
}