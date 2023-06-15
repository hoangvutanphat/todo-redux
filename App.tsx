import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import store from "./src/redux/store"
import { Provider } from 'react-redux'
import AddForm from './src/components/AddForm';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AddForm />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignContent: 'center',
    // justifyContent: 'center',
  },
});
