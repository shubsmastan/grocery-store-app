import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import ShopItem from "../components/ShopItem";
import data from "../data/data.json";

export default function Shop() {
  const { items } = useSelector((state) => state.shoppingCart);

  return (
    <>
      <h2 className="mb-4">Buy items</h2>
      <Row xs={1} md={2} lg={3} className="g-3">
        {data.map((item) => (
          <Col key={item.id}>
            <ShopItem
              item={item}
              quantity={
                items.find((cartItem) => item.id === cartItem.id)
                  ? items.find((cartItem) => item.id === cartItem.id).quantity
                  : 0
              }
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
