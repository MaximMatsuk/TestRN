import { StyleSheet, View } from 'react-native';
import { Home } from './screens/Home/Home';

function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
