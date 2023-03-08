import Router from "@koa/router";
import {  addwishlist,getwishlistAll} from "../../controllers/customer/wishlist.js";
const wishrouter=new Router({
    prefix:"/customer"
});
//post wish to list
wishrouter.post("/addwish",(ctx)=>{
    const data=ctx.request.body;
    ctx.body=addwishlist(data);
    ctx.set("Content-Type","application.json");
    ctx.status=201;
});
//get wishlist
wishrouter.get("/getwishlistAll",(ctx)=>{
    ctx.body=getwishlistAll();
    ctx.set("Content-Type","application.json");
    ctx.status=200;
});


export default wishrouter;