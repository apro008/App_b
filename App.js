import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigator/index.js';

export default function App() {
  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
