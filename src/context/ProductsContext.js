import React, { createContext, useState } from 'react';

const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
 const [products, setProducts] = useState([]);
 const [cart, setCart] = useState([]);

 const addToCart = (product) => {
   setCart(prevCart => [...prevCart, product]);
 };

 const removeFromCart = (productId) => {
   setCart(prevCart => prevCart.filter(product => product.id !== productId));
 };

 const updateCart = (productId, quantity) => {
   setCart(prevCart => prevCart.map(product => product.id === productId ? {...product, quantity} : product));
 };

 return (
   <ProductsContext.Provider value={{ products, cart, addToCart, removeFromCart, updateCart }}>
     {children}
   </ProductsContext.Provider>
 );
};

export { ProductsContext, ProductsContextProvider };
