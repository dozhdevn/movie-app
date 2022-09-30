import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
 curencies: {
  backgroundColor: '#fff',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 12,
  borderRadius: 12,
  shadowColor: '#000',
	shadowOffset: {
		width: 0,
		height: 2,
	},
	shadowOpacity: 0.15,
	shadowRadius: 10,
	elevation: 5,
  marginHorizontal: 12
 },
 currencyItem: {
  flex: 1,
  marginRight: 4,
  fontSize: 12,
  flexDirection: 'row',
  justifyContent: 'center',
  shadowColor: '#000',
	shadowOffset: {
		width: 0,
		height: 2,
	},
	shadowOpacity: 0.15,
	shadowRadius: 10,
	elevation: 5,
 },
 value: {
   color: '#1F2937'
  },
  name: {
  marginRight: 4,
  color: '#9CA3AF'
 }
})