import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  menuItem: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
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
  info: {
    width: '83.3333%'
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937'
  },
  description: {
    marginTop: 4,
    color: '#6B7280',
    opacity: 0.9
  },
  icon: {
    backgroundColor: '#3482F6',
    borderRadius: 100,
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center'
  }
})