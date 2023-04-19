import React from "react";

export default function Item(props) {
  return (
    <button
      className={props.className}
      data-value={props.name}
      data-price={props.price}
      onClick={props.whenClicked}
    >
      {props.name}
    </button>
  );
}
