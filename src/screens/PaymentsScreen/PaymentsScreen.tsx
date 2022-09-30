import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { MainLayout } from '../../layouts/MainLayout'
import { Heading } from '../../components/Heading';
import { SubHeading } from '../../components/SubHeading';
import { Transfers } from './components/Transfers/Transfers';
import { Other } from './components/Other/Other';


export const PaymentsScreen = () => {

  return (
    <MainLayout>
      <Heading title='Payments'/>
      <Transfers/>
      <Other/>
    </MainLayout>
  )
}
