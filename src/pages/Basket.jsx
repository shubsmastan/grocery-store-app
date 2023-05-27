import BasketItem from "../components/BasketItem";
import { useSelector, useDispatch } from "react-redux";
import { clearItems } from "../store/shoppingCartSlice";

export default function Basket() {
  const dispatch = useDispatch();

  const { items, totalItems, totalCost } = useSelector(
    (state) => state.shoppingCart
  );

  return (
    <main className="text-center">
      <h2 className="">Your basket</h2>
      <div>
        {items.length > 0 ? (
          <>
            {items.map((item) => (
              <BasketItem
                key={item.id}
                item={item}
                quantity={
                  items.find((cartItem) => item.id === cartItem.id)
                    ? items.find((cartItem) => item.id === cartItem.id).quantity
                    : 0
                }
              />
            ))}
            <div>
              <hr />
              <h4>
                Total <span>£{(totalCost / 100).toFixed(2)}</span>
              </h4>
            </div>
            <button onClick={() => dispatch(clearItems())}>Remove All</button>
            <button
              onClick={() => {
                alert(
                  `That will be £${(totalCost / 100).toFixed(
                    2
                  )}. Have a nice day!`
                );
                dispatch(clearItems());
              }}
            >
              Checkout
            </button>
          </>
        ) : (
          <h4>No items in your basket</h4>
        )}
      </div>
    </main>
  );
}
