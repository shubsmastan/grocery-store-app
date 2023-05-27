import { useDispatch } from "react-redux";
import { changeItem, removeItem } from "../store/shoppingCartSlice";

export default function BasketItem({ item, quantity }) {
  const { id, name, price, img } = item;
  const dispatch = useDispatch();

  return (
    <div className="d-flex">
      <div>
        <h4>{name}</h4>
        <h4>£{(price / 100).toFixed(2)}</h4>
        <button onClick={() => dispatch(removeItem(id))}>&times;</button>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch(changeItem({ id: id, quantity: 1, price: price }))
          }
        >
          +
        </button>
        <p className="mb-0">{quantity}</p>
        <button
          onClick={() => {
            if (quantity === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(changeItem({ id: id, quantity: -1, price: price }));
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
