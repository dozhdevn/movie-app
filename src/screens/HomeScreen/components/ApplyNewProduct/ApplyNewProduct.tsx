import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from '../../../../components/Button'
import { ICard } from '../../../../interfaces'
import { getRandomCardNumber } from '../../../../utils/getEandomCardNumber'


export const ApplyNewProduct:React.FC<{addCard:(card: ICard) => void}> = ({addCard}) => {

  const [currency, setCurrency] = useState<string | null>(null)
  const [cardType, setCardType] = useState<string | null>(null)

  const clickAlert = () => {
    Alert.alert(
      'Currency',
      'Select account currency',
      [
        {
          text: 'RUB',
          onPress: () => setCurrency('RUB')
        },
        {
          text: 'USD',
          onPress: () => setCurrency('USD')
        }
      ],
      {
        cancelable: false
      }
    )
    Alert.alert(
      'Card Type',
      'Select card type',
      [
        {
          text: 'Black',
          onPress: () => setCardType('Tinkoff Black')
        },
        {
          text: 'All airlines',
          onPress: () => setCardType('Tinkoff All Airlines')
        }
      ],
      {
        cancelable: false
      }
    )
    
  }    

  useEffect(() => {
    if(currency && cardType) {
      addCard({
        currency, name: cardType, balance: 0, cardNumber: getRandomCardNumber()})
      setCurrency(null)
      setCardType(null)
    }
  }, [currency, cardType])

  return (
    <Button title='Apply for a new product' onPress={clickAlert} primary />
  )
}
