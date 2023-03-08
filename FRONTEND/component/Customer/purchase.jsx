import React from 'react'
import {useState} from "react"

function Purchase() {
  //post Purchase
const [item,setItem] = useState("");
const [quantity,setQuantity] = useState("");
const [total,setTotal] = useState("");

const handleSubmit = async (e) =>{
  e.preventDefault();
  try {
      const res = await fetch(" http://localhost:5000/customer/addpurchase",{
          method:"POST",
          body:JSON.stringify({
              item:item,
              quantity:quantity,
              total:total
              
          }),
          headers:{"Content-Type":"application/json"}
          
      })
      await res.json();
      if(res.status === 201){
          alert("Successfully Made Purchase")
      }
  } catch (error) {
      
  }
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
       
            <label>Item</label><br/>
            <input type="text"  name="item" onChange={(e)=>setItem(e.target.value)}></input><br/>
     
            <label>Quantity</label><br/>
            <input type="number"  name="quantity" onChange={(e)=>setQuantity(e.target.value)}></input><br/>

            <label>Total(Rs.)</label><br/>
            <input type="text"  name="total" onChange={(e)=>setTotal(e.target.value)}></input><br/>
          
            <br/>
          
            <button type="submit">Make Purchase</button>
          
          


        </form>
        </div>
      
  )
}

export default Purchase