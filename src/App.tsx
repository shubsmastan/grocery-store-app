import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./store/shoppingCartSlice";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Basket from "./pages/Basket";
import Footer from "./components/Footer";
import { RootState } from "./store/store";

export default function App() {
  const { items } = useSelector((state: RootState) => state.shoppingCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [items, dispatch]);

  return (
    <>
      <Header />
      <main
        className="pt-4"
        style={{
          flex: "1 1 auto",
        }}>
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/basket" element={<Basket />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}
