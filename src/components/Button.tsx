import React from 'react'
import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  disabled: boolean
  title: string
  onPress: () => void
}

export const Button: React.FC<ButtonProps> = ({ title, disabled, onPress }): JSX.Element => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={{
        backgroundColor: '#fde047',
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
        fontWeight: '700'
      }}>{title}</Text>
    </TouchableOpacity>
  )
}