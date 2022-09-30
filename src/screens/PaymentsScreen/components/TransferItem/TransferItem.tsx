import { View, Text, Pressable, Alert } from 'react-native'
import React from 'react'
import { Avatar } from '../../../../components/Avatar'
import { styles } from './styles'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../../../stores'

interface TransferItemProps {
  name?: string
}

export const TransferItem: React.FC<TransferItemProps> = observer(({name}) => {

const { cards } = useStores()

  const onPress = () => {
    Alert.prompt(
      `Sum transfer for ${name}`, 'Enter the transfer amount:',
      (balance: string) => {
        const updateBalance = cards.cards[0].balance - (+balance)
        cards.changeBalanceCard(cards.cards[0].id, updateBalance)
      }
    )
  }

  return (
    <Pressable style={styles.transfer} onPress={onPress}>
      <Avatar size='lg' name={name}/>
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  )
})

