import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Basket from "./components/Basket";
import Footer from "./components/Footer";

export default function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalItems, setTotalItems] = useState(5);

  return (
    <>
      <Header totalItems={totalItems} />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
