import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { clearCart } from "./cartSlice";

export default function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function placeOrder() {
    dispatch(clearCart());

    navigate("/", {
      state: { message: "Demo order placed successfully!" },
    });
  }

  if (items.length === 0) {
    return (
      <section className="empty-cart">
        <h1>Nothing to Checkout</h1>
        <p>Your cart is empty.</p>
        <Link to="/products" className="button">
          Browse Products
        </Link>
      </section>
    );
  }

  return (
    <section className="checkout">
      <h1>Checkout</h1>
      <p>Review your order before placing it.</p>

      {items.map((item) => (
        <div className="checkout-row" key={item.id}>
          <span>
            {item.name} × {item.quantity}
          </span>
          <strong>
            ₹{(item.price * item.quantity).toLocaleString("en-IN")}
          </strong>
        </div>
      ))}

      <h2>Total: ₹{total.toLocaleString("en-IN")}</h2>

      <button onClick={placeOrder}>Place Demo Order</button>
      <p className="note">
        This is a demo checkout. No payment will be processed.
      </p>
    </section>
  );
}