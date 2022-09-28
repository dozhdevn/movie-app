import { action, makeObservable, observable } from "mobx"
import { IStory } from "../interfaces"
import { StoriesService} from "../services/StoriesService"


export class StoriesStore {
  stories: IStory[] = []

  storiesLoading: boolean = false

  constructor() {
    makeObservable(this, {
      stories: observable,
      storiesLoading: observable,
      getStories: action,
      setStories: action
    })
  }
  getStories = async () => {
    try {
      this.storiesLoading = true
      const data = await StoriesService.getStories()
      this.setStories(data)
    } catch (error) {
      console.log('Произошла ошибка')
    }
  }

  setStories = (data: IStory[]) => {
    this.stories = data
    this.storiesLoading = false
  }
}

export default new StoriesStore()