import { useEffect, useState, useMemo } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import { CourseDto } from '../types';
import { SelectedThemeButton } from './SelectedThemeButton';
import { ThemesModal } from './ThemesSelectorModal/ThemesModal';
import { Courses } from './Courses';

const DEFAULT_THEME = 'Все темы';

export const Home = () => {
  const [coursesData, setCoursesData] = useState<CourseDto[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<string>(DEFAULT_THEME);
  const [isThemesModalVisible, setIsThemesModalVisible] =
    useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://logiclike.com/docs/courses.json');
      const data = await response.json();
      setCoursesData(data);
    };

    fetchData();
  }, []);

  const onSelectTheme = (theme: string) => {
    setSelectedTheme(theme);
    setIsThemesModalVisible(false);
  };

  const themes = useMemo(() => {
    const allTags = coursesData.flatMap(item => item.tags);
    const uniqueTags = [DEFAULT_THEME, ...new Set(allTags)];
    return uniqueTags;
  }, [coursesData]);

  const filteredCourses = useMemo(() => {
    if (selectedTheme === DEFAULT_THEME) {
      return coursesData;
    }
    return coursesData.filter(item => item.tags.includes(selectedTheme));
  }, [coursesData, selectedTheme]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.themesSelectorContainer}>
        <SelectedThemeButton
          selectedTheme={selectedTheme}
          onOpenThemesModal={() => setIsThemesModalVisible(true)}
        />
      </View>
      <Courses courses={filteredCourses} />
      <ThemesModal
        isOpen={isThemesModalVisible}
        onClose={() => setIsThemesModalVisible(false)}
        onSelectTheme={onSelectTheme}
        selectedTheme={selectedTheme}
        themes={themes}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  themesSelectorContainer: {
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 38,
  },
  container: {
    backgroundColor: '#7446EE',
    flex: 1,
    paddingHorizontal: 16,
  },
});
