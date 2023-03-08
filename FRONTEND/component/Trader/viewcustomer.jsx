import React from 'react'
import {useState,useEffect}from 'react'

function Viewcustomer() {
  //get customer details
  const [customers,setCustomers]= useState([]);

  const getCustomers = async()=>{
    const res = await fetch(" http://localhost:5000/admin/getAllCust");
    const cus = await res.json();
    setCustomers(cus)
  }

  useEffect(()=>{
    getCustomers();
  },[]);

  const data = customers.map((cus) => (
    <div key={cus.id}>
      <h3>Name : {cus.name}</h3>
      <p>Gender :Rs.{cus.gender}</p>
      <p>Hometown : {cus.hometown}</p>
      <p>E-mail: {cus.email}</p>
         
    </div>
  ));

  return (
    <div>
      
           
          
{data}

   
        </div>
      
  )
}

export default Viewcustomer