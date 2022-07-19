import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Price from "./components/ProductPriceComponent";
import Form from "./components/ProductForm";
import ProductNameComponent from "./components/ProductName";
import { useState } from "react";
import UserData from "./contexts/UserData";

function App() {
  let [productInfo, setProductInfo] = useState({
    name: "MacBook",
    price: "25",
  });

  return (
    <UserData.Provider value={{ productInfo, setProductInfo }}>
      <div className="App">
        <h2 className="is-size-4">We'll use the React Context API to pass and receive data in any component.</h2>
        <div className="container">
          <Form />

          <h2 className="is-size-4">Display Product Info Here 👇</h2>
          <p>These two children components will receive data. These could be nested components.</p>
          <ProductNameComponent />
          <Price />
        </div>
      </div>
    </UserData.Provider>
  );
}

// Wrap parent component with context provider
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
