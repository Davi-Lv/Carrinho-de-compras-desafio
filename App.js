import React from 'react';
import { View, StyleSheet } from 'react-native'; // Importando o componente View e StyleSheet
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsContextProvider } from './src/context/ProductsContext.js';
import ProductsScreen from './src/screens/ProductsScreen.js';
import ProductDetails from './src/screens/ProductDetails.js';
import CartScreen from './src/screens/CartScreen.js';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

function CartButton() {
  const navigation = useNavigation();

  return (
    <Ionicons
      name="cart"
      size={24}
      color="#000"
      style={styles.cartIcon}
      onPress={() => navigation.navigate('Cart')}
    />
  );
}

function App() {
  return (
    <ProductsContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Products"
            component={ProductsScreen}
            options={{
              headerRight: () => <CartButton />,
              headerStyle: styles.headerStyle, // Adicionando estilo personalizado para o cabeçalho
              headerTitleStyle: styles.headerTitleStyle, // Adicionando estilo personalizado para o título do cabeçalho
            }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{
              headerStyle: styles.headerStyle, // Adicionando estilo personalizado para o cabeçalho
              headerTitleStyle: styles.headerTitleStyle, // Adicionando estilo personalizado para o título do cabeçalho
            }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{
              headerStyle: styles.headerStyle, // Adicionando estilo personalizado para o cabeçalho
              headerTitleStyle: styles.headerTitleStyle, // Adicionando estilo personalizado para o título do cabeçalho
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductsContextProvider>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#f5f5f5', // Cor de fundo do cabeçalho
  },
  headerTitleStyle: {
    color: '#000', // Cor do texto do título do cabeçalho
  },
  cartIcon: {
    marginRight: 10,
  },
});

export default App;
