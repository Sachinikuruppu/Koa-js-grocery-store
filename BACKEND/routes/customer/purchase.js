import Router from "@koa/router";
import {  addpurchase,getAllpurchases} from "../../controllers/customer/purchase.js";
const orderrouter=new Router({
    prefix:"/customer"
});
//post wish to list
orderrouter.post("/addpurchase",(ctx)=>{
    const data=ctx.request.body;
    ctx.body=addpurchase(data);
    ctx.set("Content-Type","application.json");
    ctx.status=201;
});
//get wishlist
orderrouter.get("/getAllpurchase",(ctx)=>{
    ctx.body=getAllpurchases();
    ctx.set("Content-Type","application.json");
    ctx.status=200;
});


export default orderrouter;