import { View, Text } from 'react-native'
import React from 'react'

interface SubHeadingProps {
  title: string
}

export const SubHeading: React.FC<SubHeadingProps> = ({ title }) => {
  return (
    <Text style={{
      fontWeight: '700',
      marginLeft: 16,
      fontSize: 20,
      color: '#1F2937'
    }}>{title}</Text>
  )
}
