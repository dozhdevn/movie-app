import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../../../stores'
import { Loader } from '../../../../components/Loader'

export const Currencies: React.FC = observer(() => {
  const { currencies: currenciesData } = useStores()
  const { currencies, getCurrencies, currenciesLoading} = currenciesData

  useEffect(() => {
    getCurrencies()
  }, [])

  return (
    <View style={styles.curencies}>
      { currenciesLoading ? <Loader/> :
          currencies.map(c => (
          <View key ={c.name} style={styles.currencyItem}>
            <Text style={styles.name}>{c.name}</Text>
            <Text style={styles.value}>{c.value}</Text>
          </View>
        ))
      }
    </View>
  )
})
