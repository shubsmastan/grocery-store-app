import { Card, Button } from "react-bootstrap";

export default function Item({ id, name, price, img }) {
  const quantity = 3;

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={img}
        height="200px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <p>{name}</p>
          <p className="ml-2 text-muted">£{(price / 100).toFixed(2)}</p>
        </Card.Title>
        <div className="my-auto">
          {quantity === 0 ? (
            <Button className="w-100">Add to cart</Button>
          ) : (
            <div className="d-flex align-items-center flex-column gap-2">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <Button size="sm">-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button size="sm">+</Button>
              </div>
              <Button variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
