import React from 'react'
import {useState} from "react"



function Item() {
  const [name,setName] = useState("");
const [description,setDescription] = useState("");
const [price,setPrice] = useState("");
const [type,setType] = useState("");

const handleSubmit = async (e) =>{
  e.preventDefault();
  try {
      const res = await fetch("http://localhost:5000/admin/additem",{
          method:"POST",
          body:JSON.stringify({
              name:name,
              description:description,
              price:price,
              type:type
          }),
          headers:{"Content-Type":"application/json"}
          
      })
      await res.json();
      if(res.status === 201){
          alert("Item Created")
      }
  } catch (error) {
      
  }
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label><br/>
            <input type="text" name="name" onChange={(e)=>setName(e.target.value)}></input><br/>
            <label>Description</label><br/>
            <textarea name="description" onChange={(e)=>setDescription(e.target.value)} /><br/>
            <label>Price(Rs)</label><br/>
            <input type="text" name="price" onChange={(e)=>setPrice(e.target.value)}></input><br/>
            <label>Type</label><br/>
            <input type="text" name="name" onChange={(e)=>setType(e.target.value)}></input><br/><br/>
            <button type="submit">Create</button>
            
            
            <button type="submit" >Edit</button>
            <button type="submit">Delete</button>


        </form>
        </div>
      
  )
}

export default Item

