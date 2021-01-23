import React from "react";
import { Link } from "@reach/router";
import "./ProductList.css"

const ProductList = (props) => {
  const {products} = props;


  return (
    <div className="ProductList">
      <h1>All Products:</h1>
      <ul>
        {products.map((product, idx) => {
          return (
            <li key={idx} >
              <Link to={`/product/${product._id}`}>
                {product.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
