import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import ProductItem from '../components/ProductItem';
import products from '../data/products';

const ProductsScreen = () => {
 const renderItem = ({ item }) => (
   <ProductItem product={item} />
 );

 return (
   <FlatList
     data={products}
     renderItem={renderItem}
     keyExtractor={item => item.id.toString()}
   />
 );
};

export default ProductsScreen;
