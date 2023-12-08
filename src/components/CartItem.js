import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CartItem = ({ product }) => {

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>Preço: ${product.price}</Text>
        <Text style={styles.quantity}>Quantidade: {product.quantity}</Text>
        <Text style={styles.subtotal}>Subtotal: ${product.subtotal}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  quantity: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  subtotal: {
    fontSize: 14,
    color: '#888',
  },
});

export default CartItem;
