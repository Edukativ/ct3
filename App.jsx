import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css"

import Rating from "./component/rating";

function App() {
  const [products, setProducts] = useState([])

  const url = "https://dummyjson.com/products"

  useEffect(() => {
    axios({
      method: 'get',
      url: url,
    })
      .then(function (response) {
        const productsData = response.data.products;

        setProducts([...productsData]);
      });
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }

  const handleProductDoubleClick = (productId) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };

  return (
    <div className="container">
      <div className="header">
        <button className="scroll_button" onClick={scrollToBottom}>Scroll to footer</button>
      </div>

      <div className="product_container">
        {products.map((product) => (
          <div onDoubleClick={() => handleProductDoubleClick(product.id)} key={product.id} className="product_wrapper">
            <img className="image" src={product.images[0]} alt="img" />
            <span>Title : {product.title}</span> <br />
            <span>Price : {product.price}$</span> <br />
            <Rating count={Math.round(product.rating)}></Rating>
            
          </div>
        ))}
      </div>
      <div className="footer">
        FOOTER
      </div>
    </div>
  )
}

export default App
