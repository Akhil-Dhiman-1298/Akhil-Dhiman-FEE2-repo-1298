import { Link, useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  return (
    <section className="hero">
      {location.state?.message && (
        <p className="success">{location.state.message}</p>
      )}

      <h1>Welcome to ShoppingmadeEasy</h1>
      <p>Discover great products at great prices.</p>
      <Link to="/products" className="button">
        Explore Products
      </Link>
    </section>
  );
}