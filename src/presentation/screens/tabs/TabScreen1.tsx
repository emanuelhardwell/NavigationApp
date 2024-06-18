import {Text, View} from 'react-native';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';
import Icon from 'react-native-vector-icons/Ionicons';

export const TabScreen1 = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>TabScreen1</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};
