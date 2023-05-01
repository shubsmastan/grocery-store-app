import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
