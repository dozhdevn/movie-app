import React from 'react'
import { Heading } from '../../components/Heading'
import { MainLayout } from '../../layouts/MainLayout'
import { Currencies } from './components/Currencies/Currencies'
import { Menu } from './components/Menu/Menu'

export const MoreScreen = () => {

  return (
    <MainLayout>
      <Heading title='More'/>
      <Currencies/>
      <Menu/>
    </MainLayout>
  )
}
