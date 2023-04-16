import React from "react";

export default function Basket(props) {
  return (
    <div className="basket">
      <p className="App-text">
        Your basket total: £<span id="basket-total">{props.basketTotal}</span>
      </p>
      <ul class="basket" id="basket">
        {props.basket.map((item) => (
          <li key={item.name + item.quantity}>
            {item.name} ({item.quantity}) at £{(item.price / 100).toFixed(2)}{" "}
            each
          </li>
        ))}
      </ul>
    </div>
  );
}
