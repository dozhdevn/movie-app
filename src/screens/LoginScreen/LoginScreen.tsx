import React from 'react'
import { observer } from 'mobx-react-lite'

import { Text, View } from 'react-native';
import { styles } from './styles';
import { LoginForm } from './LoginForm/LoginForms';


export const LoginScreen = observer((): JSX.Element => {

  return (
    <View style={styles.screen}>
      <View style={styles.wrapper}>
        <View style={styles.form}>
          <Text style={styles.title}>Sing In</Text>
          <LoginForm />
        </View>
      </View>
    </View>
  )
})
