import {
  FlatList,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Cross from '../../assets/cross.svg';
import { ThemeItem } from './ThemeItem';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onSelectTheme: (theme: string) => void;
  selectedTheme: string;
};

export const ThemesModal = ({
  onClose,
  isOpen,
  onSelectTheme,
  selectedTheme,
}: Props) => {
  const onSelect = (theme: string) => {
    onSelectTheme(theme);
    onClose();
  };

  return (
    <Modal visible={isOpen}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Выбор темы</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Cross />
          </TouchableOpacity>
        </View>
        <FlatList
          data={['Все темы', 'Тема 1', 'Тема 2', 'Тема 3']}
          renderItem={({ item }) => (
            <ThemeItem
              item={item}
              isSelected={item === selectedTheme}
              onSelect={onSelect}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </SafeAreaView>
    </Modal>
  );
};

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    marginTop: 24,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    height: 6,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
  },
});
