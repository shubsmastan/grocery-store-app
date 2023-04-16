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

    let updatedBasket = basket;
    const itemInBasket = updatedBasket.find(
      (item) => item.name === newItem.name
    );
    if (itemInBasket) {
      const i = updatedBasket.indexOf(itemInBasket);
      newItem.quantity = updatedBasket[i].quantity + 1;
      updatedBasket = updatedBasket.filter(
        (item) => item.name !== newItem.name
      );
    }

    setBasket([...updatedBasket, newItem]);
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
