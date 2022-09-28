import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src/navigation/Navigation';
import { LoginScreen } from './src/screens/LoginScreen/LoginScreen';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Navigation/>
      <StatusBar />
    </SafeAreaProvider>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});
