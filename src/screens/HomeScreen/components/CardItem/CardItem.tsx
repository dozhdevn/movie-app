import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { ICard } from '../../../../interfaces'
import { styles } from './styles'

import black from '../../../../../assets/images/black.png'
import airLines from '../../../../../assets/images/all-airlines.png'

interface CardItemProps {
  card: ICard
  withDivider: boolean
}

export const CardItem: React.FC<CardItemProps> = ({ card, withDivider }) => {
  return (
    <TouchableOpacity 
    onLongPress={() => console.log('HI')}
    style={[styles.cardItem, withDivider ? styles.divider : null]}>

      <View style={styles.outsideWrapperCurrency}>
        <View style={styles.insideWrapperCurrency}>
          <FontAwesome size={13} name={card.currency === 'RUB' ? 'ruble' : 'usd'} color='#488CF9' />
        </View>
      </View>

      <View style={styles.balanceWrapper}>
        <Text style={styles.name}>{card.name}</Text>
        <Text style={styles.balance}>{Intl.NumberFormat(undefined, {
          currency: card.currency,
          style: 'currency',
        }).format(card.balance)}</Text>
      </View>

      <ImageBackground
        source={card.name === 'Tinkoff Black' ? black : airLines}
        resizeMode='contain'
        style={styles.cardImage}>
        <Text style={styles.cardNumber}>{card.cardNumber.slice(-4)}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

