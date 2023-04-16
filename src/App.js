import React, { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import Basket from "./components/Basket";
import Footer from "./components/Footer";
import { stock } from "./utils/stock";

function App() {
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClick = (e) => {
    const selectedItem = e.target.dataset.value;
    const selectedItemPrice = parseInt(e.target.dataset.price);
    setTotal(total + selectedItemPrice);
    for (const item of basket) {
      if (item.name === selectedItem) {
        item.quantity += 1;
        setBasket([...basket]);
        return;
      }
    }
    setBasket([
      ...basket,
      { name: selectedItem, quantity: 1, price: selectedItemPrice },
    ]);
  };

  const checkOut = () => {
    if (total > 0)
      alert(`That will be £${(total / 100).toFixed(2)}. Have a nice day!`);
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

export default App;
