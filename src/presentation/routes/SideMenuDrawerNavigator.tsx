import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {globalColors} from '../theme/theme';
import {Text, View, useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const SideMenuDrawerNavigator = () => {
  const windowDimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: windowDimensions.width > 700 ? 'permanent' : 'slide',

        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          marginHorizontal: 15,
          borderRadius: 100,
        },
      }}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 20,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
      <Text
        style={{
          textAlign: 'center',
          marginTop: 250,
          marginBottom: 20,
          fontWeight: 'bold',
        }}>
        Logout
      </Text>
    </DrawerContentScrollView>
  );
};
