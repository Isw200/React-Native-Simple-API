import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contact from './components/Contact';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <Contact />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  },
  title: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: '600',
  }
});
