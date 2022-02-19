import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { store } from './store';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TailwindProvider utilities={utilities}>
          <SafeAreaProvider>
            <HomeScreen />
          </SafeAreaProvider>
        </TailwindProvider>
      </NavigationContainer>
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
