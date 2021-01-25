import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import { Button, InputGroup } from "../../components/Utils/Utils";
import "./ProductEdit.css";

const ProductEdit = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${props.id}`)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/products/${props.id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log("Response: ", res);
        setTitle("");
        setPrice("");
        setDescription("");
        navigate(`/product/${props.id}`);
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <div className="ProductEdit">
      <h1>Edit Product</h1>
      <form onSubmit={onSubmitHandler}>
        <InputGroup
          label="Title: "
          value={title}
          type="text"
          handleChange={setTitle}
          name="title"
        />
        <InputGroup
          label="Price: "
          value={price}
          type="number"
          handleChange={setPrice}
          name="price"
        />
        <InputGroup
          label="Description: "
          value={description}
          type="text"
          handleChange={setDescription}
          name="description"
        />

        <Button type="submit">
          Submit
        </Button>
        <Button>
          <Link to="/">Home</Link>
        </Button>
      </form>
    </div>
  );
};

export default ProductEdit;
