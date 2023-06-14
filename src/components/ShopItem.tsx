import { useDispatch } from "react-redux";
import { changeItem, removeItem } from "../store/shoppingCartSlice";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

interface ShopItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    img: string;
  };
  quantity: number;
}

export default function Item({ item, quantity }: ShopItemProps) {
  const { id, name, price, img } = item;
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(changeItem({ id: id, quantity: 1, price: price }));
  };

  const handleDecrease = () => {
    if (quantity === 1) {
      dispatch(removeItem(id));
      return;
    }
    dispatch(changeItem({ id: id, quantity: -1, price: price }));
  };

  return (
    <Card className="h-100" style={{ background: "rgb(255, 255, 255, 0.5)" }}>
      <Card.Img
        variant="top"
        src={img}
        height="200px"
        style={{ objectFit: "cover" }}></Card.Img>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-0">
          <p>{name}</p>
          <p className="ml-2 text-muted">£{(price / 100).toFixed(2)}</p>
        </Card.Title>
        <div className="my-auto">
          {quantity === 0 ? (
            <Button
              variant="outline-secondary"
              className="w-100"
              onClick={() =>
                dispatch(changeItem({ id: id, quantity: 1, price: price }))
              }>
              Add to cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column gap-2">
              <div className="d-flex align-items-center justify-content-center gap-2">
                <FontAwesomeIcon
                  icon={faCircleMinus}
                  onClick={handleDecrease}
                  color="#6c757d"
                  size="lg"
                  style={{ cursor: "pointer" }}
                />
                <div>
                  <span className="fs-4">{quantity}</span> in cart
                </div>
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  onClick={handleIncrease}
                  color="#6c757d"
                  size="lg"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => dispatch(removeItem(id))}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
