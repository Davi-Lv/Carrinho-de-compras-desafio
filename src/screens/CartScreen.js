import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ProductsContext } from '../context/ProductsContext';
import CartItem from '../components/CartItem';

const CartScreen = () => {
  const { cart } = useContext(ProductsContext);

  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItem product={item} />}
      />
    </View>
  );
};

export default CartScreen;
