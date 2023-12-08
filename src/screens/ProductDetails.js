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
      <Text style={styles.price}>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
      <Button title="Adicionar ao carrinho" onPress={() => addToCart(product)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 10,
    padding: 16,
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
