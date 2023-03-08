import React from 'react'
import {useState,useEffect} from "react"

function Cart() {
  //get cart
  const [carts,setCart] = useState([]);

  
const getCarts = async()=>{
  const res = await fetch(" http://localhost:5000/customer/getcartAll");
  const crt = await res.json();
  setCart(crt)
}

useEffect(()=>{
  getCarts();
},[]);

const data = carts.map((crt) => (
  <div key={crt.id}>
    <h3>Item : {crt.item}</h3>
    <p>Price :Rs.{crt.price}</p>
    <p>Quantity : {crt.quantity}</p>
   
       
  </div>
));

//post cart
const [item,setItem] = useState("");
const [price,setPrice] = useState("");
const [quantity,setQuantity] = useState("");

const handleSubmit = async (e) =>{
  e.preventDefault();
  try {
      const res = await fetch("http://localhost:5000/customer/addcart",{
          method:"POST",
          body:JSON.stringify({
              item:item,
              price:price,
              quantity:quantity
              
          }),
          headers:{"Content-Type":"application/json"}
          
      })
      await res.json();
      if(res.status === 201){
          alert("Added to Cart")
      }
  } catch (error) {
      
  }
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
       
            <label>Item</label><br/>
            <input type="text"  name="name" onChange={(e)=>setItem(e.target.value)}></input><br/>
            <label>Price(Rs)</label><br/>
            <input type="text"  name="price" onChange={(e)=>setPrice(e.target.value)}></input><br/>
            <label>Quantity</label><br/>
            <input type="number"  name="quantity" onChange={(e)=>setQuantity(e.target.value)}></input><br/><br/>
          
            <button type="submit">Add to Cart</button>
            
            <h1>Cart</h1>
            
          {data}


        </form>
        </div>
      
  )
}

export default Cart