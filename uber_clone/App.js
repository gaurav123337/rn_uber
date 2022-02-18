import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './app/store'
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={ }>
      <View style={styles.container}>
        <Text>Let's build Uber</Text>
        <StatusBar style='auto' />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
