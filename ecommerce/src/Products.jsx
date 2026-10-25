import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2299,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 1799,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    category: "Fashion",
  },
  {
    id: 4,
    name: "Backpack",
    price: 999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "Fashion",
  },
  {
    id: 5,
    name: "Camera",
    price: 4999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    category: "Electronics",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 799,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    category: "Fashion",
  },
  {
    id: 7,
    name: "Coffee Mug",
    price: 299,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500",
    category: "Home",
  },
  {
    id: 8,
    name: "Desk Lamp",
    price: 1199,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    category: "Home",
  },
];

export default function Products() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [message, setMessage] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
    category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  function handleAdd(product) {
    dispatch(addToCart(product));
    setMessage(`${product.name} added to cart!`);
  }

  return (
    <section>
      <h1>Our Products</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
        </select>
      </div>

      {message && <p className="success">{message}</p>}

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <span className="category">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="price">₹{product.price.toLocaleString("en-IN")}</p>
              <button onClick={() => handleAdd(product)}>
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && <p>No products found.</p>}
    </section>
  );
}