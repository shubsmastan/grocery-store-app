import React from "react";

export default function Item(props) {
  return (
    <button
      className="App-button"
      data-value={props.name}
      onClick={props.whenClicked}
    >
      {props.name}
    </button>
  );
}
