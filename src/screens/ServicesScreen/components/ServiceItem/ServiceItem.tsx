import React from 'react'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import { IService } from '../../data'
import { getRandomGradient } from '../../../../utils/getRandomGradient'

export const ServiceItem: React.FC<{ service: IService }> = ({ service }) => {
  return (
    <View style={styles.serviceItem}>
      <View style={styles.icon}>
        <LinearGradient colors={getRandomGradient()} style={styles.gradient}>
          <MaterialIcons name={service.iconName} size={30} color='#fff' />
          <View style={styles.percentWrapper}>
          <Text style={styles.percent}>{service.percent}%</Text>
          </View>
        </LinearGradient>
      </View>
        <Text style={styles.text}>{service.title}</Text>
    </View>
  )
}
