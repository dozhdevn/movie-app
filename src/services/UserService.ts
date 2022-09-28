import axios from "axios";
import { IUser } from "../interfaces";

export class UserService {
  static userDataEndpoint = `https://632cd7b0519d17fb53b4c62d.mockapi.io/users/1`

  static async getUserData() {
    const { data } = await axios.get<IUser>(this.userDataEndpoint)

    return data
  }

  static async updateUser(name: string) {
    const { data } = await axios.put<IUser>(this.userDataEndpoint, {
      name
    })
    return data
  }
}