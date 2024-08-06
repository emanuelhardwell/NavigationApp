import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {ButtonPrimary} from '../../components/shared/ButtonPrimary';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      <ButtonPrimary
        label="Products"
        onPress={() => navigation.navigate('Products')}
      />
      <ButtonPrimary
        label="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
