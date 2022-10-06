import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'

interface HeadingProps {
  title: string
  isCenter?: boolean
  style?: StyleProp<TextStyle>
}

export const Heading: React.FC<HeadingProps> = ({ title, isCenter = false, style }) => {
  return (
    <Text style={[{
      fontSize: 24,
      marginBottom: 20,
      marginLeft: 16,
      fontWeight: '700',
      color: '#1F2937',
      textAlign: isCenter ? 'center' : 'auto'
    }, style]}>{title}</Text>
  )
}
