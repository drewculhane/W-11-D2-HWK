import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import {
  BrowserRouter as Router,
  withRouter,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Product from './Product.js'
import ReviewEdit from './ReviewEdit.js'

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`http://localhost:3000/products`);
        console.log("Ideas - useEffect - response", response);
        setProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    };  
    makeAPICall();
  }, [])
  
  const productArray = products.map((product) => (
    <div className="productcontainer">
      <h4 className="play-title"> {product.name} </h4> 
      <Link to={'/products/' + product.id}>
      <img src={product.img} alt="product image"/> 
      </Link> 
    </div>
    )); 
      return (
        <Switch> 
        <div className="App">
          
          <Route
            exact
            path="/products/:productid"
            render={(routerProps) => <Product {...routerProps} />} /> 
          <Route 
          exact path ="/products/:productid/review/:reviewid/edit/"
           render={(routerProps) => <ReviewEdit {...routerProps} />} />
         <Route exact path="/" render={() => <> <h4> Products </h4>{productArray}</>} />
            
        </div>
        </Switch> 
      ); 
}


export default App;
