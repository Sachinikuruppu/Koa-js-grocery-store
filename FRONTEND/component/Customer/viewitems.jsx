import React from 'react'
import {useState,useEffect}from 'react'

function Viewitems() {
//get Item Details
  const [items,setItems]= useState([]);

  const getItems = async()=>{
    const res = await fetch(" http://localhost:5000/customer/getAllitems");
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
      <p>Type: {itm.type}</p>
         
    </div>
  ));

  return (
    <div>
     
        {data}

        </div>
      
  )
}

export default Viewitems