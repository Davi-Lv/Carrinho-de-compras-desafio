import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductItem from '../components/ProductItem';
import products from '../data/products';
import { ProductsContext } from '../context/ProductsContext.js';

const ProductsScreen = ({ navigation }) => {
  const { addToCart } = useContext(ProductsContext);

  const renderItem = ({ item }) => (
    <ProductItem
      product={item}
      onAddToCart={() => addToCart(item)}
      onSelectProduct={() => navigation.navigate('ProductDetails', { product: item })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
});

export default ProductsScreen;