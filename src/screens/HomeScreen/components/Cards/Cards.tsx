import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from './styles'
import { ApplyNewProduct } from '../ApplyNewProduct/ApplyNewProduct'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../../../stores'
import { Loader } from '../../../../components/Loader'
import { CardItem } from '../CardItem/CardItem'

export const Cards = observer(() => {

  const { cards: cardsData } = useStores()
  const { cards, getCards, cardsLoading, addCard } = cardsData

  useEffect(() => {
    getCards()
  }, [])

  const loader = cardsLoading ? <Loader /> : null
  const content = !cardsLoading ? cards.map((card, i) => (
    <CardItem key={card.cardNumber} card={card} withDivider={cards.length !== i + 1}/>
  )) : null

  return (
    <View style={styles.cardsWrapper}>
      {loader}
      {
        cards.length ? content : <Text>You don`t have cards</Text>
      }
      <ApplyNewProduct addCard={addCard}/>
    </View>
  )
})

