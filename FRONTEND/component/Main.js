import React from "react";
import Item from "./Trader/item.jsx"
import EditItem from "./Trader/edititem.jsx";
import Traderprofile from "./Trader/traderprofile.jsx";
import Inventory from "./Trader/inventory.jsx";
import Viewcustomer from "./Trader/viewcustomer.jsx";
import Customerprofile from "./Customer/customerprofile.jsx";
import Viewitems from "./Customer/viewitems.jsx";
import Viewitem from "./Trader/viewitem.jsx";
import Cart from "./Customer/cart.jsx";
import Wishlist from "./Customer/wishlist.jsx";
import Purchase from "./Customer/purchase.jsx";
import Promotion from "./Trader/promotion.jsx";
import Home from "./home.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Main(){
    return(
        <>
        
        <Router>
          <Routes>
          <Route path="/" element={<Home/>}></Route>
            <Route path="/items" element={<Item />}></Route>
            <Route path="/item/edit/:id" element={<EditItem />}></Route>
            <Route path="/traderprofile" element={<Traderprofile/>}></Route>
            <Route path="/inventory" element={<Inventory/>}></Route>
            <Route path="/viewcustomer" element={<Viewcustomer/>}></Route>
            <Route path="/customerprofile" element={<Customerprofile/>}></Route>
            <Route path="/viewitems" element={<Viewitems/>}></Route>
            <Route path="/viewitem" element={<Viewitem/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/wishlist" element={<Wishlist/>}></Route>
            <Route path="/purchase" element={<Purchase/>}></Route>
            <Route path="/promotion" element={<Promotion/>}></Route>
          </Routes>
        </Router>
      </>
    )
}
export default Main;