import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ButtonPrimary} from '../../components/shared/ButtonPrimary';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export const ProfileScreen = () => {
  const safeAreaInsets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 10,
        marginTop: safeAreaInsets.top + 20,
      }}>
      <Text style={{textAlign: 'center', marginBottom: 20}}>ProfileScreen</Text>

      <ButtonPrimary
        onPress={() => navigation.dispatch(DrawerActions.openDrawer)}
        label="Abrir menu"
      />
    </View>
  );
};
