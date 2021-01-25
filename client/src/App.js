import React from 'react';
import { Router } from "@reach/router"
import './App.css';
import Main from "./views/Main";
import Product from "./views/Product"
import ProductEdit from "./views/ProductEdit/ProductEdit"


function App() {
  return (
    
    <div className="App">
      <Router>
        <Main path="/"/>
        <Product path="/product/:id"/>
        <ProductEdit path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
