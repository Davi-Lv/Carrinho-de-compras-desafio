import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { ProductsContext } from '../context/ProductsContext';

const ProductDetails = ({ route }) => {
  const { product } = route.params;
  const { addToCart } = useContext(ProductsContext);

  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

export default ProductDetails;
