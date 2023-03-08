import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div>
        
        <nav>
          <center><h1> Grocery Store</h1></center>
            <h1>Trader</h1>
        <ul>
          <li>
            <Link to="/traderprofile"> Create Trader Profile</Link>
          </li>
          <li>
            <Link to="/items">Create Items</Link>
          </li>
         
          <li>
            <Link to="/inventory">Add Inventory, View</Link>
          </li>
          <li>
            <Link to="/viewcustomer">View Customer Profiles</Link>
          </li>
          <li>
            <Link to="/promotion">Add Promotions, View</Link>
          </li>
          <li>
            <Link to="/viewitem"> View Items, Update Items, Delete Items</Link>
          </li>
        </ul>
        <h1>Customer</h1>
        <ul>
          <li>
            <Link to="/customerprofile"> Create Customer Profile</Link>
          </li>
          <li>
            <Link to="/viewitems">View Items</Link>
          </li>
          <li>
            <Link to="/cart">Add to Cart, View Cart</Link>
          </li>
          <li>
            <Link to="/wishlist">Add to Wish List, View</Link>
          </li>
          <li>
            <Link to="/purchase">Make Purchase</Link>
          </li>
        
        </ul>
        
      </nav>



        
        </div>
      
  )
}

export default Home

