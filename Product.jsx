
import {useState} from "react";
function Product(props) {

    const [count,setcount]=useState(0);
    return (
       <>
       <div className="product-card">
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p>
            {props.description}
            </p>
            <p>
              Cost: ₹{props.price}
            </p>

            <p>
                Available:{" "}
                <span className={props.available ? "available" : "not-available"}>
                    {props.available ? "Yes" : "No"}
                </span>
            </p> 

            <h3>Product purchased: {count}</h3>             
            <div className="box-flex">
            <button className="cart-button" onClick={()=>setcount(count+1)}>
                {props.available ?"Add to Cart":"Not Available"}
            </button>
            
             
            {props.available ? (<button onClick={() =>{ 
                 if(count>0){
                    let result=confirm("Are you sure you want to place order");

                    if(result){
                        alert('Your order has been placed'+count*props.price);
                        setcount(0);
                    }
                    
                 }
                 else{
                    alert("Please add something in cart");
                 }
                }}>
                Buy Now
            </button>):(<button style={{backgroundColor:"grey",cursor:"default"}}> 
                Buy now
            </button>)}


            <button onClick={()=>setcount(count>0?count-1:0)}className="cart-button">Remove from cart</button>
            </div>
       </div>
       </>
    )
}

export default Product