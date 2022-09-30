import { action, makeObservable, observable } from "mobx"
import { Currency } from "../interfaces"
import { CurrenciesSevice } from "../services/CurrenciesService"


class CurrenciesStore {
  currencies: Currency[] = []

  currenciesLoading: boolean = false

  constructor() {
    makeObservable(this, {
      currencies: observable,
      currenciesLoading: observable,
      getCurrencies: action,
      setCurrencies: action,
    })
  }

  getCurrencies = async () => {
    try {
      this.currenciesLoading = true
      const data = await CurrenciesSevice.getCurrencies()
      const currencies: Currency[] = [
        {
          name: 'USD',
          value: (1 / data.data.USD).toFixed(2)
        },
        {
          name: 'EUR',
          value: (1 / data.data.EUR).toFixed(2)
        },
        {
          name: 'GBP',
          value: (1 / data.data.GBP).toFixed(2)
        }
      ]
      this.setCurrencies(currencies)
    } catch (error) {
      console.log('Ошибка при получении валют')
    }
  }

  setCurrencies = (data: Currency[]) => {
    this.currenciesLoading = false
    this.currencies = data
  }
}

export default new CurrenciesStore()