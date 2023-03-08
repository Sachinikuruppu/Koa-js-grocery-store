import Router from "@koa/router";
import { getitemsAll } from "../../controllers/admin/item.js"


const itemsrouter=new Router({
    prefix:"/customer"
});


itemsrouter.get("/getAllitems",(ctx)=>{
    ctx.body=getitemsAll();
    ctx.set("Content-Type","application.json");
    ctx.status=200;
});




export default itemsrouter;
