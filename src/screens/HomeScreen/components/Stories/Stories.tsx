import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { useStores } from '../../../../stores'
import { StoryItem } from './StoryItem'


export const Stories: React.FC = observer(() => {

  const { stories } = useStores()

  useEffect(() => {
    stories.getStories()
  }, [])

  return (
    <View style={{ marginBottom: 38, marginTop: 28 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          stories.stories.map(story => (
            <StoryItem key={story.id} story={story} />
          ))
        }
      </ScrollView>
    </View>
  )
})
