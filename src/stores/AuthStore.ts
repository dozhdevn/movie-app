import { action, makeObservable, observable, computed } from "mobx";
import { ILoginData, IUserData } from "../interfaces";
import { UserService } from "../services/UserService";

const fakeUser = {
  email: 'test',
  password: '123321'
}

class AuthStore {
  auth = false

  constructor() {
    makeObservable(this, {
      auth: observable,
      login: action,
      logOut: action
    })
  }

  login = (loginData: ILoginData) => {
    if(loginData.email.toLowerCase() === fakeUser.email && loginData.password === fakeUser.password) {
      this.auth = true
      return
    }
    this.auth = false
  }

  logOut = () => {
    this.auth = false
  }
}

export default new AuthStore()