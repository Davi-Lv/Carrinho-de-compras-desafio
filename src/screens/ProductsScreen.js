import React, { useContext } from 'react';
import { FlatList, StyleSheet, View, ScrollView } from 'react-native';
import ProductItem from '../components/ProductItem';
import products from '../data/products';
import { ProductsContext } from '../context/ProductsContext.js';
import { Tab, Text, TabView } from '@rneui/themed';

const ProductsScreen = ({ navigation }) => {
  const { addToCart } = useContext(ProductsContext);
  const [index, setIndex] = React.useState(0);

  const renderItem = ({ item }) => (
    <ProductItem
      product={item}
      onAddToCart={() => addToCart(item)}
      onSelectProduct={() => navigation.navigate('ProductDetails', { product: item })}
    />
  );

  return (
    <>
      <View>
        <Text>Food Delivery</Text>
        <Text>Restaurent</Text>
      </View>
      <Tab
        disableIndicator
        value={index}
        onChange={(e) => setIndex(e)}
         variant="default"
      >
        <Tab.Item
          title="Burger"
          titleStyle={styles.tabItem}
        />
        <Tab.Item
          title="Pizza"
          titleStyle={styles.tabItem}
        />
        <Tab.Item
          title="Pasta"
          titleStyle={styles.tabItem}
        />
        <Tab.Item
          title="Popular"
          titleStyle={styles.tabItem}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: '100%' }}>
          <ScrollView style={styles.container}>
            <FlatList
              data={products}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
          <Text h1>Cart</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'pink', width: '100%' }}>
          <Text h1>popular</Text>
        </TabView.Item>
      </TabView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  tabItem: {
    color: "rgb(255 255 255)",
    fontSize: 12,
    textAlign: 'center',
    padding: "6px 17px",
    backgroundColor: "#8289c4",
    borderRadius: ".5rem",
  },
});

export default ProductsScreen;