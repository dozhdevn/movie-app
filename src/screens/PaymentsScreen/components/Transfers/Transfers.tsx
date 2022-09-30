import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import * as Contacts from 'expo-contacts';
import { SubHeading } from '../../../../components/SubHeading'
import { styles } from './styles'
import { TransferItem } from '../TransferItem/TransferItem';

export const Transfers: React.FC = () => {

  const [contacts, setContacts] = useState<Contacts.Contact[]>([])

  useEffect(() => {
    ( async () => {
      const { data } = await Contacts.getContactsAsync()
      setContacts(data)
    })()
  }, [])

  return (
    <View style={styles.transfersWrapper}>
      <SubHeading title='Phone transfers'/>

      <ScrollView 
      style={{marginTop: 30}}
      horizontal
      showsHorizontalScrollIndicator={false}>
        {
          contacts.map(c => (
            <TransferItem key={c.id} name={c.firstName}/>
          ))
        }
      </ScrollView>
    </View>
  )
}

