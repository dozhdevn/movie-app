import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import { useStores } from '../stores';
import { HomeTabs } from './HomeTabs'

import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';
import { RootStackParamList } from './types';

export const Navigation: React.FC = observer(() => {

  const { auth } = useStores()

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        {
          auth.auth ?
              <>
                <Stack.Screen name='Main' component={HomeTabs} />
                <Stack.Screen name='Profile' component={ProfileScreen} />
              </>
             :
            <Stack.Screen name='Login' component={LoginScreen} />
        } 
      </Stack.Navigator>
    </NavigationContainer>
  )
})
