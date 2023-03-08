import React from 'react'
import {useState,useEffect} from "react"

function Promotion() {


//get promotion
const [promotions,setPromotions] = useState([]);

const getPromotions = async()=>{
  const res = await fetch("http://localhost:5000/admin/getAllpromo");
  const promo = await res.json();
  setPromotions(promo)
}

useEffect(()=>{
  getPromotions();
},[]);


const data = promotions.map((promo) => (
  <div key={promo.id}>
    <h3>Name : {promo.name}</h3>
    <p>Description :Rs.{promo.description}</p>
    <p>offprice : {promo.offprice}</p>
    <p>season : {promo.season}</p>
       
  </div>
));

//post

  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [offprice,setOffprice] = useState("");
  const [season,setSeason] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        const res = await fetch("http://localhost:5000/admin/addpromo",{
            method:"POST",
            body:JSON.stringify({
                name:name,
                description:description,
                offprice:offprice,
                season:season
            }),
            headers:{"Content-Type":"application/json"}
            
        })
        await res.json();
        if(res.status === 201){
            alert("Promotion Created")
        }
    } catch (error) {
        
    }
}


  return (
    <div>
        <form  onSubmit={handleSubmit}>
            <label>Name</label><br/>
            <input type="text"  name="name" onChange={(e)=>setName(e.target.value)}></input><br/>
            <label>Description</label><br/>
            <textarea  name="description" onChange={(e)=>setDescription(e.target.value)} /><br/>
            <label>Off Price</label><br/>
            <input type="text" name="offprice" onChange={(e)=>setOffprice(e.target.value)}></input><br/>
            <label>Season</label><br/>
            <input type="text"  name="season" onChange={(e)=>setSeason(e.target.value)}></input><br/><br/>
            <button type="submit">Create</button>
            <button type="submit">View</button>
           
           {data}


        </form>
        </div>
      
  )
}

export default Promotion

