import React from 'react'
import { View, Text, Pressable, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { IOtherItem } from '../Other/data'
import { styles } from './styles'

interface OtherItemProps {
  item: IOtherItem
}

export const OtherItem: React.FC<OtherItemProps> = ({ item }) => {

  const onPress = () => {
    Alert.prompt(
      `Sum transfer for ${item.title}`, 'Enter the transfer amount:'
    )
  }

  return (
    <Pressable style={styles.otherItem} onPress={onPress}>
      <View style={styles.icon}>
        <AntDesign name={item.iconName} size={19} color='#EDF4FE'/>
      </View>
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  )
}
