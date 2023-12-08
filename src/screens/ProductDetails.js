import React, { useContext } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { ProductsContext } from '../context/ProductsContext';

const ProductDetails = ({ route }) => {
  const { product } = route.params;
  const { addToCart } = useContext(ProductsContext);

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProductDetails;
