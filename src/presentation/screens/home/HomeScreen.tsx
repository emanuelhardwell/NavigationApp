import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {ButtonPrimary} from '../../components/shared/ButtonPrimary';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <ButtonPrimary
        label="Products"
        onPress={() => navigation.navigate('Products' as never)}
      />
      <ButtonPrimary
        label="Settings"
        onPress={() => navigation.navigate('Settings' as never)}
      />
    </View>
  );
};
