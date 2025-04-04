"use client";
import {createContext, useState, useContext, useEffect} from "react";

const ProductContext = createContext();

export function ProductProvider({children}) {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    console.log(data);
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{products, setProducts}}>
      {children}
    </ProductContext.Provider>
  );
}

export default function useProduct() {
  return useContext(ProductContext);
}
