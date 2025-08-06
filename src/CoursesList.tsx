import { useEffect, useState } from 'react';
import { Text, SafeAreaView, FlatList, View, StyleSheet } from 'react-native';
import { Item } from './types';
import { Course } from './Course';

export const CoursesList = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://logiclike.com/docs/courses.json');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
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
  separator: {
    width: 18,
  },
  container: {
    backgroundColor: '#7446EE',
    flex: 1,
  },
});
