import Product from "./Product";
import "./ProductApp.css";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Nike Shoes",
      category: "shoes",
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSO2Y-chf3F5UR_LxTbRIthEPzqbtp6XaEViNOIS1JrvJa0e5MIl34-HQK1145NMTfDW71ZgUqpPgPWDb3BdlTEOhy8Jyuc",
      price: "3000",
      description: "Good running shoes",
      available: true
    },
    {
      id: 2,
      name: "Dell Laptop",
      category: "laptop",
      image: "https://5.imimg.com/data5/DS/EU/MY-38697753/dell-laptops.jpeg",
      price: "70000",
      description: "Powerful laptop",
      available: true
    },
    {
      id: 3,
      name: "iPhone",
      category: "phone",
      price: "80000",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/apple/494423016/0/IhIWUjyhz5-ArtMl5eQyu-Apple-iPhone-16-494423016-i-1-1200Wx1200H.jpeg",
      description: "Latest Apple smartphone",
      available: false
    },
    {
      id: 4,
      name: "Samsung Galaxy",
      category: "phone",
      price: "90000",
      image: "https://vlebazaar.in/image/cache/catalog/Samsung-Galaxy-S24-Ultra-5G-AI-Smartphone-Titanium-Gray-12GB-256GB-Stora/Samsung-Galaxy-S24-Ultra-5G-AI-Smartphone-Titanium-Gray-12GB-256GB-Storage-S928B-1500x1500.jpg",
      description: "Latest samsung smartphone",
      available: true
    },
    {
      id: 5,
      name: "Gaming Mouse",
      category: "mouse",
      price: "20000",
      image: "https://m.media-amazon.com/images/I/61Mk3YqYHpL.jpg",
      description: "most comfort mouse",
      available: true
    },
    {
      id: 6,
      name: "Headphones",
      category: "headphone",
      price: "10000",
      image: "https://png.pngtree.com/png-vector/20250703/ourmid/pngtree-black-headphones-sleek-3d-render-png-image_16600605.webp",
      description: "Good quality headphone",
      available: false
    },
    {
      id: 7,
      name: "Television",
      category: "tv",
      price: "100000",
      image: "https://5.imimg.com/data5/VS/OR/MY-25682946/led-hd-tv-500x500.jpg",
      description: "HD television",
      available: true
    },
    {
      id: 8,
      name: "Washing Machine",
      category: "washing",
      price: "80000",
      image: "https://media.istockphoto.com/id/1463361334/photo/washing-machine.jpg?s=612x612&w=0&k=20&c=XZbX6NeoxSvLldqyOFAm5yh0N-b5933E5wzfGRQtq_U=",
      description: "Fully automatic washing machine",
      available: true
    },
    {
      id: 9,
      name: "Tablet",
      category: "tablet",
      price: "90000",
      image: "https://cdn.pixabay.com/photo/2019/03/19/17/55/tab-4066426_1280.png",
      description: "Portable good looking tablet",
      available: true
    },
    {
      id: 10,
      name: "Printer",
      category: "printer",
      price: "80000",
      image: "https://i.pinimg.com/736x/93/ac/9d/93ac9dd2c89543a91cdb65ebabfbf4a6.jpg",
      description: "Good black and coloured printer",
      available: true
    }
  ];


  const filtered = products.filter(p => {
    const matchCategory = category === "all" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
     
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px 20px",
          width: "400px",
          borderRadius: "25px",
          border: "2px solid #ddd",
          fontSize: "16px"
        }}
      />

      
      <div style={{ 
        display: "flex", 
        gap: "10px", 
        justifyContent: "center", 
        flexWrap: "wrap",
        margin: "20px"
      }}>
        <button 
          onClick={() => setCategory("all")}
          style={{
            padding: "8px 20px",
            background: category === "all" ? "#2563EB" : "#ddd",
            color: category === "all" ? "white" : "black",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
          All
        </button>
        <button 
          onClick={() => setCategory("shoes")}
          style={{
            padding: "8px 20px",
            background: category === "shoes" ? "#2563EB" : "#ddd",
            color: category === "shoes" ? "white" : "black",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
           Shoes
        </button>
        <button 
          onClick={() => setCategory("laptop")}
          style={{
            padding: "8px 20px",
            background: category === "laptop" ? "#2563EB" : "#ddd",
            color: category === "laptop" ? "white" : "black",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
          Laptop
        </button>
        <button 
          onClick={() => setCategory("phone")}
          style={{
            padding: "8px 20px",
            background: category === "phone" ? "#2563EB" : "#ddd",
            color: category === "phone" ? "white" : "black",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
           Phone
        </button>
        <button 
          onClick={() => setCategory("mouse")}
          style={{
            padding: "8px 20px",
            background: category === "mouse" ? "#2563EB" : "#ddd",
            color: category === "mouse" ? "white" : "black",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
           Mouse
        </button>
        <button 
          onClick={() => setCategory("headphone")}
          style={{
            padding: "8px 20px",
            background: category === "headphone" ? "#2563EB" : "#ddd",
            color: category === "headphone" ? "white" : "black",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
           Headphone
        </button>
        <button 
          onClick={() => setCategory("tv")}
          style={{
            padding: "8px 20px",
            background: category === "tv" ? "#2563EB" : "#ddd",
            color: category === "tv" ? "white" : "black",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
           TV
        </button>
        <button 
          onClick={() => setCategory("washing")}
          style={{
            padding: "8px 20px",
            background: category === "washing" ? "#2563EB" : "#ddd",
            color: category === "washing" ? "white" : "black",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
           Washing Machine
        </button>
        <button 
          onClick={() => setCategory("tablet")}
          style={{
            padding: "8px 20px",
            background: category === "tablet" ? "#2563EB" : "#ddd",
            color: category === "tablet" ? "white" : "black",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
           Tablet
        </button>
        <button 
          onClick={() => setCategory("printer")}
          style={{
            padding: "8px 20px",
            background: category === "printer" ? "#2563EB" : "#ddd",
            color: category === "printer" ? "white" : "black",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
           Printer
        </button>
      </div>

      {/* Products */}
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
        <p style={{ textAlign: "center", marginTop: "50px", fontSize: "18px" }}>
          No products found
        </p>
      )}
    </div>
  );
}

export default App;