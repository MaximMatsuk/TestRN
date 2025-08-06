import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ArrowDown from '../../assets/arrow.svg';
import { useNavigation } from '@react-navigation/native';

export const ThemesSelector = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Themes');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Themes</Text>
      <ArrowDown />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    backgroundColor: '#00000033',
    paddingVertical: 5,
    paddingLeft: 10,
    paddingRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 40,
  },
  text: {
    color: '#FFFFFF',
    marginRight: 3,
  },
});
