import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import "./ProductList.css";
import { Button } from "../Utils/Utils";

const ProductList = (props) => {
  const { products } = props;
  const { refresh, setRefresh } = props;


  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setRefresh(refresh + 1);
        console.log("Response: ", res);
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <div className="ProductList">
      <h1>All Products:</h1>
      <ul>
        {products.map((product, idx) => {
          return (
            <li key={idx}>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
              <Button onClick={ (e) => {deleteProduct(product._id)}}>Delete</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
