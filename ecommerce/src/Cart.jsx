import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "./cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <section className="empty-cart">
        <h1>Your Cart Is Empty</h1>
        <p>Add some products to get started.</p>
        <Link to="/products" className="button">
          Browse Products
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Your Shopping Cart</h1>

      <div className="cart-list">
        {items.map((item) => (
          <article className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>₹{item.price.toLocaleString("en-IN")} each</p>

              <div className="quantity-controls">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  aria-label={`Decrease ${item.name} quantity`}
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  aria-label={`Increase ${item.name} quantity`}
                >
                  +
                </button>
              </div>

              <button
                className="remove-button"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>

            <strong>
              ₹{(item.price * item.quantity).toLocaleString("en-IN")}
            </strong>
          </article>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ₹{total.toLocaleString("en-IN")}</h2>

        <div className="summary-actions">
          <button className="secondary-button" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>

          <Link to="/checkout" className="button">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}