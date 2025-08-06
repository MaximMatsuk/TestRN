import { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View, StyleSheet } from 'react-native';

import { Item } from '../../types';
import { SelectedThemeButton } from './SelectedThemeButton';
import { Course } from './Course';
import { ThemesModal } from './ThemesModal';

const DEFAULT_THEME = 'Все темы';

export const Home = () => {
  const [data, setData] = useState<Item[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<string>(DEFAULT_THEME);
  const [isThemesModalVisible, setIsThemesModalVisible] =
    useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://logiclike.com/docs/courses.json');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  const onSelectTheme = (theme: string) => {
    setSelectedTheme(theme);
    setIsThemesModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.themesSelectorContainer}>
        <SelectedThemeButton
          selectedTheme={selectedTheme}
          onOpenThemesModal={() => setIsThemesModalVisible(true)}
        />
      </View>
      <FlatList
        data={data}
        style={styles.list}
        keyExtractor={item => item.id}
        renderItem={Course}
        horizontal
        ItemSeparatorComponent={Separator}
        showsHorizontalScrollIndicator={false}
      />
      <ThemesModal
        isOpen={isThemesModalVisible}
        onClose={() => setIsThemesModalVisible(false)}
        onSelectTheme={onSelectTheme}
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
