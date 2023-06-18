import React from "react";
import ProductsCards from "../components/ProductsCards"
import ProductsData from "../data/products.json"

const Product = () => {
  return (
    <ProductsCards products={ProductsData} />
  );
};

export default Product;
