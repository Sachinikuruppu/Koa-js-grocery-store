import React from 'react'
import {useState} from "react"

function Traderprofile() {
//post trader profile
const [name,setName] = useState("");
const [gender,setGender] = useState("");
const [hometown,setHometown] = useState("");
const [email,setEmail] = useState("");


const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        const res = await fetch("http://localhost:5000/admin/addadmin",{
            method:"POST",
            body:JSON.stringify({
                name:name,
                gender:gender,
                hometown:hometown,
                email:email
            }),
            headers:{"Content-Type":"application/json"}
            
        })
        await res.json();
        if(res.status === 201){
            alert("Trader Profile Created")
        }
    } catch (error) {
        
    }
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label><br/>
            <input type="text" name="name" onChange={(e)=>setName(e.target.value)}></input><br/>
            <label>Gender</label><br/>
            <input type="radio" value="Female" name="gender" onChange={(e)=>setGender(e.target.value)}/> Female
            <input type="radio" value="Other" name="gender" onChange={(e)=>setGender(e.target.value)}/> Male 
            <input type="radio" value="Other" name="gender" onChange={(e)=>setGender(e.target.value)}/> Other <br/>
            <label>Hometown</label><br/>
            <input type="text" name="hometown" onChange={(e)=>setHometown(e.target.value)}></input><br/>
            <label>E-mail</label><br/>
            <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}></input><br/><br/>
            <button type="submit">Create Trader Profile</button>
          


        </form>
        </div>
      
  )
}

export default Traderprofile