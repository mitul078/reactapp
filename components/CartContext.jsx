import React, { createContext, useContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [data, setData] = useState(() => {
        return JSON.parse(localStorage.getItem("product")) || [];
    });

    const addToCart = (item) => {
        setData((prev) => [...prev, item])
        toast.success(`${item.productName} added to cart!`);
    }
    const removeFromCart = (indexToRemove) => {
        const updated = data.filter((_, index) => index !== indexToRemove);
        setData(updated);
    };

    useEffect(() => {
        localStorage.setItem('product', JSON.stringify(data));
    }, [data]);
    return (
        <CartContext.Provider value={{ data, addToCart , removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);





