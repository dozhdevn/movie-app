import { View, Text, Pressable, Linking } from 'react-native'
import React from 'react'
import { IMoreItem } from '../../../../interfaces'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

interface MenuItemProps {
  item: IMoreItem
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <Pressable
      style={styles.menuItem}
      onPress={() => Linking.openURL(item.link)}>
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.icon}>
        <MaterialIcons name={item.iconName} size={22} color='#EDF4FE' />
      </View>
    </Pressable>
  )
}
