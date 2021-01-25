import React, { useState } from "react";
import axios from "axios";
import {InputGroup, Button} from "../Utils/Utils"

const ProductForm = (props) => {
  const { refresh, setRefresh } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        setRefresh(refresh + 1);
        console.log("Response: ", res);
        setTitle("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <div>
      <h2>Product Manager</h2>
      <form onSubmit={onSubmitHandler}>
        <InputGroup label="Title: " value={title} type="text" handleChange={setTitle} name="title"/>
        <InputGroup label="Price: " value={price} type="number" handleChange={setPrice} name="price"/>
        <InputGroup label="Description: " value={description} type="text" handleChange={setDescription} name="description"/>
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
};
export default ProductForm;
