import React from 'react'
import { View, Text } from 'react-native'

interface AvatarProps {
    name?: string
    size?: 'sm' | 'lg'
}

export const Avatar: React.FC<AvatarProps> = ({ name, size = 'sm' }) => {

    const isSmall = size === 'sm'

    return (
        <View style={{
            backgroundColor: '#DBDDE3',
            borderRadius: 50,
            width: isSmall ? 48 : 54,
            height: isSmall ? 48 : 54,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text
                style={{
                    color: '#FFFFFF',
                    fontSize: isSmall ? 22 : 24,
                    fontWeight: '700'
                }}
            >{name?.slice(0, 1)}
            </Text>
        </View>
    )
}
