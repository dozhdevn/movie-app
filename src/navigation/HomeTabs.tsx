import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AntDesign } from '@expo/vector-icons';

import { HomeScreen } from '../screens/HomeScreen/Home';
import { PaymentsScreen } from '../screens/PaymentsScreen/PaymentsScreen';
import { ServicesScreen } from '../screens/ServicesScreen/ServisesScreen';
import { SupportScreen } from '../screens/SupportScreen/SupportScreen';
import { MoreScreen } from '../screens/MoreScreen/MoreScreen';

const Tab = createBottomTabNavigator();

export const HomeTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        tabBarStyle: {
          backgroundColor: '#e9e9e9',
        },
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Home':
              return (
                <AntDesign name='home' size={size} color={color} />
              )
            case 'Payments':
              return (
                <AntDesign name='pay-circle1' size={size} color={color} />
              )
            case 'Services':
              return (
                <AntDesign name='switcher' size={size} color={color} />
              )
            case 'Support':
              return (
                <AntDesign name='message1' size={size} color={color} />
              )
            case 'More':
              return (
                <AntDesign name='ellipsis1' size={size} color={color} />
              )
          }
        }

      })}>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Payments' component={PaymentsScreen} />
      <Tab.Screen name='Services' component={ServicesScreen} />
      <Tab.Screen name='Support' component={SupportScreen} />
      <Tab.Screen name='More' component={MoreScreen} />
    </Tab.Navigator>
  )
}
