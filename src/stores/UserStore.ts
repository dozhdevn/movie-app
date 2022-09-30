import { action, makeObservable, observable } from "mobx";
import { IUser } from "../interfaces";
import { UserService } from "../services/UserService";

class UserStore {
	user: IUser | null = null

	userLoading: boolean = false

	userUpdateLoading: boolean = false

	userError: boolean = false

	constructor() {
		makeObservable(this, {
			user: observable,
			userLoading: observable,
			userUpdateLoading: observable,
			userError: observable,
			getUser: action,
			setUser: action,
			updateUser: action
		})
	}

	getUser = async () => {
		try {
			this.userLoading = true
			const data = await UserService.getUserData()
			this.setUser(data)
		} catch (error) {
			this.userError = true
		}
	}

	setUser = (data: IUser) => {
		this.user = data
		this.userLoading = false
		this.userUpdateLoading = false
	}

	updateUser = async (name: string) => {
		try {
			this.userUpdateLoading = true
			const data = await UserService.updateUser(name)
			this.setUser(data)
		} catch (error) {
			console.log('Что-то пошло не так')
		}
	}
}

export default new UserStore()