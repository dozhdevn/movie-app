import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  otherItem: {
    marginLeft: 16,
    padding: 8,
    width: 96,
    height: 96,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  icon: {
    backgroundColor: '#3482F6',
    borderRadius: 100,
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 12,
    marginTop: 6
  }
})