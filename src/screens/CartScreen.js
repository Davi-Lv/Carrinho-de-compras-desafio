import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import { ProductsContext } from '../context/ProductsContext';
import CartItem from '../components/CartItem';

const CartScreen = () => {
  const { cart } = useContext(ProductsContext);

  return (
    <FlatList
      data={cart}
      renderItem={({ item }) => <CartItem product={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default CartScreen;