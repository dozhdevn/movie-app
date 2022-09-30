import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  serviceItem: {
    marginBottom: 16,
  },
  icon: {
    width: 56,
    height: 56,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    overflow: 'hidden'
  },
  percentWrapper: {
    width: 0,
    height: 0,
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRightWidth: 27,
    borderTopWidth: 27,
    borderRightColor: 'transparent',
    borderTopColor: '#AAEF00',
    transform: [{ rotate: '90deg' }],
  },
  percent: {
    width: 40,
    height: 40,
    position: 'absolute',
    fontSize: 10,
    transform: [{rotate: '-40deg'}],
    top: -34,
    left: 7
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 16,
    marginTop: 6
  }
})