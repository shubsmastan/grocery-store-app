import { useDispatch } from "react-redux";
import { changeItem, removeItem } from "../store/shoppingCartSlice";
import { Card, Button } from "react-bootstrap";

export default function Item({ item, quantity }) {
  const { id, name, price, img } = item;
  const dispatch = useDispatch();

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
            <Button
              className="w-100"
              onClick={() =>
                dispatch(changeItem({ id: id, quantity: 1, price: price }))
              }
            >
              Add to cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column gap-2">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <Button
                  size="sm"
                  onClick={() => {
                    if (quantity === 1) {
                      dispatch(removeItem(id));
                      return;
                    }
                    dispatch(
                      changeItem({ id: id, quantity: -1, price: price })
                    );
                  }}
                >
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button
                  size="sm"
                  onClick={() =>
                    dispatch(changeItem({ id: id, quantity: 1, price: price }))
                  }
                >
                  +
                </Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => dispatch(removeItem(id))}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
