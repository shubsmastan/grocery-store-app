import BasketItem from "../components/BasketItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearItems } from "../store/shoppingCartSlice";
import { Button } from "react-bootstrap";

export default function Basket() {
  const dispatch = useDispatch();

  const { items, totalItems, totalCost } = useSelector(
    (state) => state.shoppingCart
  );

  return (
    <main>
      <h2 className="mb-4">Your basket</h2>
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
            <hr />
            <div className="d-flex justify-content-between mb-3">
              <h4>Total</h4>
              <h4>£{(totalCost / 100).toFixed(2)}</h4>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <Button
                variant="outline-danger"
                className="d-block"
                onClick={() => dispatch(clearItems())}
              >
                Remove All
              </Button>
              <Button
                variant="secondary"
                className="d-block"
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
              </Button>
            </div>
          </>
        ) : (
          <>
            <h4 className="text-center mb-4">No items in your basket</h4>
            <Button
              variant="outline-secondary"
              as={Link}
              to="/shop"
              style={{
                display: "block",
                maxWidth: "200px",
                margin: "auto",
              }}
            >
              Continue Shopping
            </Button>
          </>
        )}
      </div>
    </main>
  );
}
