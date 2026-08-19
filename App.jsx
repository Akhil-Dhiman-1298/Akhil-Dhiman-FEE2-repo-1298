// import { useState } from 'react'
// import './App.css'
// import Product from './Product'

// function App() {
//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//           backgroundColor: "#e2e8f0",
//           gap: "20px",
//           flexWrap: "wrap",
//         }}
//       >

//         {/* Nike Shoes */}
//         <div
//           style={{
//             height: "350px",
//             width: "300px",
//             backgroundColor: "white",
//             color: "black",
//             borderRadius: "15px",
//             padding: "15px",
//             boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//             textAlign: "center",
//           }}
//         >

//           <h2>Nike Shoes</h2>

//           <img
//             src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
//             alt="Shoes"
//             style={{
//               width: "100%",
//               height: "180px",
//               objectFit: "cover",
//               borderRadius: "10px",
//             }}
//           />

//           <h3
//             style={{
//               color: "#16A34A",
//               fontSize: "22px"
//             }}
//           >
//             ₹5999
//           </h3>

//           <button
//             onClick={() => {
//               document.getElementById("cart").innerHTML +=
//                 "<p>Nike Shoes - ₹5999</p>"
//             }}
//             style={{
//               height: "40px",
//               width: "120px",
//               backgroundColor: "#2563EB",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//             }}
//           >
//             Add to Cart
//           </button>

//         </div>


//         {/* Dell Laptop */}
//         <div
//           style={{
//             height: "350px",
//             width: "300px",
//             backgroundColor: "white",
//             color: "black",
//             borderRadius: "15px",
//             padding: "15px",
//             boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//             textAlign: "center",
//           }}
//         >

//           <h2>Dell Laptop</h2>

//           <img
//             src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800"
//             alt="Dell Laptop"
//             style={{
//               width: "100%",
//               height: "180px",
//               objectFit: "cover",
//               borderRadius: "10px",
//             }}
//           />

//           <h3
//             style={{
//               color: "#16A34A",
//               fontSize: "22px"
//             }}
//           >
//             ₹117000
//           </h3>

//           <button
//             onClick={() => {
//               document.getElementById("cart").innerHTML +=
//                 "<p>Dell Laptop - ₹117000</p>"
//             }}
//             style={{
//               height: "40px",
//               width: "120px",
//               backgroundColor: "#2563EB",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//             }}
//           >
//             Add to Cart
//           </button>

//         </div>


//         {/* MacBook */}
//         <div
//           style={{
//             height: "350px",
//             width: "300px",
//             backgroundColor: "white",
//             color: "black",
//             borderRadius: "15px",
//             padding: "15px",
//             boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//             textAlign: "center",
//           }}
//         >

//           <h2>MacBook</h2>

//           <img
//             src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800"
//             alt="MacBook"
//             style={{
//               width: "100%",
//               height: "180px",
//               objectFit: "cover",
//               borderRadius: "10px",
//             }}
//           />

//           <h3
//             style={{
//               color: "#16A34A",
//               fontSize: "22px"
//             }}
//           >
//             ₹129999
//           </h3>

//           <button
//             onClick={() => {
//               document.getElementById("cart").innerHTML +=
//                 "<p>MacBook - ₹129999</p>"
//             }}
//             style={{
//               height: "40px",
//               width: "120px",
//               backgroundColor: "#2563EB",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//             }}
//           >
//             Add to Cart
//           </button>

//         </div>


//         {/* Lenovo Laptop */}
//         <div
//           style={{
//             height: "350px",
//             width: "300px",
//             backgroundColor: "white",
//             color: "black",
//             borderRadius: "15px",
//             padding: "15px",
//             boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//             textAlign: "center",
//           }}
//         >

//           <h2>Lenovo Laptop</h2>

//           <img
//             src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
//             alt="Lenovo Laptop"
//             style={{
//               width: "100%",
//               height: "180px",
//               objectFit: "cover",
//               borderRadius: "10px",
//             }}
//           />

//           <h3
//             style={{
//               color: "#16A34A",
//               fontSize: "22px"
//             }}
//           >
//             ₹79999
//           </h3>

//           <button
//             onClick={() => {
//               document.getElementById("cart").innerHTML +=
//                 "<p>Lenovo Laptop - ₹79999</p>"
//             }}
//             style={{
//               height: "40px",
//               width: "120px",
//               backgroundColor: "#2563EB",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//             }}
//           >
//             Add to Cart
//           </button>

//         </div>


