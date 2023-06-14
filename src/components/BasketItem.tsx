import { useDispatch } from "react-redux";
import { Item, changeItem, removeItem } from "../store/shoppingCartSlice";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface BasketItemProps {
  item: Item;
  quantity: number;
}

export default function BasketItem({ item, quantity }: BasketItemProps) {
  const { id, name, price, img } = item;
  const dispatch = useDispatch();

  return (
    <Card
      className="mb-3 p-3 p-md-4"
      style={{ background: "rgb(255, 255, 255, 0.5)" }}>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column flex-lg-row gap-lg-5 align-items-lg-center">
          <img src={img} width="200px" height="auto" className="rounded mb-2" />
          <div>
            <h5 className="mb-2">{name}</h5>
            <h5 className="fw-normal mb-2">
              £{((price * quantity) / 100).toFixed(2)}
            </h5>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Button
            variant="outline-danger"
            className="d-block mb-3 px-2 pt-0 pb-1 fs-5"
            size="sm"
            onClick={() => dispatch(removeItem(id))}>
            &times;
          </Button>
          <FontAwesomeIcon
            icon={faChevronUp}
            size="lg"
            onClick={() =>
              dispatch(changeItem({ id: id, quantity: 1, price: price }))
            }
            style={{ cursor: "pointer" }}
          />
          <p className="mb-0 fs-5">{quantity}</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="lg"
            onClick={() => {
              if (quantity === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(changeItem({ id: id, quantity: -1, price: price }));
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </Card>
  );
}
