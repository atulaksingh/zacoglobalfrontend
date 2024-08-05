import { productDescription } from "@/data/productDetails";
import React from "react";

const { title, text1, text2 } = productDescription;

const ProductDescription = () => {
  return (
    <div className="product-description">
      <div className="auto-container">
        <h3 className="product-description__title">{title}</h3>
        <div className="product-description__text">{text1}</div>
        <div className="product-description__text">{text2}</div>
      </div>
    </div>
  );
};

export default ProductDescription;
