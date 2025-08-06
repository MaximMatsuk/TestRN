import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ArrowDown from '../../assets/arrow.svg';

type Props = {
  selectedTheme: string;
  onOpenThemesModal: () => void;
};

export const SelectedThemeButton = ({ selectedTheme, onOpenThemesModal }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onOpenThemesModal}>
      <Text style={styles.text}>{selectedTheme}</Text>
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
