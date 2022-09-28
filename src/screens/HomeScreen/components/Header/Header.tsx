import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { Avatar } from '../../../../components/Avatar'
import { styles } from './styles'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../../../stores'
import { useNavigation } from '@react-navigation/native'
import { Loader } from '../../../../components/Loader'

export const Header: React.FC = observer(() => {

	const { user: userData } = useStores()
	const { user, userLoading } = userData

	const { navigate } = useNavigation()

	useEffect(() => {
		userData.getUser()
	}, [])

	return userLoading ? <Loader/> 
	: (
		<View style={styles.header}>
			<Avatar name={user?.name} />
			<TouchableOpacity style={styles.name}
				onPress={() => navigate('Profile')}
			>
				<Text style={styles.text}>{user?.name}</Text>
				<Entypo
					name='chevron-small-right'
					size={28}
					style={{ color: '#293B57' }}
				/>
			</TouchableOpacity>
		</View>
	)
})
