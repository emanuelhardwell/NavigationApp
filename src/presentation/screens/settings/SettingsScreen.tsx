import React from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {ButtonPrimary} from '../../components/shared/ButtonPrimary';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{fontSize: 18, textAlign: 'center', marginBottom: 15}}>
        SettingsScreen
      </Text>

      <ButtonPrimary
        label="Regresar"
        onPress={() => {
          navigation.goBack();
        }}
      />

      <ButtonPrimary
        label="Regresar al Home"
        onPress={() => {
          navigation.dispatch(StackActions.popToTop());
        }}
      />
    </View>
  );
};
