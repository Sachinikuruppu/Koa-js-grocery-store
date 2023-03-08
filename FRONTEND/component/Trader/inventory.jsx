import React from 'react'
import {useState,useEffect}from 'react'

function Inventory() {
//get inventory details
const [inventories,setInventories] = useState([]);

const getInventories = async()=>{
  const res = await fetch("http://localhost:5000/admin/getssAll");
  const stock = await res.json();
  setInventories(stock)
}

useEffect(()=>{
  getInventories();
},[]);

const data = inventories.map((stock) => (
  <div key={stock.id}>
    <h3>Name : {stock.name}</h3>
    <p>Type :Rs.{stock.type}</p>
    <p>Description : {stock.description}</p>
    <p>Quantity: {stock.quantity}</p>
       
  </div>
));

//post
const [name,setName] = useState("");
const [type,setType] = useState("");
const [description,setDescription] = useState("");
const [quantity,setQuantity] = useState("");

const handleSubmit = async (e) =>{
  e.preventDefault();
  try {
      const res = await fetch("http://localhost:5000/admin/addsstock",{
          method:"POST",
          body:JSON.stringify({
              name:name,
              type:type,
              description:description,
              quantity:quantity
          }),
          headers:{"Content-Type":"application/json"}
          
      })
      await res.json();
      if(res.status === 201){
          alert("Inventory Details Created")
      }
  } catch (error) {
      
  }
}

  return (
    <div>
        <form  onSubmit={handleSubmit}>
            <label>Name</label><br/>
            <input type="text" name="name" onChange={(e)=>setName(e.target.value)}></input><br/>
            <label>Type</label><br/>
            <textarea name="type" onChange={(e)=>setType(e.target.value)}/><br/>
            <label>Description</label><br/>
            <input type="text" name="description" onChange={(e)=>setDescription(e.target.value)}></input><br/>
            <label>Quantiy</label><br/>
            <input type="text" name="quantity" onChange={(e)=>setQuantity(e.target.value)} ></input><br/><br/>
            <button type="submit">Create</button>
            <button type="submit">View</button>
           
{data}

        </form>
        </div>
      
  )
}

export default Inventory

