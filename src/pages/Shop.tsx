import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import ShopItem from "../components/ShopItem";
import data from "../data/data.json";
import { RootState } from "../store/store";

export default function Shop() {
  const { items } = useSelector((state: RootState) => state.shoppingCart);

  const itemsList = data.map((item) => {
    const foundItem = items.find((cartItem) => item.id === cartItem.id);
    return (
      <Col key={item.id}>
        <ShopItem item={item} quantity={foundItem ? foundItem.quantity : 0} />
      </Col>
    );
  });

  return (
    <>
      <h2 className="mb-4">Buy items</h2>
      <Row xs={1} md={2} lg={3} className="g-3">
        {itemsList}
      </Row>
    </>
  );
}
