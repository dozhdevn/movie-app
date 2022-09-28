import React from 'react'
import { Text } from 'react-native'

interface HeadingProps {
  title: string
  isCenter?: boolean
  style?: any
}

export const Heading: React.FC<HeadingProps> = ({ title, isCenter = false, style }) => {
  return (
    <Text style={{
      fontSize: 24,
      marginBottom: 20,
      fontWeight: '700',
      color: '#1F2937',
      textAlign: isCenter ? 'center' : 'auto',
      ...style
    }}>{title}</Text>
  )
}
