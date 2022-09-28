import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { RefreshControl, ScrollView } from 'react-native'
import { MainLayout } from '../../layouts/MainLayout'
import { useStores } from '../../stores'
import { Cards } from './components/Cards/Cards'
import { Header } from './components/Header/Header'
import { Stories } from './components/Stories/Stories'

export const HomeScreen = observer(() => {

  const { stories, user, cards } = useStores()
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    user.getUser()
    stories.getStories()
    cards.getCards()
    setRefreshing(false)
  }

  return (
    <MainLayout>
      <ScrollView
      refreshControl={
        <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}/>
      }>
        <Header />
        <Stories />
        <Cards />
      </ScrollView>
    </MainLayout>
  )
})
