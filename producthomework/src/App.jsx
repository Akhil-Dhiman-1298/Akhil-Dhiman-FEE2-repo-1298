import Product from "./Product";
import "./ProductApp.css";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const products = [
    {
      id: 1,
      name: "Nike Shoes",
      category: "shoes",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSO2Y-chf3F5UR_LxTbRIthEPzqbtp6XaEViNOIS1JrvJa0e5MIl34-HQK1145NMTfDW71ZgUqpPgPWDb3BdlTEOhy8Jyuc",
      price: 3000,
      description: "Good running shoes",
      available: true
    },
    {
      id: 2,
      name: "Dell Laptop",
      category: "laptop",
      image: "https://5.imimg.com/data5/DS/EU/MY-38697753/dell-laptops.jpeg",
      price: 70000,
      description: "Powerful laptop",
      available: true
    },
    {
      id: 3,
      name: "iPhone",
      category: "phone",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/apple/494423016/0/IhIWUjyhz5-ArtMl5eQyu-Apple-iPhone-16-494423016-i-1-1200Wx1200H.jpeg",
      price: 80000,
      description: "Latest Apple smartphone",
      available: false
    },
    {
      id: 4,
      name: "Samsung Galaxy",
      category: "phone",
      image: "https://vlebazaar.in/image/cache/catalog/Samsung-Galaxy-S24-Ultra-5G-AI-Smartphone-Titanium-Gray-12GB-256GB-Stora/Samsung-Galaxy-S24-Ultra-5G-AI-Smartphone-Titanium-Gray-12GB-256GB-Storage-S928B-1500x1500.jpg",
      price: 90000,
      description: "Latest samsung smartphone",
      available: true
    },
    {
      id: 5,
      name: "Gaming Mouse",
      category: "mouse",
      image: "https://m.media-amazon.com/images/I/61Mk3YqYHpL.jpg",
      price: 20000,
      description: "Most comfort mouse",
      available: true
    },
    {
      id: 6,
      name: "Headphones",
      category: "headphone",
      image: "https://png.pngtree.com/png-vector/20250703/ourmid/pngtree-black-headphones-sleek-3d-render-png-image_16600605.webp",
      price: 10000,
      description: "Good quality headphone",
      available: false
    },
    {
      id: 7,
      name: "Television",
      category: "tv",
      image: "https://5.imimg.com/data5/VS/OR/MY-25682946/led-hd-tv-500x500.jpg",
      price: 100000,
      description: "HD television",
      available: true
    },
    {
      id: 8,
      name: "Washing Machine",
      category: "washing",
      image: "https://media.istockphoto.com/id/1463361334/photo/washing-machine.jpg?s=612x612&w=0&k=20&c=XZbX6NeoxSvLldqyOFAm5yh0N-b5933E5wzfGRQtq_U=",
      price: 80000,
      description: "Fully automatic washing machine",
      available: true
    },
    {
      id: 9,
      name: "Tablet",
      category: "tablet",
      image: "https://cdn.pixabay.com/photo/2019/03/19/17/55/tab-4066426_1280.png",
      price: 90000,
      description: "Portable good looking tablet",
      available: true
    },
    {
      id: 10,
      name: "Printer",
      category: "printer",
      image: "https://i.pinimg.com/736x/93/ac/9d/93ac9dd2c89543a91cdb65ebabfbf4a6.jpg",
      price: 80000,
      description: "Good black and coloured printer",
      available: true
    }
  ];

  const filtered = products.filter(p => {
    const matchCategory =
      category === "all" || p.category === category;

    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>

      <button
        className="dark-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <input
        className="search-input"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="category-container">

        <button
          className={category === "all" ? "active" : ""}
          onClick={() => setCategory("all")}
        >
          All
        </button>

        <button
          className={category === "shoes" ? "active" : ""}
          onClick={() => setCategory("shoes")}
        >
          Shoes
        </button>

        <button
          className={category === "laptop" ? "active" : ""}
          onClick={() => setCategory("laptop")}
        >
          Laptop
        </button>

        <button
          className={category === "phone" ? "active" : ""}
          onClick={() => setCategory("phone")}
        >
          Phone
        </button>

        <button
          className={category === "mouse" ? "active" : ""}
          onClick={() => setCategory("mouse")}
        >
          Mouse
        </button>

        <button
          className={category === "headphone" ? "active" : ""}
          onClick={() => setCategory("headphone")}
        >
          Headphone
        </button>

        <button
          className={category === "tv" ? "active" : ""}
          onClick={() => setCategory("tv")}
        >
          TV
        </button>

        <button
          className={category === "washing" ? "active" : ""}
          onClick={() => setCategory("washing")}
        >
          Washing Machine
        </button>

        <button
          className={category === "tablet" ? "active" : ""}
          onClick={() => setCategory("tablet")}
        >
          Tablet
        </button>

        <button
          className={category === "printer" ? "active" : ""}
          onClick={() => setCategory("printer")}
        >
          Printer
        </button>

      </div>

      <div className="product-container">

        {filtered.map(p => (
          <Product
            key={p.id}
            name={p.name}
            image={p.image}
            price={p.price}
            description={p.description}
            available={p.available}
          />
        ))}

      </div>

      {filtered.length === 0 && (
        <p className="no-products">
          No products found
        </p>
      )}

    </div>
  );
}

export default App;