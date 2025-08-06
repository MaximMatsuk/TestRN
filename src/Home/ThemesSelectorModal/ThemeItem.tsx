import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  item: string;
  isSelected: boolean;
  onSelect: (theme: string) => void;
};

export const ThemeItem = ({ item, isSelected, onSelect }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(item)}
      style={[styles.container, isSelected && styles.selectedContainer]}
    >
      <Text style={[styles.text, isSelected && styles.selectedText]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#C5D0E6',
    width: 336,
  },
  text: {
    color: '#39414B',
  },
  selectedContainer: {
    backgroundColor: '#5CBB73',
    borderWidth: 0,
  },
  selectedText: {
    color: '#FFFFFF',
  },
});
