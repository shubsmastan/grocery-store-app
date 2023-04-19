import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import groceries from "../images/groceries.jpg";

export default function Home() {
  return (
    <main className="home">
      <h2 className="small-subheading">Number one groceries app</h2>
      <h1>Delivered straight to your door!</h1>
      <img
        src={groceries}
        className="home-img"
        alt="Groceries laid out on a bed"
      />
      <Link to="/shop">
        <button className="shop-btn">Shop now</button>
      </Link>
    </main>
  );
}
