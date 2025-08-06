import { FlatList, StyleSheet, View } from 'react-native';
import { Course } from './Course';
import { CourseDto } from '../types';

type Props = {
  courses: CourseDto[];
};

export const Courses = ({ courses }: Props) => {
  return (
    <FlatList
      data={courses}
      style={styles.list}
      keyExtractor={item => item.id}
      renderItem={Course}
      horizontal
      ItemSeparatorComponent={Separator}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  separator: {
    width: 18,
  },
});