import {FC} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalColors} from '../../theme/theme';

interface IonicIconProps {
  name: string;
  size?: number;
  color?: string;
}

export const IonicIcon: FC<IonicIconProps> = ({
  name,
  size = 26,
  color = globalColors.primary,
}) => {
  return <Icon name={name} size={size} color={color} />;
};
