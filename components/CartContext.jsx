import React, { createContext, useContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [data, setData] = useState(() => {
        return JSON.parse(localStorage.getItem("product")) || [];
    });

    const addToCart = (item) => {
        setData((prev) => [...prev, item])
    }

    useEffect(() => {
        localStorage.setItem('product', JSON.stringify(data));
    }, [data]);
    return (
        <CartContext.Provider value={{ data, addToCart }}>
            {children}

        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);





