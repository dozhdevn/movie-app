import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Heading } from '../../../../components/Heading'
import { otherItems } from './data'
import { OtherItem } from '../OtherItem/OtherItem'
import { styles } from './styles'

export const Other: React.FC = () => {
  return (
    <View>
      <Heading title='Important transfers' />

      <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.otherScroll}
      >
        {otherItems.map(item => (
          <OtherItem key={item.title} item={item} />
        ))}
      </ScrollView>
    </View>
  )
}