//         {/* HP Laptop */}
//         <div
//           style={{
//             height: "350px",
//             width: "300px",
//             backgroundColor: "white",
//             color: "black",
//             borderRadius: "15px",
//             padding: "15px",
//             boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//             textAlign: "center",
//           }}
//         >

//           <h2>HP Laptop</h2>

//           <img
//             src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800"
//             alt="HP Laptop"
//             style={{
//               width: "100%",
//               height: "180px",
//               objectFit: "cover",
//               borderRadius: "10px",
//             }}
//           />

//           <h3
//             style={{
//               color: "#16A34A",
//               fontSize: "22px"
//             }}
//           >
//             ₹69999
//           </h3>

//           <button
//             onClick={() => {
//               document.getElementById("cart").innerHTML +=
//                 "<p>HP Laptop - ₹69999</p>"
//             }}
//             style={{
//               height: "40px",
//               width: "120px",
//               backgroundColor: "#2563EB",
//               color: "white",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//             }}
//           >
//             Add to Cart
//           </button>

//         </div>


//         {/* Cart */}
//         <div
//           style={{
//             width: "500px",
//             minHeight: "200px",
//             backgroundColor: "white",
//             color: "black",
//             borderRadius: "15px",
//             padding: "20px",
//             boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//           }}
//         >

//           <h2>My Cart</h2>

//           <div id="cart">
//             <p></p>
//           </div>

//         </div>

//       </div>

//     </>
//   )
// }

// export default App



import Product from "./Product";
import "./App.css";
import {useState} from "react";
function App() {
  return (
    <div className="product-container">

      <Product
        name="Nike Shoes"
        image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSO2Y-chf3F5UR_LxTbRIthEPzqbtp6XaEViNOIS1JrvJa0e5MIl34-HQK1145NMTfDW71ZgUqpPgPWDb3BdlTEOhy8Jyuc"
        price="3000"
        description="Good running shoes"
        available={true}
      />

      <Product
        name="Dell Laptop"
        image="https://5.imimg.com/data5/DS/EU/MY-38697753/dell-laptops.jpeg"
        price="70000"
        description="Powerful laptop"
        available={true}
      />

      <Product
        name="iPhone"
        price="80000"
        image="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/apple/494423016/0/IhIWUjyhz5-ArtMl5eQyu-Apple-iPhone-16-494423016-i-1-1200Wx1200H.jpeg"
        description="Latest Apple smartphone"
        available={false}
      />

      <Product
        name="Samasung Galaxy"
        price="90000"
        image="https://vlebazaar.in/image/cache/catalog/Samsung-Galaxy-S24-Ultra-5G-AI-Smartphone-Titanium-Gray-12GB-256GB-Stora/Samsung-Galaxy-S24-Ultra-5G-AI-Smartphone-Titanium-Gray-12GB-256GB-Storage-S928B-1500x1500.jpg"
        description="Latest samsung smartphone"
        available={true}
      />

      <Product
      name="Gaming Mouse"
      price="20000"
      image="https://m.media-amazon.com/images/I/61Mk3YqYHpL.jpg"
      description="most comfort mouse"
      available={true}
      />

      <Product
       name="Headphones"
       price="10000"
       image="https://png.pngtree.com/png-vector/20250703/ourmid/pngtree-black-headphones-sleek-3d-render-png-image_16600605.webp"
       description="Good quality headphone"
       available={false}
      />

      <Product
         name="Television"
         price="100000"
         image="https://5.imimg.com/data5/VS/OR/MY-25682946/led-hd-tv-500x500.jpg"
         description="HD telivision"
         available={true}
      />

      <Product
       name="Washing Machine"
       price="80000"
       image="https://media.istockphoto.com/id/1463361334/photo/washing-machine.jpg?s=612x612&w=0&k=20&c=XZbX6NeoxSvLldqyOFAm5yh0N-b5933E5wzfGRQtq_U="
       description="Fully automatic washing machine"
       available={true}
      />

      <Product 
      
      name="Tablet"
      price="90000"
      image="https://cdn.pixabay.com/photo/2019/03/19/17/55/tab-4066426_1280.png"
      description="Portable good looking tablet"
      available={true}
      />
      
      <Product 
      name="Printer"
      price="80000"
      image="https://i.pinimg.com/736x/93/ac/9d/93ac9dd2c89543a91cdb65ebabfbf4a6.jpg"
      description="Good black and coloured printer"
      available={true}
      />
    </div>
  );
}

export default App;









