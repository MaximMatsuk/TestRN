import { StyleSheet, View } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Themes } from './screens/Themes/Themes';
import { Home } from './screens/Home/Home';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Themes: Themes,
  },
  screenOptions: {
    headerShown: false,
  },
});

const Navigation = createStaticNavigation(RootStack);

function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
