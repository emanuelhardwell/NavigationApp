import {Pressable, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {FC} from 'react';

interface Props {
  label: string;
  onPress: () => void;
}

export const ButtonPrimary: FC<Props> = ({label, onPress}) => {
  return (
    <Pressable onPress={onPress} style={globalStyles.buttonPrimary}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};
