import { Row, Col } from "react-bootstrap";
import Item from "../components/Item";
import items from "../data/items.json";

export default function Shop() {
  return (
    <main>
      <h2>Buy items</h2>
      <Row xs={1} md={2} lg={3} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <Item {...item} />
          </Col>
        ))}
      </Row>
    </main>
  );
}
