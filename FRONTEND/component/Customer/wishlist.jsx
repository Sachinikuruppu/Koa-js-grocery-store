import React from 'react'
import {useState,useEffect} from "react"

function Wishlist() {
  //get wishlist
  const [wishlists,setWishlist] = useState([]);

  
const getWishlists = async()=>{
  const res = await fetch(" http://localhost:5000/customer/getwishlistAll");
  const wlist = await res.json();
  setWishlist(wlist)
}

useEffect(()=>{
  getWishlists();
},[]);

const data = wishlists.map((wlist) => (
  <div key={wlist.id}>
    <h3>Item : {wlist.item}</h3>
    <p>Price :Rs.{wlist.price}</p>
    <p>Quantity : {wlist.quantity}</p>
   
       
  </div>
));

//post cart
const [item,setItem] = useState("");
const [price,setPrice] = useState("");
const [quantity,setQuantity] = useState("");

const handleSubmit = async (e) =>{
  e.preventDefault();
  try {
      const res = await fetch("http://localhost:5000/customer/addwish",{
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
          alert("Added to Wishlist")
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
          
            <button type="submit">Add to Wishlist</button>
            
            <h1>Wishlist</h1>
            
          {data}


        </form>
        </div>
      
  )
}

export default Wishlist