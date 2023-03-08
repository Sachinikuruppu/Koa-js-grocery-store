import React from 'react'
import {useState,useEffect} from "react"
import { useParams } from "react-router-dom";


function EditItem() {

//get item

//
const params = useParams();
const [name,setName] = useState("");
const [description,setDescription] = useState("");
const [price,setPrice] = useState("");
const [type,setType] = useState("");

const init = async () => {
 
  const response = await fetch(`http://localhost:5000/admin/${params.id}`);
  const data = await response.json();
  setName(data.name);
  setDescription(data.description);
  setPrice(data.price);
  setType(data.type);
   
};
useEffect(() => {
  init();
}, []);
const handleSubmit = async (e) =>{
  e.preventDefault();
  try {
      const res = await fetch(`http://localhost:5000/admin/${params.id}`,{
          method:"PUT",
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
          alert("Item Updated")
      }
  } catch (error) {
      
  }
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label><br/>
            <input type="text"  name="name" onChange={(e)=>setName(e.target.value)} value={name}></input><br/>
            <label>Description</label><br/>
            <textarea  name="description" onChange={(e)=>setDescription(e.target.value)} value={description}/><br/>
            <label>Price(Rs)</label><br/>
            <input type="text" name="price" onChange={(e)=>setPrice(e.target.value)} value={price}></input><br/>
            <label>Type</label><br/>
            <input type="text" name="type" onChange={(e)=>setType(e.target.value)} value={type} ></input><br/><br/>
            <button type="submit">Update</button>
            <button type="submit">Delete</button>

            


        </form>
        </div>
      
  )
}

export default EditItem

