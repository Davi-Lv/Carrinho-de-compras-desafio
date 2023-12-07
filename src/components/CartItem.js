import React from 'react';
import { View, Text, Image } from 'react-native';

const CartItem = ({ product }) => {
  return (
    <View>
      <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
      <Text>{product.quantity}</Text>
      <Text>{product.subtotal}</Text>
    </View>
  );
};

export default CartItem;
