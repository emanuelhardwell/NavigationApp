import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {ButtonPrimary} from '../../components/shared/ButtonPrimary';
import {globalStyles} from '../../theme/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../routes/StackNavigator';

interface Product {
  id: string;
  name: string;
}

const products: Product[] = [
  {id: '1', name: 'Product 1'},
  {id: '2', name: 'Product 2'},
  {id: '3', name: 'Product 3'},
  {id: '4', name: 'Product 4'},
  {id: '5', name: 'Product 5'},
  {id: '6', name: 'Product 6'},
  {id: '7', name: 'Product 7'},
  {id: '8', name: 'Product 8'},
  {id: '9', name: 'Product 9'},
  {id: '10', name: 'Product 10'},
  {id: '11', name: 'Product 11'},
  {id: '12', name: 'Product 12'},
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{textAlign: 'center', margin: 5, fontSize: 18}}>
        ProductsScreen
      </Text>
      <FlatList
        data={products}
        renderItem={product => (
          <ButtonPrimary
            onPress={() =>
              navigation.navigate('Product', {
                id: product.item.id,
                name: product.item.name,
              })
            }
            label={product.item.name}
          />
        )}
      />
      <Text style={{textAlign: 'center', margin: 5, fontSize: 18}}>
        Ajustes
      </Text>
      <ButtonPrimary
        onPress={() => navigation.navigate('Settings')}
        label="Ajustes"
      />
    </View>
  );
};
