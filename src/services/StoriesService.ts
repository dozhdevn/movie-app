import axios from "axios";
import { IStory } from "../interfaces";


export class StoriesService {
  static async getStories () {
    const { data } = await axios.get<IStory[]>('https://632cd7b0519d17fb53b4c62d.mockapi.io/stories')

    return data
  }
}