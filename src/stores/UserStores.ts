import { action, makeObservable, observable, computed } from "mobx";
import { ILoginData, IUserData } from "../interfaces";
import { UserService } from "../services/UserService";

const fakeUser = {
  email: 'test',
  password: '123321'
}

class UserStore {
  auth = false

  constructor() {
    makeObservable(this, {
      auth: observable,
      login: action
    })
  }

  login = (loginData: ILoginData) => {
    if(loginData.email === fakeUser.email && loginData.password === fakeUser.password) {
      this.auth = true
      return
    }
    this.auth = false
  }
}

export default new UserStore()