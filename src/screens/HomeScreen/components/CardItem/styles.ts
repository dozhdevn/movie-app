import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
    paddingBottom: 20
  },
  divider: {
    borderBottomColor: '#E0E1E2',
    borderBottomWidth: 1,
    marginBottom: 24
  },
  outsideWrapperCurrency: {
    borderRadius: 100,
    width: 36,
    height: 36,
    backgroundColor: '#4287f5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  insideWrapperCurrency: {
    borderRadius: 100,
    width: 20,
    height: 20,
    backgroundColor: '#EDF4FE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  balanceWrapper: {
    width: '66%'
  },
  name: {
    fontSize: 15
  },
  balance: {
    fontWeight: '700'
  },
  cardImage: {
    justifyContent: 'flex-end',
    padding: 4.5,
    width: 56,
    height: 40,
  },
  cardNumber: {
    color: '#ffffff',
    fontWeight: '500'
  }
})