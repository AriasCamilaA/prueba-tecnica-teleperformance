"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = ( typeof window !== 'undefined') ? localStorage.getItem('cartItems') : null;
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const calculateTotalPrice = (items) => {
        const total = items.reduce((accumulator, currentItem) => {
            return accumulator + (currentItem.price * currentItem.quantity);
        }, 0);
        return total.toFixed(2); // Redondear el total a dos decimales
    };

    const calculateTotalItems = (items) => {
        const total = items.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.quantity;
        }, 0);
        return total;
    };

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            const updatedCartItems = cartItems.map(item =>
                item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0);

        setCartItems(updatedCartItems);
    };

    const removeAllOfProduct = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCartItems);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        setTotalPrice(calculateTotalPrice(cartItems));
        setTotalItems(calculateTotalItems(cartItems));
    }, [cartItems]);

    const cartContextValue = {
        cartItems,
        totalPrice,
        totalItems,
        addToCart,
        removeFromCart,
        removeAllOfProduct,
        clearCart,
    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};


export function useAppContext() {
    return useContext(CartContext);
}
