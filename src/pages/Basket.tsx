import BasketItem from "../components/BasketItem";
import Checkout from "../components/Checkout";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearItems } from "../store/shoppingCartSlice";
import { Button } from "react-bootstrap";
import { RootState } from "../store/store";

export default function Basket() {
  const dispatch = useDispatch();

  const { items, totalCost } = useSelector(
    (state: RootState) => state.shoppingCart
  );

  const itemsList = items.map((item) => {
    const foundItem = items.find((cartItem) => item.id === cartItem.id);
    return (
      <BasketItem
        key={item.id}
        item={item}
        quantity={foundItem ? foundItem.quantity : 0}
      />
    );
  });

  return (
    <main>
      <h2 className="mb-4">Your basket</h2>
      <div>
        {items.length > 0 ? (
          <>
            {itemsList}
            <hr />
            <div className="d-flex justify-content-between mb-3">
              <h4>Total</h4>
              <h4>£{(totalCost / 100).toFixed(2)}</h4>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <Button
                variant="outline-danger"
                className="d-block"
                onClick={() => dispatch(clearItems())}>
                Remove All
              </Button>
              <Checkout total={totalCost} />
            </div>
          </>
        ) : (
          <>
            <h4 className="text-center mb-4">No items in your basket</h4>
            <Link style={{ textDecoration: "none" }} to="/shop">
              <Button
                variant="outline-secondary"
                style={{
                  display: "block",
                  maxWidth: "200px",
                  margin: "auto",
                }}>
                Continue Shopping
              </Button>
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
