import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';
import {useEffect} from 'react';

export const ProductScreen = () => {
  // const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const navigation = useNavigation();

  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

  useEffect(() => {
    navigation.setOptions({title: params?.name});
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={{fontSize: 18}}>
        {params?.id} - {params?.name}
      </Text>
    </View>
  );
};
