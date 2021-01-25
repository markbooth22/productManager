import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import { Button } from "../components/Utils/Utils";

const Product = (props) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${props.id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log("There was an error", err));
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log("Response: ", res);
      })
      .catch((err) => console.log("Error: ", err));
  };



  return (
    <div>
      <h1>Title: {product.title}</h1>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <Button>
        <Link to={`/${props.id}/edit`}>Edit</Link>
      </Button>
      <Button>
        <Link to="/">Home</Link>
      </Button>
      <Button onClick={ (e) => {deleteProduct(props.id)}}>
        <Link to="/">Delete</Link>
      </Button>
    </div>
  );
};

export default Product;
