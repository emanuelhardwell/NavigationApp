import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Pressable} from 'react-native';
import {IonicIcon} from './IonicIcon';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.openDrawer)}>
          <IonicIcon name="menu-outline" size={30} />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
