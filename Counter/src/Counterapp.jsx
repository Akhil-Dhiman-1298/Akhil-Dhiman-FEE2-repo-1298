// Counter by Akhil Dhiman


import { useState } from 'react'
import './App.css'

function Counterapp() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
           <h2> Counter App By Akhil Dhiman</h2>
           <p>Count :{' '} {count}</p>
           <div className="buttoncontainer">
             <button onClick={()=>setCount(count+1)}>Increase</button>
             <button onClick={()=>setCount(count>0?count-1:0)}>Decrease</button>
             <button onClick={()=>setCount(count*5)}>Multiply by 5</button>
             <button onClick={()=>setCount(count/5)}>Divide by 5</button>
             <button onClick={()=>setCount(count*2)}>Multiply by 2</button>
             <button onClick={()=>setCount(0)}>Set count to 0</button>
           </div>
      </div>
    </>
  )
}

export default Counterapp
