import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsContextProvider } from './src/context/ProductsContext.js';
import ProductsScreen from './src/screens/ProductsScreen.js';
import ProductDetails from './src/screens/ProductDetails.js';
import CartScreen from './src/screens/CartScreen.js';

const Stack = createStackNavigator();

function App() {
  return (
    <ProductsContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductsScreen} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductsContextProvider>
  );
}

export default App;
