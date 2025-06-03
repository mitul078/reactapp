import React, { createContext, useEffect } from 'react'
import { useState } from 'react';

export const ProductContext = createContext();


const ProductProvider = ({ children }) => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        const storedProducts = localStorage.getItem("productData");
        if (storedProducts) {
            try {
                const parsedData = JSON.parse(storedProducts);
                setproducts(parsedData);
            } catch (error) {
                console.error("Failed to parse productData:", error);
            }
        }
    }, []);
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider
