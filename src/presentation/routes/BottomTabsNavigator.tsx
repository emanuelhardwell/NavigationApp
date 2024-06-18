import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabScreen1} from '../screens/tabs/TabScreen1';
import {TabScreen2} from '../screens/tabs/TabScreen2';
import {TabScreen3} from '../screens/tabs/TabScreen3';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={TabScreen1} />
      <Tab.Screen name="Tab2" component={TabScreen2} />
      <Tab.Screen name="Tab3" component={TabScreen3} />
    </Tab.Navigator>
  );
};
