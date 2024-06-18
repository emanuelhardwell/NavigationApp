import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabScreen1} from '../screens/tabs/TabScreen1';
// import {TabScreen2} from '../screens/tabs/TabScreen2';
// import {TabScreen3} from '../screens/tabs/TabScreen3';
import {globalColors} from '../theme/theme';
import {MaterialTopTabNavigator} from './MaterialTopTabNavigator';
import {StackNavigator} from './StackNavigator';
import {IonicIcon} from '../components/shared/IonicIcon';

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
        tabBarActiveTintColor: globalColors.primary,
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: ({color}) => (
            <IonicIcon name="calendar-outline" color={color} />
          ),
        }}
        component={TabScreen1}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({color}) => (
            <IonicIcon name="calendar-number-outline" color={color} />
          ),
        }}
        component={MaterialTopTabNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => (
            <IonicIcon name="calendar-clear-outline" color={color} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
