import Router from "@koa/router";
import {addcart,getcartAll} from "../../controllers/customer/cart.js"
const cartrouter=new Router({
    prefix:"/customer"
});
//post wish to list
cartrouter.post("/addcart",(ctx)=>{
    const data=ctx.request.body;
    ctx.body=addcart(data);
    ctx.set("Content-Type","application.json");
    ctx.status=201;
});
//get wishlist
cartrouter.get("/getcartAll",(ctx)=>{
    ctx.body=getcartAll();
    ctx.set("Content-Type","application.json");
    ctx.status=200;
});


export default cartrouter;