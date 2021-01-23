import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";

const Product = (props) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + props.id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log("There was an error", err));
  }, []);

  return (
    <div>
      <h1>Title: {product.title}</h1>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Product;
