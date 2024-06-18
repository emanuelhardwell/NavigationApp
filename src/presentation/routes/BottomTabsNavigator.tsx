import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabScreen1} from '../screens/tabs/TabScreen1';
// import {TabScreen2} from '../screens/tabs/TabScreen2';
// import {TabScreen3} from '../screens/tabs/TabScreen3';
import {Text} from 'react-native';
import {globalColors} from '../theme/theme';
import {MaterialTopTabNavigator} from './MaterialTopTabNavigator';
import {StackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: globalColors.background}}
      screenOptions={{
        // headerShown: false,
        tabBarLabelStyle: {marginBottom: 10},
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab1Icon </Text>,
        }}
        component={TabScreen1}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab2Icon </Text>,
        }}
        component={MaterialTopTabNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab3Icon </Text>,
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
