import React from "react";
import "./App.css";
import Item from "./components/Item";
import Basket from "./components/Basket";
import Footer from "./components/Footer";

function App() {
  function handleClick(e) {
    const item = e.target.dataset.value;
    alert(`You added one ${item.toLowerCase()} to your basket.`);
  }

  return (
    <div className="App">
      <p className="App-text">Buy items:</p>
      <Item name="Egg" whenClicked={handleClick} />
      <Item name="Strawberry" whenClicked={handleClick} />
      <Item name="Banana" whenClicked={handleClick} />
      <Item name="Bread Slice" whenClicked={handleClick} />
      <Basket />
      <Footer />
    </div>
  );
}

export default App;
