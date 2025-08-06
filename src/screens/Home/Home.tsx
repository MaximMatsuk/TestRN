import { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View, StyleSheet } from 'react-native';

import { Item } from '../../types';
import { ThemesSelector } from './ThemesSelector';
import { Course } from './Course';

export const Home = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://logiclike.com/docs/courses.json');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.themesSelectorContainer}>
        <ThemesSelector />
      </View>
      <FlatList
        data={data}
        style={styles.list}
        renderItem={Course}
        horizontal
        ItemSeparatorComponent={Separator}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  themesSelectorContainer: {
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 38,
  },
  list: {
    marginTop: 20,
  },
  separator: {
    width: 18,
  },
  container: {
    backgroundColor: '#7446EE',
    flex: 1,
  },
});
