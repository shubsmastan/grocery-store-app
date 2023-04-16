import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import Basket from "./components/Basket";
import Footer from "./components/Footer";
import { stock } from "./utils/stock";

export default function App() {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClick = (e) => {
    const newItem = {
      name: e.target.dataset.value,
      quantity: 1,
      price: parseInt(e.target.dataset.price),
    };

    setTotal((prevTotal) => prevTotal + newItem.price);

    const itemInBasket = basket.find((item) => item.name === newItem.name);
    if (itemInBasket) {
      const i = basket.indexOf(itemInBasket);
      newItem.quantity = basket[i].quantity + 1;
      setBasket((oldBasket) =>
        oldBasket.filter((item) => item.name !== newItem.name)
      );
    }

    setBasket((oldBasket) => [...oldBasket, newItem]);
  };

  const checkOut = () => {
    if (total > 0) {
      alert(`That will be £${(total / 100).toFixed(2)}. Have a nice day!`);
      setBasket([]);
      setTotal(0);
    }
  };

  return (
    <div className="App">
      <p className="App-text">Buy items:</p>
      {stock.map((item) => (
        <Item
          name={item.name}
          whenClicked={handleClick}
          price={item.price}
          key={item.name}
        />
      ))}
      <Basket basket={basket} basketTotal={(total / 100).toFixed(2)} />
      <button id="checkout-button" class="App-button" onClick={checkOut}>
        Check Out
      </button>
      <Footer />
    </div>
  );
}
