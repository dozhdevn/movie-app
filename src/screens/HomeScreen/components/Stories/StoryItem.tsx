import React from 'react'
import { ImageBackground, Pressable, View, Text } from 'react-native'
import { IStory } from '../../../../interfaces'
import { styles } from './styles'

export const StoryItem: React.FC<{ story: IStory }> = ({ story }) => {
  return (
    <Pressable>
      <View style={styles.storyWrapper}>
        <ImageBackground
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 12 }}
          source={{ uri: story.story }}
          resizeMode='cover'>
          <Text style={styles.title}>{story.title}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  )
}
