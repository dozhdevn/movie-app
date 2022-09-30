import { View, Text } from 'react-native'
import React from 'react'
import { menu } from './list'
import { MenuItem } from './MenuItem'

export const Menu: React.FC = () => {
  return (
    <View>
      {
        menu.map(item => (
          <MenuItem key={item.title} item={item}/>
        ))
      }
    </View>
  )
}
