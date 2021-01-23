import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
  const [ title, setTitle ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ description, setDescription ] = useState("");

  const onSubmitHandler = e => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/products", {
      title,
      price,
      description
    })
      .then(res => console.log("Response: ", res))
      .catch(err => console.log("Error: ", err))
  }

  return (
    <div>
      <h2>Product Manager</h2>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Title: </label>
          <input type="text" onChange={ (e) => setTitle(e.target.value)}/>
        </p>
        <p>
          <label>Price: </label>
          <input type="number" onChange={ (e) => setPrice(e.target.value)}/>
        </p>
        <p>
          <label>Description: </label>
          <input type="text" onChange={ (e) => setDescription(e.target.value)}/>
        </p>
        <input type="submit" value="Create"/>
      </form>
    </div>
  );
} 
export default ProductForm









