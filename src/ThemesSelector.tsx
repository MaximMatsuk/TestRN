import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const ThemesSelector = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Themes</Text>
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
  },
});
