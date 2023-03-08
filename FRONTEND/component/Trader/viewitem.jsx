import React from 'react'
import {useState,useEffect} from "react"
import { Link } from "react-router-dom";
function ViewItem() {

  const destroy = (id) => {
    fetch(`http://localhost:5000/admin/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (window.confirm("Do u want to continue?")) {
        window.location.href = "/viewitem";
      }
    });
  };

//get item
const [items,setItems] = useState([]);

const getItems = async()=>{
  const res = await fetch("http://localhost:5000/customer/getAllitems");
  const itm = await res.json();
  setItems(itm)
}

useEffect(()=>{
  getItems();
},[]);


const data = items.map((itm) => (
  <div key={itm.id}>
    <h3>Name : {itm.name}</h3>
    <p>Description :Rs.{itm.description}</p>
    <p>Price : {itm.price}</p>
    <p>Type : {itm.type}</p>
    <Link to={`/item/edit/${itm.id}`}>
    <button>Update</button></Link>
    <button onClick={() => destroy(itm.id)}>Delete</button>
       
  </div>
));
//
const [name,setName] = useState("");
const [description,setDescription] = useState("");
const [price,setPrice] = useState("");
const [type,setType] = useState("");

const handleSubmit = async (e) =>{
  e.preventDefault();
  try {
      const res = await fetch("http://localhost:5000/admin/addpromo",{
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
       
           

            {data}


        
        </div>
      
  )
}

export default ViewItem

