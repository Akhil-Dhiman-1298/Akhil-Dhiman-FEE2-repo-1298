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









