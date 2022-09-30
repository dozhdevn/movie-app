import axios from "axios";
import { ICard } from "../interfaces";


export class CardsService {
  static async getCards() {
    const { data } = await axios.get<ICard[]>('https://632cd7b0519d17fb53b4c62d.mockapi.io/cards')

    return data
  }

  static async addCard(card: ICard) {
    const { data } = await axios.post('https://632cd7b0519d17fb53b4c62d.mockapi.io/cards', 
      card
    )
  }

  static async changeBalanceCard(id: string, balance: number) {
    await axios.put(`https://632cd7b0519d17fb53b4c62d.mockapi.io/cards/${id}`, 
    {balance}
    )
  }
}