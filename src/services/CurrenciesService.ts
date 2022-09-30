import axios from "axios"
import { CurrenciesResponse } from "../interfaces"

const API_KEY = 'pQh0WzqwM9JPAkW2bcCvUVKMSNMQEsopcDtb6tCB'
//@ts-ignore
const URL = `https://freecurrencyapi.net/api/v2/latest?apikey=${API_KEY}`

export class CurrenciesSevice {
  static async getCurrencies() {
    const { data } = await axios.get<CurrenciesResponse>(`${URL}&base_currency=RUB`)

    return data
  }
}