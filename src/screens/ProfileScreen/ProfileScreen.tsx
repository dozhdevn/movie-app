import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Ionicons } from '@expo/vector-icons';

import { View, TextInput } from 'react-native'
import { Button } from '../../components/Button'
import { useStores } from '../../stores'
import { Heading } from '../../components/Heading'
import { styles } from './styles'
import { Loader } from '../../components/Loader'
import { useNavigation } from '@react-navigation/native';


export const ProfileScreen: React.FC = observer(() => {

  const navigation = useNavigation()

  const { auth, user: userData } = useStores()
  const { userUpdateLoading, updateUser, user } = userData

  const [name, setName] = useState(user?.name)

  const onChange = (text: string) => {
    setName(text)
  }

  const handleUpdateUser = () => {
    name && updateUser(name)
  }

  const logOut = () => {
    auth.logOut()
  }

  const loading = userUpdateLoading ? <Loader /> : null
  const content = !userUpdateLoading ? (
    <>
      <TextInput style={styles.input} value={name} onChangeText={onChange} />
      <Button title='Update profile' onPress={handleUpdateUser} primary disabled={userUpdateLoading} />
      <Button title='Log Out' onPress={logOut} />
    </>
  ) : null

  return (
    <View style={styles.profileContainer}>
      <Ionicons
          style={styles.iconBack}
          name="chevron-back"
          size={24}
          color="black"
          onPress={() => navigation.goBack()} />
        <Heading title='Profile' isCenter />
      {loading}
      {content}
    </View>
  )
})
