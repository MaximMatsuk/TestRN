import { Image, Text, View, StyleSheet } from 'react-native';
import { Item } from './types';

export const Course = ({ item }: { item: Item }) => {
  return (
    <View style={[styles.container, { backgroundColor: item.bgColor }]}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.nameContainer}>
        <Text>{item.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    alignItems: 'center',
    alignSelf: 'flex-start',

    shadowColor: '#E5E8FE',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },
  image: {
    width: 144,
    height: 144,
    marginHorizontal: 33,
    marginVertical: 9,
  },
  nameContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    width: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
});
