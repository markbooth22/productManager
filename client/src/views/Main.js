import React, {useState, useEffect} from 'react'
import ProductForm from '../components/ProductForm/ProductForm';
import ProductList from "../components/ProductList/ProductList"
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState([])
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [refresh]);

    return (
    <div>
        <ProductForm refresh={refresh} setRefresh={setRefresh}/>
        <ProductList products={products} />
    </div>
  )
}

export default Main;