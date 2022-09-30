import React from 'react'
import { View, Text } from 'react-native'
import { MainLayout } from '../../layouts/MainLayout'
import { ServiceItem } from './components/ServiceItem/ServiceItem'
import { services } from './data'
import { styles } from './styles'

export const ServicesScreen = () => {
  return (
    <MainLayout>
      <Text style={styles.title}>Moscow</Text>

      <View style={styles.serviceWrapper}>
        {
          services.map(service => (
            <ServiceItem key={service.title} service={service} />
          ))
        }
      </View>
    </MainLayout>
  )
}
