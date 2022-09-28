import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

type Props = {
  children?: React.ReactNode
};

export const MainLayout: React.FC<Props> = ({children}) => {
  return (
    <View style={styles.layout}>
      {children}
    </View>
  )
}