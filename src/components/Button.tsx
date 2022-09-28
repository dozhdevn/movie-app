import React from 'react'
import { Text, TouchableHighlight, TouchableOpacity } from "react-native";

interface ButtonProps {
  primary?: boolean
  disabled?: boolean
  title: string
  onPress: () => void
}

export const Button: React.FC<ButtonProps> = ({ title, disabled = false, onPress, primary = false }): JSX.Element => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        backgroundColor: primary ? '#fde047' : '#e5e7eb',
        width: '100%',
        padding: 12,
        marginBottom: 16,
        marginTop: 16,
        borderRadius: 12,
      }}
    >
      <Text style={{
        textAlign: 'center',
        color: '#1f2937',
        fontSize: 14,
      }}>{title}</Text>
    </TouchableOpacity>
  )
}